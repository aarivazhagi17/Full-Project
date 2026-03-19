const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({ 
  date: String,
  items: Array,
  total: Number,

  customerDetails:{
    name: String,
    phone: String,
    address: String,
  },

  status: {
    type: String,
    enum: ["Pending", "Accepted", "Preparing", "Delivered", "Rejected"],
    default: "Pending"
  }
},
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);