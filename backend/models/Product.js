const mongoose = require("mongoose");


const productSchema = mongoose.Schema(
    {
        id: {
            type: String,
            trim: true,
            text: true,
        },
        product_code: {
            type: String,
        },
        price: {
            type: Number,
        },
        status: {
            type: String
        },
        product_detail: {
            type: String
        }
    }
);

module.exports = mongoose.model("Products", productSchema);
