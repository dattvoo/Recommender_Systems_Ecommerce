const { default: mongoose } = require("mongoose");
const cartItemsSchema = require("../models/CartItem");

exports.addToCart = async (req, res) => {

  try {
    const { user_id ,product } = req.body;
    // console.log(product)
    // id, product_id, quantity
    const cartItem = await cartItemsSchema.findOne({ user_id }).populate("user_id").populate("cartItems.id");
    // console.log("🚀 ~ file: CartItem.js:30 ~ exports.addToCart= ~ cartItem", cartItem)
    const quantity = parseInt(product.quantity);
    if (cartItem) {
      // Update cart item quantity if already in cart
      const indexFound = cartItem.cartItems.findIndex(
        (item) => item.product_id === product.product_id
      );
      // Remove item when quantity set === 0
      if (indexFound !== -1 && quantity === 0) {
        cartItem.cartItems.splice(indexFound, 1);
      } else if (indexFound !== -1) {
        cartItem.cartItems[indexFound].quantity =
          parseInt(cartItem.cartItems[indexFound].quantity) +
          parseInt(product.quantity);
      } else if (quantity > 0) {
        cartItem.cartItems.push({
          product_id: product.product_id,
          id: product.id,
          quantity: product.quantity,
        });
      } else {
        return res.status(400).json({
          message: "Ivalid",
        });
      }
      let data = await cartItem.save();

      // 63a41835cb5e84459cb28815
      // res.send(cartItem.cartItems[0].product_id === product.product_id);

      res.status(200).send({ type: "Success", data: data });
    } else {
      const data = await new cartItemsSchema({
        user_id: user_id,
        cartItems: [
          {
            product_id: product.product_id,
            quantity: quantity,
            id:  product.id
          },
        ],
      }).save();
      res.status(200).json({
        message: "New User Add to cart success",
        data: data,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "False to add to cart!! Try again" });
  }
};

exports.getCartItems = async (req, res) => {
  const { user_id } = req.body;
  try {
    const cartItem = await cartItemsSchema.findOne({ user_id }).populate("cartItems.id");
    if (!cartItem) {
      res.status(404).json({
        message: "Get cart item is false",
      });
    } else {
      res.status(200).json({
        message: "Get cart item is success",
        cartItem,
      });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
