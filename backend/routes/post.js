const express = require("express");
const { addToCart, getCartItems} = require("../controllers/CartItem");
// const { register, activateAccount, login, auth, sendVerification, findUser, senResetPasswordCode, validateResetCode, changeNewPassword } = require("../controllers/user");
const { getProductDetail } = require("../controllers/postController");
// const { authUser } = require("../middlwares/auth");

const router = express.Router();

router.post("/getCartItems", getCartItems);
router.post("/product", getProductDetail);
router.post("/addtocart", addToCart);
module.exports = router;
