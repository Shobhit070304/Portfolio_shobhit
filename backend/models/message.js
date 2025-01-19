const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/PortfolioMessages", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now() },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
