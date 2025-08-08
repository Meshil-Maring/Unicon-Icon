const mongoose = require("mongoose");

const icon = new mongoose.Schema({
  name: "Meshil",
  age: 23,
});

module.exports = mongoose.model("Student", icon);
