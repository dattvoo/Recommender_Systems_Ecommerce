const express = require("express");
// const { register, activateAccount, login, auth, sendVerification, findUser, senResetPasswordCode, validateResetCode, changeNewPassword } = require("../controllers/user");
const { login } = require("../controllers/userController");
// const { authUser } = require("../middlwares/auth");

const router = express.Router();


// router.post("/register", register);
// router.post("/activate", activateAccount);
// router.post("/sendVerification", authUser, sendVerification);
router.post("/login", login);
// router.post("/auth", authUser, auth);
// router.post("/findUser", findUser);
// router.post("/sendResetCodeVerification", senResetPasswordCode);
// router.post("/validateResetCode", validateResetCode);
// router.post("/changeNewPassword", changeNewPassword);
module.exports = router;
