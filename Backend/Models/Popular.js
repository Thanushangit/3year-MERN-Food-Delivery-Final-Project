const mongoose = require("mongoose");

const popular = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter food name"],
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
 img: {
        type: String,
        required: true,
      },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Popularmodel = mongoose.model("popular", popular);
module.exports =Popularmodel ;
