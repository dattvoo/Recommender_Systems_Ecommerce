const Product = require("../models/Product");

exports.getProductDetail = async (req, res) => {
    try {
        const { product_id } = req.body;
        const product = await Product.findOne({ product_id });
        if (!product) {
            return res.status(404).json({ message: "Product not found" })
        }
        res.send(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}