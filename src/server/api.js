// ======================================================
// App / Database / API
// ======================================================

// Helpers
// ======================================================

const getValuesFromQueryResult = result => {
  if (result && result.length > 0) {
    const data = result[0];
    return data.values ? data.values : [];
  }
  return [];
};

// API
// ======================================================

/**
 *
 */
const api = {
  insertData: function(value) {
    db.run(`INSERT INTO demo (data) VALUES ("${value}");`);
    commitChangesToDatabase();
    return this.getAllData();
  },
  getAllData: function() {
    return getValuesFromQueryResult(db.exec("SELECT * FROM demo"));
  }
};
