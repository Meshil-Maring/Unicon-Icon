// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(PORT, () => {});
