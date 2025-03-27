const { Schema, model } = require('mongoose');

const productSchema = new Schema({ product: { type: Schema.Types.ObjectId, ref: "product" } });

const orderShema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    products: [productSchema],
    paid_amount: {
        type: Number,
        required: true
    },
    isCancelled: {
        type: Boolean,
        default: false
    },
    isCompelited: {
        type: Boolean,
        default: false
    },
    order_type: {
        type: String,
        enum: ["cash", "online", "credit card", "debit card", "upi"]
    },
    isDelivered: {
        type: Boolean,
        default: false
    },
    order_cancel_By: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    order_cancel_Reason: {
        type: String,
    }
}, { timestamps: true });

const orderModel = model("orders", orderShema)

module.exports = orderModel;