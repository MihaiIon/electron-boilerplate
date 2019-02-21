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

if (forceTableCreation || !fs.existsSync(dbFilePath)) {
  db = createDatabaseTables(new SQL.Database());
  commitChangesToDatabase();
} else {
  const uInt8Array = new Uint8Array(fs.readFileSync(dbFilePath));
  db = new SQL.Database(uInt8Array);
}
