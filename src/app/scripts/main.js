// ======================================================
// App / Scripts / Main
// ======================================================

// Imports
const $ = require("jquery");
// Use the object 'api' to excute your queries (see: src/server/api.js).

// Insert Data
// ======================================================

$("#form-demo").ready(function() {
  $("#result-demo")
    .empty()
    .append(
      api
        .getAllData()
        .map(cols => `<li><span>${cols[0]}</span><span>${cols[1]}</span></li>`)
    );
});

$("#form-demo").on("submit", function(event) {
  event.preventDefault();
  const value = this.data.value;
  if (value) {
    const res = api.insertData(value);
    $("#result-demo")
      .empty()
      .append(
        res.map(
          cols => `<li><span>${cols[0]}</span><span>${cols[1]}</span></li>`
        )
      );
  }
});
