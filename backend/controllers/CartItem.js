const cartItemsSchema = require("../models/CartItem");

exports.addToCart = async (req, res) => {
    try {
        const { user_id, cartItems} = req.body;
        const resuilt = await new cartItemsSchema({
            user_id: user_id,
            cartItems
        }).save()
        res.send(resuilt);
        // const product = await dataTrainSchema.findOne({ id:product_id });
        // if (!product) {
        //     return res.status(404).json({ message: "Product not found" })
        // }
        // res.send(product);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}