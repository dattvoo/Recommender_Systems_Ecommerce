const dataTrainSchema = require("../models/dataTrain");

exports.getProductDetail = async (req, res) => {
    try {
        const { username, dummyUserId, productId} = req.body;
        
        // const product = await dataTrainSchema.findOne({ id:product_id });
        // if (!product) {
        //     return res.status(404).json({ message: "Product not found" })
        // }
        // res.send(product);
    } catch (error) {
        // res.status(500).json({ message: error.message })
    }
}