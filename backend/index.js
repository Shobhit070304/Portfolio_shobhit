const express = require("express");
const cors = require("cors");
const app = express();
const Message = require("./models/message");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());
app.use(cors({ origin: "https://portfolio-shobhit.vercel.app", credentials: true }));

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

app.post("/message", async (req, res) => {
  console.log("Welcome")
  try {
    const { name, email, message } = req.body;
    var date = new Date();

    const newMessage = await Message.create({
      name,
      email,
      message,
      date: date.toLocaleDateString() + "  " + date.toLocaleTimeString(),
    });

    res.json(newMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
