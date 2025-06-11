const mongoose = require("mongoose");

const dinner = new mongoose.Schema({
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
    required: [true, "please enter Food description"],
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

const Dinnermodel = mongoose.model("Dinner", dinner);
module.exports = Dinnermodel;
