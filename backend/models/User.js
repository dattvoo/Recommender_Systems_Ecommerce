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
        },
        email: {
            type: String
        },
        first_name: {
            type: String
        },
        last_name: {
            type: String
        },
        role: {
            type: String
        },

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);
