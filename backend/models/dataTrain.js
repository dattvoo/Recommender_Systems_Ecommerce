const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const dataTrainSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "username is required"],
            trim: true,
            text: true,
        },
        dummyUserId: {
            type: String,
            required: [true, "dummyUserId is required"],
            trim: true,
            text: true, 
        },
        productId: {
            type: Array,
            require: [true, "productId is required"],
            trim: true,
            text: true
        }
    }
);

module.exports = mongoose.model("dataTrainSchema", dataTrainSchema);
