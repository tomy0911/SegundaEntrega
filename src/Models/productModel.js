const mongoose = require("mongoose");
const mongooseConnection = require("../config.js");

const productCollection = "Products";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  url: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now() },
});

const productService = mongoose.model(productCollection, productSchema);

module.exports = productService;
