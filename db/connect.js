const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://ebp78:gGbang0458@belajarbang.6ybb0kg.mongodb.net/?retryWrites=true&w=majority";

const connectDB = (url) => {
  mongoose.connect(url);
};

module.exports = connectDB;
