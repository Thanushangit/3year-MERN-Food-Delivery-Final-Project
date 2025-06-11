const mongoose = require("mongoose");

const lunch = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter Food name"],
    trim: true,
  },
  price: {
    type: Number,
    default: true,
  },
  description: {
    type: String,
    required: [true, "please enter food description"],
  },
 image: {
        type: String,
        required: true,
      },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Lunchrmodel = mongoose.model("Lunch", lunch);
module.exports = Lunchrmodel;
