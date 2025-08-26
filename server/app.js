const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use("/", (req, res) => {
  res.send("From the backend");
});

app.listen(process.env.PORT, () => {
  console.log("Server host at: ", process.env.PORT);
});
