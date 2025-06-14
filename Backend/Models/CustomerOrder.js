const mongoose = require("mongoose");

const CustomerOrder = new mongoose.Schema({

  FirstName: {
    type: String,
    required: [true, "please enter Food name"],
    trim: true,
  },
   LastName: {
    type: String,
    required: [true, "please enter Food name"],
    trim: true,
  },
    Email: {
    type: String,
    required: [true, "please enter email"],
    trim: true,
  },
    DeliveryAddress: {
    type: String,
    required: [true, "please enter address"],
    trim: true,
  },
  OrderStatus: {
    type: String,
    required: [true, "please enter orderStatus"],
    trim: true,
  },
   MobileNumber: {
    type: String,
    required: [true, "please enter mobileNumber"],
    trim: true,
  },

   OrderItems: 
    [
      {
      name: { type: String },
      units: { type: Number },
      img: { type: String },
      price: { type: Number },
    }

    ],

    FirebaseUID: {
    type: String,
    required: [true, "please enter firebaseID"],
    trim: true,
  },

  TotalAmount: {
    type: Number,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const customer = mongoose.model("customerOrder", CustomerOrder);
module.exports = customer;
