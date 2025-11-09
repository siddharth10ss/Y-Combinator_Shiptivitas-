# Y Combinator Shiptivitas - Complete Implementation

This repository contains the complete implementation of both modules for the Y Combinator Shiptivitas job simulation.

## Project Structure

```
Y-Combinator_Shiptivitas/
├── Shiptivitas-1/          # Module 1: Frontend Kanban Board
└── Shiptivitas-2/          # Module 2: Backend API
```

## Module 1: Frontend Kanban Board

**Location:** `Shiptivitas-1/`

**Task:** Implement drag-and-drop functionality for a kanban board with three swimlanes.

**Features:**
- ✅ Three swimlanes (Backlog, In Progress, Complete)
- ✅ Drag-and-drop using Dragula library
- ✅ Color-coded cards based on status
- ✅ React state management

**Tech Stack:**
- React 16.7.0
- Dragula 3.7.2
- Bootstrap 4.2.1

**Quick Start:**
```bash
cd Shiptivitas-1
npm install
npm start
```
Open http://localhost:3000

**Documentation:**
- [README](./Shiptivitas-1/README.markdown)
- [Implementation Notes](./Shiptivitas-1/IMPLEMENTATION_NOTES.md)
- [Submission Summary](./Shiptivitas-1/SUBMISSION_SUMMARY.txt)

---

## Module 2: Backend API

**Location:** `Shiptivitas-2/`

**Task:** Implement backend API to persist card movements and priority changes.

**Features:**
- ✅ PUT endpoint for updating client status and priority
- ✅ Automatic priority reordering
- ✅ Database persistence with SQLite
- ✅ Three scenarios: status change, priority change, both

**Tech Stack:**
- Node.js with Express
- SQLite3 with better-sqlite3
- Babel for ES6+ support

**Quick Start:**
```bash
cd Shiptivitas-2
npm install
npm start
```
Server runs on http://localhost:3001

**Documentation:**
- [README](./Shiptivitas-2/README.markdown)
- [Implementation Notes](./Shiptivitas-2/IMPLEMENTATION_NOTES.md)
- [Submission Summary](./Shiptivitas-2/SUBMISSION_SUMMARY.txt)

---

## Acceptance Criteria

### Module 1 ✅
- [x] Three swimlanes displayed
- [x] Drag-and-drop functionality working
- [x] Cards change color when moved
- [x] Cards stay in new position

### Module 2 ✅
- [x] Database updates when cards move between swimlanes
- [x] Database updates when cards reorder within swimlanes
- [x] Card positions persist after page refresh

---

## Running Both Modules Together

1. **Start Backend (Terminal 1):**
   ```bash
   cd Shiptivitas-2
   npm install
   npm start
   ```

2. **Start Frontend (Terminal 2):**
   ```bash
   cd Shiptivitas-1
   npm install
   npm start
   ```

3. **Connect Frontend to Backend:**
   - Update frontend API calls to point to `http://localhost:3001`
   - Frontend will fetch and update data from backend

---

## Developer

**Name:** Siddharth (siddharth10ss)  
**Date:** November 9, 2025  
**Program:** Y Combinator Work at a Startup

---

## Submission Files

Each module contains:
- Git patchfile (`.patch`)
- Implementation notes (`.md`)
- Submission summary (`.txt`)

---

## License

MIT License - Created for Y Combinator Job Simulation
