const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  alternatif: {
    type: String,
    required: [true, "Must provide name"],
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  penilaian: {
    type: [Number],
    required: [true, "Must provide data penilaian"],
    validate: [arrayLimit, "{PATH} exceeds the limit of 10"],
  },
});

function arrayLimit(val) {
  return val.length <= 5;
}

module.exports = mongoose.model("data", dataSchema);
