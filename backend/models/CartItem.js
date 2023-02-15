const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const cartItemsSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

      cartItems: [
      {
        product_id: { type: String, required: "product id is required" },
        id: { type: mongoose.Schema.Types.ObjectId, ref: "Products" },
        quantity: { type: Number, required: "Quantity is required" },
      },
    ],
  },
  { timestamp: true }
);

module.exports = mongoose.model("CartItem", cartItemsSchema);
