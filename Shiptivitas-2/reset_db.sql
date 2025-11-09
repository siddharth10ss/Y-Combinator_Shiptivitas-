DROP TABLE IF EXISTS clients;
CREATE TABLE IF NOT EXISTS clients (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT,
  priority INTEGER
);

INSERT INTO clients VALUES(1,'Stark, White and Abbott', 'Cloned Optimal Architecture', 'in-progress', 1);
INSERT INTO clients VALUES(2,'Wiza LLC', 'Exclusive Bandwidth-Monitored Implementation', 'complete', 1);
INSERT INTO clients VALUES(3,'Nolan LLC', 'Vision-Oriented 4Thgeneration Graphicaluserinterface', 'backlog', 1);
INSERT INTO clients VALUES(4,'Thompson PLC', 'Streamlined Regional Knowledgeuser', 'in-progress', 2);
INSERT INTO clients VALUES(5,'Walker-Williamson', 'Team-Oriented 6Thgeneration Matrix', 'in-progress', 3);
INSERT INTO clients VALUES(6,'Boehm and Sons', 'Automated Systematic Paradigm', 'backlog', 2);
INSERT INTO clients VALUES(7,'Runolfsson, Hegmann and Block', 'Integrated Transitional Strategy', 'backlog', 3);
INSERT INTO clients VALUES(8,'Schumm-Labadie', 'Operative Heuristic Challenge', 'backlog', 4);
INSERT INTO clients VALUES(9,'Kohler Group', 'Re-Contextualized Multi-Tasking Attitude', 'backlog', 5);
INSERT INTO clients VALUES(10,'Romaguera Inc', 'Managed Foreground Toolset', 'backlog', 6);
INSERT INTO clients VALUES(11,'Reilly-King', 'Future-Proofed Interactive Toolset', 'complete', 2);
INSERT INTO clients VALUES(12,'Emard, Champlin and Runolfsdottir', 'Devolved Needs-Based Capability', 'backlog', 7);
INSERT INTO clients VALUES(13,'Fritsch, Cronin and Wolff', 'Open-Source 3Rdgeneration Website', 'complete', 3);
INSERT INTO clients VALUES(14,'Borer LLC', 'Profit-Focused Incremental Orchestration', 'backlog', 8);
INSERT INTO clients VALUES(15,'Emmerich-Ankunding', 'User-Centric Stable Extranet', 'in-progress', 4);
INSERT INTO clients VALUES(16,'Willms-Abbott', 'Progressive Bandwidth-Monitored Access', 'in-progress', 5);
INSERT INTO clients VALUES(17,'Brekke PLC', 'Intuitive User-Facing Customerloyalty', 'complete', 4);
INSERT INTO clients VALUES(18,'Bins, Toy and Klocko', 'Integrated Assymetric Software', 'backlog', 9);
INSERT INTO clients VALUES(19,'Hodkiewicz-Hayes', 'Programmable Systematic Securedline', 'backlog', 10);
INSERT INTO clients VALUES(20,'Murphy, Lang and Ferry', 'Organized Explicit Access', 'backlog', 11);
