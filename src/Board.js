import React from 'react';
import Dragula from 'dragula';
import 'dragula/dist/dragula.css';
import Swimlane from './Swimlane';
import './Board.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    const clients = this.getClients();
    this.state = {
      clients: {
        backlog: clients.filter(client => !client.status || client.status === 'backlog'),
        inProgress: clients.filter(client => client.status && client.status === 'in-progress'),
        complete: clients.filter(client => client.status && client.status === 'complete'),
      }
    }
    this.swimlanes = {
      backlog: React.createRef(),
      inProgress: React.createRef(),
      complete: React.createRef(),
    }
    this.drake = null;
  }

  componentDidMount() {
    this.drake = Dragula([
      this.swimlanes.backlog.current,
      this.swimlanes.inProgress.current,
      this.swimlanes.complete.current
    ], {
      revertOnSpill: true
    });

    this.drake.on('drop', (el, target, source) => {
      // Cancel Dragula's DOM manipulation - let React handle it
      this.drake.cancel(true);
      
      // Get the card id and determine the new status based on target swimlane
      const cardId = el.getAttribute('data-id');
      const oldStatus = el.getAttribute('data-status');
      let newStatus = 'backlog';
      
      if (target === this.swimlanes.inProgress.current) {
        newStatus = 'in-progress';
      } else if (target === this.swimlanes.complete.current) {
        newStatus = 'complete';
      }

      // Only update if status changed
      if (oldStatus !== newStatus) {
        this.updateCardStatus(cardId, newStatus);
      }
    });
  }

  componentWillUnmount() {
    if (this.drake) {
      this.drake.destroy();
    }
  }

  updateCardStatus(cardId, newStatus) {
    const { clients } = this.state;
    let movedCard = null;
    let sourceList = null;

    // Find the card in all lists
    for (let status in clients) {
      const card = clients[status].find(c => c.id === cardId);
      if (card) {
        movedCard = { ...card, status: newStatus };
        sourceList = status;
        break;
      }
    }

    if (movedCard && sourceList) {
      // Remove from source list
      const updatedSourceList = clients[sourceList].filter(c => c.id !== cardId);
      
      // Determine target list key
      let targetList = 'backlog';
      if (newStatus === 'in-progress') {
        targetList = 'inProgress';
      } else if (newStatus === 'complete') {
        targetList = 'complete';
      }

      // Add to target list
      const updatedTargetList = [...clients[targetList], movedCard];

      // Update state
      this.setState({
        clients: {
          ...clients,
          [sourceList]: updatedSourceList,
          [targetList]: updatedTargetList
        }
      });
    }
  }
  getClients() {
    return [
      ['1','Stark, White and Abbott','Cloned Optimal Architecture', 'in-progress'],
      ['2','Wiza LLC','Exclusive Bandwidth-Monitored Implementation', 'complete'],
      ['3','Nolan LLC','Vision-Oriented 4Thgeneration Graphicaluserinterface', 'backlog'],
      ['4','Thompson PLC','Streamlined Regional Knowledgeuser', 'in-progress'],
      ['5','Walker-Williamson','Team-Oriented 6Thgeneration Matrix', 'in-progress'],
      ['6','Boehm and Sons','Automated Systematic Paradigm', 'backlog'],
      ['7','Runolfsson, Hegmann and Block','Integrated Transitional Strategy', 'backlog'],
      ['8','Schumm-Labadie','Operative Heuristic Challenge', 'backlog'],
      ['9','Kohler Group','Re-Contextualized Multi-Tasking Attitude', 'backlog'],
      ['10','Romaguera Inc','Managed Foreground Toolset', 'backlog'],
      ['11','Reilly-King','Future-Proofed Interactive Toolset', 'complete'],
      ['12','Emard, Champlin and Runolfsdottir','Devolved Needs-Based Capability', 'backlog'],
      ['13','Fritsch, Cronin and Wolff','Open-Source 3Rdgeneration Website', 'complete'],
      ['14','Borer LLC','Profit-Focused Incremental Orchestration', 'backlog'],
      ['15','Emmerich-Ankunding','User-Centric Stable Extranet', 'in-progress'],
      ['16','Willms-Abbott','Progressive Bandwidth-Monitored Access', 'in-progress'],
      ['17','Brekke PLC','Intuitive User-Facing Customerloyalty', 'complete'],
      ['18','Bins, Toy and Klocko','Integrated Assymetric Software', 'backlog'],
      ['19','Hodkiewicz-Hayes','Programmable Systematic Securedline', 'backlog'],
      ['20','Murphy, Lang and Ferry','Organized Explicit Access', 'backlog'],
    ].map(companyDetails => ({
      id: companyDetails[0],
      name: companyDetails[1],
      description: companyDetails[2],
      status: companyDetails[3],
    }));
  }
  renderSwimlane(name, clients, ref) {
    return (
      <Swimlane name={name} clients={clients} dragulaRef={ref}/>
    );
  }

  render() {
    return (
      <div className="Board">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              {this.renderSwimlane('Backlog', this.state.clients.backlog, this.swimlanes.backlog)}
            </div>
            <div className="col-md-4">
              {this.renderSwimlane('In Progress', this.state.clients.inProgress, this.swimlanes.inProgress)}
            </div>
            <div className="col-md-4">
              {this.renderSwimlane('Complete', this.state.clients.complete, this.swimlanes.complete)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
