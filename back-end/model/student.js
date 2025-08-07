const mongoose = require("mongoose");

const student = new mongoose.Schema({
  name: "Meshil",
  age: 23,
});

module.exports = mongoose.model("Student", student);
