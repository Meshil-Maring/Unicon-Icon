const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", (req, res) => {
  res.send("From the backend");
});

app.listen(process.env.PORT, () => {
  console.log("Server host at: ", process.env.PORT);
});
