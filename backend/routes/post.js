const express = require("express");
// const { register, activateAccount, login, auth, sendVerification, findUser, senResetPasswordCode, validateResetCode, changeNewPassword } = require("../controllers/user");
const { getProductDetail } = require("../controllers/postController");
// const { authUser } = require("../middlwares/auth");

const router = express.Router();

router.post("/product", getProductDetail);

module.exports = router;
