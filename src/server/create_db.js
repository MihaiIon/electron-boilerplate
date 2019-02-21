// ======================================================
// App / Database / Create
// ======================================================

/**
 * Create all the tables.
 * @param {*} db Empty SQLite Database Object.
 */
const createDatabaseTables = db => {
  db.run(
    "CREATE TABLE demo (id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT NOT NULL);"
  );
  return db;
};
