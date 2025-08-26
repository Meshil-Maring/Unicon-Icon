const mongoose = require("mongoose");

const addIcon = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  data: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("addIcon", addIcon);
