const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "username is required"],
            trim: true,
            text: true,
        },
        password: {
            type: String,
            required: [true, "password is required"],
        }
    }
);

module.exports = mongoose.model("User", userSchema);
