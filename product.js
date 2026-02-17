const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  imageUrl: String,
  description: String,
  embedding: {
    type: [Number], // vector embedding
    required: true
  }
});

module.exports = mongoose.model("Product", productSchema);
