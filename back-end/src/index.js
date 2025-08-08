require("@dotenvx/dotenvx").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const AddIcon = require("../model/IconShcema.js");

const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use(cors());

app.post("/home", (req, res) => {
  const data = req.body;
  res.send("Hello, how are you?");
  console.log(data);

  const icon = new AddIcon({
    name: data.name,
    data: data.svgText,
  });

  icon
    .save()
    .then((data) => console.log(data))
    .catch((err) => console.log("error: ", err));
});

if (!process.env.MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in .env");
  process.exit(1);
}

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is connected !");
  } catch (err) {
    console.log("Database is not connected ", err);
  }
}

connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
