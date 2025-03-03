const Product = require('../models/Product');

// @desc Get all products
// @route GET /api/products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Get a product by ID
// @route GET /api/products/:id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Create a new product
// @route POST /api/products
const createProduct = async (req, res) => {
  try {
    const { name, price, category, stock, description } = req.body;
    const product = new Product({ name, price, category, stock, description });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: "Invalid product data" });
  }
};

// @desc Update a product by ID
// @route PUT /api/products/:id
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// @desc Delete a product by ID
// @route DELETE /api/products/:id
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
