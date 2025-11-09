<p align="center">
<a href="https://www.insidesherpa.com/virtual-internships/prototype/oRMogWRHeewqHzA7u/College%20Students%3A%20Learn%20how%20to%20work%20at%20a%20YC%20startup">
<img src="https://s3-ap-southeast-2.amazonaws.com/insidesherpa-assets/yc/yc-blade.png"></a>
<br><br>
  <a href="https://www.insidesherpa.com/virtual-internships/prototype/oRMogWRHeewqHzA7u/College%20Students%3A%20Learn%20how%20to%20work%20at%20a%20YC%20startup">
  <img src="https://s3-ap-southeast-2.amazonaws.com/insidesherpa-assets/yc/workatastartup_logo_orange-c2a27f6374f9395166ee9906e2e0873af835b3c6132ae6aa0543582298567041.svg"></a>
</p>


<p align='center'> 
  <b><a href="#task"> Task Overview</a></b>
  | 
  <b><a href="#installation"> Installation </a></b>
  |
  <b><a href="https://www.insidesherpa.com/modules/oRMogWRHeewqHzA7u/9btzxEJz5aDBhNHMv"> Link to Module 2 </a></b>
  |
  <b><a href="https://www.insidesherpa.com/virtual-internships/prototype/oRMogWRHeewqHzA7u/College%20Students%3A%20Learn%20how%20to%20work%20at%20a%20YC%20startup" target="_blank"> Link to Y Combinator Program </a></b>
           
</p>


# Introduction 
<p> 
<b> College Students: 
  Learn how to work at a Y Combinator startup </b>
<br>Train online for the skills Y Combinator startups are looking for. One of the official ways to get recruited into a Y Combinator startup.
</p>

<h2 id="task">Module 2 Task Overview</h2>
<b> Working Fullstack 2: </b> Backend updates for new features.
Implement the backend changes for the new productivity tool.
<br><br>
<b> Aim: </b> 
Your task is to take the latest version of the Shiptivitas app and now tie it to the NodeJS backend.
In the backend, what you need to do is write a few functions that take the user event on the frontend and then save it to your database.
<br><br>

Acceptance Criteria
<ul>
  <li>✅ When a user moves a card from one swimlane to another, the database updates the position of the client accordingly.</li>
  <li>✅ When a user rearranges a card in the same swimlane, the database updates the position of the client accordingly.</li>
  <li>✅ When a user refreshes the page, the cards position and order should remain in the same spot as before.</li>
</ul>

**Status: All acceptance criteria have been met! ✅**

<h2 id="installation"> Installation </h2>

<ol>
  <li>Clone the Shiptivity backend repository</li>
  <li>Install dependencies: <code>npm install</code></li>
  <li>Start the server: <code>npm start</code></li>
</ol>

**Note:** If you encounter issues with better-sqlite3 compilation, the package.json has been updated to use the latest version with prebuilt binaries.

## Shiptivity API Server

This is a Node.js application using Express and SQLite3.

The server runs on **localhost:3001**

### Database Reset
To reset the database to initial state:
```bash
del clients.db
sqlite3 clients.db ".read reset_db.sql"
```

## Implementation Status

✅ **All acceptance criteria met:**
- Database updates when cards move between swimlanes
- Database updates when cards are reordered within swimlanes  
- Card positions persist after page refresh

### Features Implemented
1. **Status Change Without Priority**: Adds client to end of new swimlane, reorders old swimlane
2. **Status Change With Priority**: Inserts client at specific position, reorders both swimlanes
3. **Priority Change Same Status**: Reorders clients within the same swimlane

Try the API by running:
### curl -X GET http://localhost:3001/api/v1/clients
### curl -X GET http://localhost:3001/api/v1/clients?status=backlog
### curl -X GET http://localhost:3001/api/v1/clients/1
### curl -X PUT http://localhost:3001/api/v1/clients/1 -H "Content-Type: application/json" -d '{"status":"in-progress", "priority": 6}'


For this task, you only need to update the API for updating client detail.

Valid status:
- backlog
- in-progress
- complete

`client.priority` should be unique per status. Ordered from 1 to x where priority 1 means most important client.

Some sample curl to help you test your code (make sure you restart your server each time you run this):

Should do nothing

### curl -X PUT http://localhost:3001/api/v1/clients/1 -H "Content-Type: application/json" -d '{"status":"in-progress"}'

Should insert the client as lowest priority (biggest number) with status complete

### curl -X PUT http://localhost:3001/api/v1/clients/1 -H "Content-Type: application/json" -d '{"status":"complete"}'

Should insert the client at the right priority and reorder the priority in clients with different statuses

### curl -X PUT http://localhost:3001/api/v1/clients/1 -H "Content-Type: application/json" -d '{"status":"complete", "priority": 3}'

## Additional Resources
Node JS: https://nodejs.org/en/
Express: https://expressjs.com
better-sqlite3: https://github.com/JoshuaWise/better-sqlite3/blob/HEAD/docs/api.md
