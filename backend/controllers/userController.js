const { ObjectId } = require('mongodb');
// const {
//   validateEmail,
//   validateLength,
//   validateUsername,
// } = require("../helpers/validation");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/tokens");
// const { sendVerificationEmail, sendResetPassword } = require("../helpers/mailer");
// const Code = require("../models/Code");
// const generateCode = require("../helpers/generateCode");

// Validation Email
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/);
};

const validateLength = (text, min, max) => {
    if (text.length > max || text.length < min) {
        return false;
    }
    return true;
};
exports.register = async (req, res) => {
    try {
        const {
            username,
            password,
            email,
            fullname,
            role
        } = req.body;
        const names = fullname.split(" ")
        const first_name = names[0];
        const last_name = names[names.length - 1];
        if (!validateEmail(email)) {
            return res.status(400).json({
                message: "invalid email address",
            });
        }
        const check = await User.findOne({ username });
        if (check) {
            return res.status(400).json({
                message:
                    " User name already exists,try with a different user name",
            });
        }

        // if (!validateLength(first_name, 3, 30)) {
        //     return res.status(400).json({
        //         message: "first name must between 3 and 30 characters.",
        //     });
        // }
        // if (!validateLength(last_name, 2, 30)) {
        //     return res.status(400).json({
        //         message: "last name must between 3 and 30 characters.",
        //     });
        // }
        if (!validateLength(password, 6, 40)) {
            return res.status(400).json({
                message: "password must be atleast 6 characters.",
            });
        }

        const cryptedPassword = await bcrypt.hash(password, 12);

        // let full_name = first_name + last_name;
        // let newUsername = await validateUsername(tempUsername);
        const user = await new User({
            first_name,
            last_name,
            email,
            password: cryptedPassword,
            username,
            role
        }).save();
        // const emailVerificationToken = generateToken(
        //     { id: user._id.toString() },
        //     "30m"
        // );
        // const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
        // sendVerificationEmail(user.email, user.first_name, url);
        const token = generateToken({ id: user._id.toString() }, "3d");
        res.send({
            id: user._id,
            // username: user.first_name ,
            first_name: user.first_name,
            last_name: user.last_name,
            token: token,
            verified: user.verified,
            message: "Register Success ! please activate your email to start",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// exports.activateAccount = async (req, res) => {
//   try {
//     const { token } = req.body;
//     const user = jwt.verify(token, process.env.TOKEN_SECRET);
//     const check = await User.findById(user.id);
//     if (check.verified == true) {
//       return res
//         .status(400)
//         .json({ message: "this email is already activated" });
//     } else {
//       await User.findByIdAndUpdate(user.id, { verified: true });
//       return res
//         .status(200)
//         .json({ message: "Account has beeen activated successfully." });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({
                message:
                    "user is not available.",
            });
        }
        const check = await bcrypt.compare(password, user.password);
        if (!check) {
            return res.status(400).json({
                message: "Invalid credentials.Please try again.",
            });
        }
        const token = generateToken({ id: user._id.toString() }, "7d");
        res.send({
            id: user._id,
            username: user.username,
            picture: user.picture,
            first_name: user.first_name,
            last_name: user.last_name,
            token: token,
            verified: user.verified,
            message: "Register Success ! please activate your email to start",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// exports.auth = (req, res) => {
//   res.json("Welcome from auth");
// }
// exports.sendVerification = async (req, res, next) => {
//   const userId = req.user.id;
//   const user = await User.findById(userId);
//   try {
//     if (user.verified) {
//       return res.status(400).json({ message: "This account is  already activated" })
//     }
//     const emailVerificationToken = generateToken(
//       { id: user?._id.toString() },
//       "30m"
//     )
//     const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
//     sendVerificationEmail(user.email, user.first_name, url)
//     return res.status(200).json({ message: "Email verification link has been start to your email" });
//   } catch (error) {
//     return res.status(500).json({ message: error.message })
//   }
// }
// exports.findUser = async (req, res, next) => {
//   try {
//     const { email } = req.body;
//     const user = await User.findOne({ email }).select("-password");
//     if (!user) {
//       return res.status(400).json({
//         message: "Account is not exits!"
//       })
//     }
//     return res.status(200).json({
//       email: user.email,
//       picture: user.picture,
//       username: user.username
//     })
//   } catch (error) {
//     return res.status(500).json({ message: error.message })
//   }
// }

// exports.senResetPasswordCode = async (req, res) => {
//   try {
//     const { email } = req.body;
//     const user = await User.findOne({ email }).select("-password");
//     await Code.findOneAndRemove({ user: user._id });
//     const code = generateCode(5);
//     const saveCode = await new Code({
//       code,
//       user: user.id
//     }).save();
//     sendResetPassword(user.email, user.first_name, code);
//     return res.status(200).json({
//       message: "Email reset code has been sent to your email"
//     })
//   } catch (error) {
//     return res.status(400).json({ message: error.message })
//   }
// }
// exports.validateResetCode = async (req, res) => {

//   try {
//     const { email, resetCode } = req.body;
//     const user = await User.findOne({ email });
//     const codeSchema = await Code.findOne({ user: user._id });
//     if (codeSchema.code !== resetCode) {
//       return res.status(400).json({
//         message: "Verification code is not wrong!"
//       })
//     }
//     return res.status(200).json("Verification code is success");
//   } catch (error) {
//     return res.status(400).json({ message: error.message })
//   }
// }

// exports.changeNewPassword = async (req, res) => {
//   try {
//     const { email, newPassword } = req.body;
//     const crytedPassword = await bcrypt.hash(newPassword, 12);
//     // const user = await User.findOneAndUpdate({email}, {password: crytedPassword});
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Account is not exist!" })
//     }
//     const userUpdate = await User.findOneAndUpdate({ email }, { password: crytedPassword }, { new: true });
//     return res.status(200).json({
//       userUpdate,
//       message: "Password is updated successfully!"
//     })
//   } catch (error) {
//     return res.status(400).json({ message: error.message })

//   }
// }
