// ======================================================
// App / Database / Initialize
// ======================================================

// Imports
const fs = require("fs");
const path = require("path");
const SQL = require("sql.js");

// Database
let db = null;
const dbFilename = "db.sqlite";
const dbFilePath = path.resolve(__dirname, `./${dbFilename}`);
const forceTableCreation = false;

// Helpers
// ======================================================

const closeDatabase = () => {
  commitChangesToDatabase();
  db.close();
};

const commitChangesToDatabase = () => {
  fs.writeFileSync(dbFilePath, db.export());
};

// Connect to Database
// ======================================================

if (fs.existsSync(dbFilePath || forceTableCreation)) {
  db = new SQL.Database(fs.readFileSync(dbFilePath));
} else {
  db = createDatabaseTables(new SQL.Database());
  commitChangesToDatabase();
}
