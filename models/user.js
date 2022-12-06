const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Must provide username"],
    trim: true,
    maxlength: [50, "Username can not be more than 50 characters"],
  },
  password: {
    type: String,
    required: [true, "Must provide password"],
    trim: true,
    maxlength: [50, "Password can not be more than 50 characters"],
  },
});

module.exports = mongoose.model("user", userSchema);
