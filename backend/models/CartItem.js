const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const cartItemsSchema = mongoose.Schema({
  user_id: {
    type: ObjectId,
    required: [true, "user id not invalid"],
    ref: "User"
  },
  cartItems: [
    {
      product_id: { type: String, required: "product id is required", },
      quantity: { type: Number, required: "Quantity is required" },
    },
  ],
}, {timestamp:true});

module.exports = mongoose.model("cartItemsSchema", cartItemsSchema);
