const Product = require("../models/Product");
const authenticateUser = require("../middleware/authMiddleware");

// Get all products with pagination, sorting, and filtering (Protected)
const getProducts = async (req, res) => {
    try {
        let { page, limit, sort, category } = req.query;

        page = parseInt(page) || 1;
        limit = parseInt(limit) || 10;
        const skip = (page - 1) * limit;

        let query = {};
        if (category) {
            query.category = category;
        }

        let products = Product.find(query)
            .skip(skip)
            .limit(limit);

        if (sort) {
            const sortCriteria = {};
            const sortOrder = sort.startsWith('-') ? -1 : 1;
            sortCriteria[sort.replace('-', '')] = sortOrder;
            products = products.sort(sortCriteria);
        }

        const results = await products;
        const totalProducts = await Product.countDocuments(query);

        res.json({
            totalProducts,
            page,
            limit,
            totalPages: Math.ceil(totalProducts / limit),
            data: results,
        });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Get product by ID (Protected)
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Create a product (Protected)
const createProduct = async (req, res) => {
    try {
        const { name, price, category, stock, description } = req.body;
        const newProduct = new Product({ name, price, category, stock, description });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Update a product (Protected)
const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ error: "Product not found" });
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Delete a product (Protected)
const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) return res.status(404).json({ error: "Product not found" });
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    getProducts: [authenticateUser, getProducts],
    getProductById: [authenticateUser, getProductById],
    createProduct: [authenticateUser, createProduct],
    updateProduct: [authenticateUser, updateProduct],
    deleteProduct: [authenticateUser, deleteProduct]
};
