const mongoose = require("mongoose");
require("dotenv").config();

const db = mongoose
  .connect(process.env.URI, {
    dbName: "icons",
  })
  .then(() => console.log("Database connect successful."))
  .catch(() => console.log("Please check your database."));

module.exports = db;
