const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  dateCreation: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Players", PlayerSchema);