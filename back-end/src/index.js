const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = 5500;

app.use(express.json());

app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database is connected"))
  .catch((err) => {
    console.error("Database connection error:", err);
    process.exit(1);
  });

app.post("/home", (req, res) => {
  const { name, age } = req.body;

  console.log("Name: ", name, "Age: ", age);

  res.status(201).json({ message: "Recive data successfully" });
});

app.use("/", (req, res) => {
  res.send("Hello how are you");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
