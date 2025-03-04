const express = require("express");
const cors = require("cors");
const app = express();
const Message = require("./models/message");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://portfolio-shobhit.vercel.app"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.post("/message", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    var date = new Date();

    const newMessage = await Message.create({
      name,
      email,
      message,
      date: date.toLocaleDateString() + "  " + date.toLocaleTimeString(),
    });

    return res.status(200).json(newMessage);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
