import express from 'express';
import Database from 'better-sqlite3';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send({'message': 'SHIPTIVITY API. Read documentation to see API docs'});
});

// We are keeping one connection alive for the rest of the life application for simplicity
const db = new Database('./clients.db');

// Don't forget to close connection when server gets terminated
const closeDb = () => db.close();
process.on('SIGTERM', closeDb);
process.on('SIGINT', closeDb);

/**
 * Validate id input
 * @param {any} id
 */
const validateId = (id) => {
  if (Number.isNaN(id)) {
    return {
      valid: false,
      messageObj: {
      'message': 'Invalid id provided.',
      'long_message': 'Id can only be integer.',
      },
    };
  }
  const client = db.prepare('select * from clients where id = ? limit 1').get(id);
  if (!client) {
    return {
      valid: false,
      messageObj: {
      'message': 'Invalid id provided.',
      'long_message': 'Cannot find client with that id.',
      },
    };
  }
  return {
    valid: true,
  };
}

/**
 * Validate priority input
 * @param {any} priority
 */
const validatePriority = (priority) => {
  if (Number.isNaN(priority)) {
    return {
      valid: false,
      messageObj: {
      'message': 'Invalid priority provided.',
      'long_message': 'Priority can only be positive integer.',
      },
    };
  }
  return {
    valid: true,
  }
}

/**
 * Get all of the clients. Optional filter 'status'
 * GET /api/v1/clients?status={status} - list all clients, optional parameter status: 'backlog' | 'in-progress' | 'complete'
 */
app.get('/api/v1/clients', (req, res) => {
  const status = req.query.status;
  if (status) {
    // status can only be either 'backlog' | 'in-progress' | 'complete'
    if (status !== 'backlog' && status !== 'in-progress' && status !== 'complete') {
      return res.status(400).send({
        'message': 'Invalid status provided.',
        'long_message': 'Status can only be one of the following: [backlog | in-progress | complete].',
      });
    }
    const clients = db.prepare('select * from clients where status = ?').all(status);
    return res.status(200).send(clients);
  }
  const statement = db.prepare('select * from clients');
  const clients = statement.all();
  return res.status(200).send(clients);
});

/**
 * Get a client based on the id provided.
 * GET /api/v1/clients/{client_id} - get client by id
 */
app.get('/api/v1/clients/:id', (req, res) => {
  const id = parseInt(req.params.id , 10);
  const { valid, messageObj } = validateId(id);
  if (!valid) {
    res.status(400).send(messageObj);
  }
  return res.status(200).send(db.prepare('select * from clients where id = ?').get(id));
});

/**
 * Update client information based on the parameters provided.
 * When status is provided, the client status will be changed
 * When priority is provided, the client priority will be changed with the rest of the clients accordingly
 * Note that priority = 1 means it has the highest priority (should be on top of the swimlane).
 * No client on the same status should not have the same priority.
 * This API should return list of clients on success
 *
 * PUT /api/v1/clients/{client_id} - change the status of a client
 *    Data:
 *      status (optional): 'backlog' | 'in-progress' | 'complete',
 *      priority (optional): integer,
 *
 */
app.put('/api/v1/clients/:id', (req, res) => {
  const id = parseInt(req.params.id , 10);
  const { valid, messageObj } = validateId(id);
  if (!valid) {
    res.status(400).send(messageObj);
  }

  let { status, priority } = req.body;
  let clients = db.prepare('select * from clients').all();
  const client = clients.find(client => client.id === id);

  /* ---------- Update code below ----------*/

  // If no status or priority provided, do nothing
  if (!status && !priority) {
    return res.status(200).send(clients);
  }

  const oldStatus = client.status;
  const oldPriority = client.priority;
  const newStatus = status || oldStatus;

  // Validate priority if provided
  if (priority !== undefined) {
    const { valid: validPriority, messageObj: priorityMessage } = validatePriority(priority);
    if (!validPriority) {
      return res.status(400).send(priorityMessage);
    }
  }

  // Case 1: Only status changed (no priority specified)
  if (status && status !== oldStatus && !priority) {
    // Reorder priorities in old status (remove gap)
    const clientsInOldStatus = clients.filter(c => c.status === oldStatus && c.id !== id);
    clientsInOldStatus
      .filter(c => c.priority > oldPriority)
      .forEach(c => {
        db.prepare('UPDATE clients SET priority = ? WHERE id = ?')
          .run(c.priority - 1, c.id);
      });

    // Get the max priority in the new status
    const clientsInNewStatus = clients.filter(c => c.status === newStatus);
    const maxPriority = clientsInNewStatus.length > 0 
      ? Math.max(...clientsInNewStatus.map(c => c.priority))
      : 0;
    const newPriority = maxPriority + 1;

    // Update the client
    db.prepare('UPDATE clients SET status = ?, priority = ? WHERE id = ?')
      .run(newStatus, newPriority, id);
  }
  // Case 2: Status changed with priority specified
  else if (status && status !== oldStatus && priority) {
    // Remove from old status (reorder priorities)
    const clientsInOldStatus = clients.filter(c => c.status === oldStatus && c.id !== id);
    clientsInOldStatus
      .filter(c => c.priority > oldPriority)
      .forEach(c => {
        db.prepare('UPDATE clients SET priority = ? WHERE id = ?')
          .run(c.priority - 1, c.id);
      });

    // Insert into new status at specified priority
    const clientsInNewStatus = clients.filter(c => c.status === newStatus);
    const maxPriorityInNewStatus = clientsInNewStatus.length > 0 
      ? Math.max(...clientsInNewStatus.map(c => c.priority))
      : 0;
    
    // Ensure priority is within valid range
    const newPriority = Math.min(priority, maxPriorityInNewStatus + 1);

    // Shift priorities in new status to make room
    clientsInNewStatus
      .filter(c => c.priority >= newPriority)
      .forEach(c => {
        db.prepare('UPDATE clients SET priority = ? WHERE id = ?')
          .run(c.priority + 1, c.id);
      });

    // Update the client
    db.prepare('UPDATE clients SET status = ?, priority = ? WHERE id = ?')
      .run(newStatus, newPriority, id);
  }
  // Case 3: Same status, priority changed (reordering within swimlane)
  else if (priority && (!status || status === oldStatus)) {
    const clientsInSameStatus = clients.filter(c => c.status === oldStatus && c.id !== id);
    const maxPriorityInStatus = clientsInSameStatus.length > 0 
      ? Math.max(...clientsInSameStatus.map(c => c.priority))
      : 0;
    
    // Ensure priority is within valid range
    const newPriority = Math.min(Math.max(1, priority), maxPriorityInStatus + 1);

    if (newPriority !== oldPriority) {
      // Moving up (lower priority number)
      if (newPriority < oldPriority) {
        clientsInSameStatus
          .filter(c => c.priority >= newPriority && c.priority < oldPriority)
          .forEach(c => {
            db.prepare('UPDATE clients SET priority = ? WHERE id = ?')
              .run(c.priority + 1, c.id);
          });
      }
      // Moving down (higher priority number)
      else {
        clientsInSameStatus
          .filter(c => c.priority > oldPriority && c.priority <= newPriority)
          .forEach(c => {
            db.prepare('UPDATE clients SET priority = ? WHERE id = ?')
              .run(c.priority - 1, c.id);
          });
      }

      // Update the client
      db.prepare('UPDATE clients SET priority = ? WHERE id = ?')
        .run(newPriority, id);
    }
  }

  // Fetch updated clients list
  clients = db.prepare('select * from clients').all();
  return res.status(200).send(clients);
});

app.listen(3001);
console.log('app running on port ', 3001);
