const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = 5500;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database is connected"))
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1);
  });

app.use("/", (req, res) => {
  res.send("Hello how are you");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
