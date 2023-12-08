// Import necessary modules
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET products based on search query
router.get('/:query', async (req, res) => {
  try {
    // Create a regular expression to match names
    const regex = new RegExp(escapeRegex(req.params.query), 'gi');

    // Find products that match the regex
    const products = await Product.find({ name: regex });

    // Send the matched products in the response
    res.json(products);
  } catch (error) {
    // Handle errors
    res.json({ message: error.message });
  }
});

// Function to escape special characters in a regex
function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

// Export the router module
module.exports = router;
