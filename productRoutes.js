const express = require("express");
const Product = require("../models/Product");
const cosineSimilarity = require("../utils/similarity");

const router = express.Router();

/**
 * Search Similar Products
 */
router.post("/search", async (req, res) => {
  try {
    const { queryEmbedding, minScore = 0.5 } = req.body;

    if (!queryEmbedding)
      return res.status(400).json({ error: "Embedding required" });

    const products = await Product.find();

    const scoredProducts = products
      .map((product) => ({
        ...product._doc,
        similarity: cosineSimilarity(queryEmbedding, product.embedding)
      }))
      .filter((p) => p.similarity >= minScore)
      .sort((a, b) => b.similarity - a.similarity);

    res.json(scoredProducts);
  } catch (error) {
    res.status(500).json({ error: "Search failed" });
  }
});

module.exports = router;
