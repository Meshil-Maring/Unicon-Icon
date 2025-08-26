const express = require("express");
const cors = require("cors");
require("dotenv").config();

const db = require("./src/config/db");

const app = express();

app.use(express.json());
app.use(cors());

db;

app.use("/", (req, res) => {
  res.send("From the backend");
});

app.listen(process.env.PORT, () => {
  console.log("Server host at: ", process.env.PORT);
});
