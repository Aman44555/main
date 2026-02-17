require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("../models/Product");

mongoose.connect(process.env.MONGO_URI);

const dummyEmbedding = Array(512).fill(0.1); // replace with real embedding

const products = [
  {
    name: "Classic White Sneakers",
    category: "Shoes",
    imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    description: "Comfortable everyday sneakers",
    embedding: dummyEmbedding
  },
  {
    name: "Black Leather Jacket",
    category: "Jackets",
    imageUrl: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    description: "Premium leather biker jacket",
    embedding: dummyEmbedding
  },
  {
    name: "Blue Denim Jeans",
    category: "Clothing",
    imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    description: "Slim fit denim jeans",
    embedding: dummyEmbedding
  }
];
