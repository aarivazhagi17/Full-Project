const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: String,
  address: String,
  product: String,
  userId: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);