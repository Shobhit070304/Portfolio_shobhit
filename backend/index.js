const express = require("express");
const app = express();
const Message = require("./models/message");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.post("/message", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = Message.create({
      name,
      email,
      message,
    });
    res.json(newMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(4000);
