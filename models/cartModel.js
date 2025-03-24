const { Schema, model } = require('mongoose')

const cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    quantity: {
        type: Number,
        default: 1
    },
    total_price: {
        type: Number,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    isBuy: {
        type: Boolean,
        default: false
    },
    isDelivered: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

let cartModel = model('cart', cartSchema)

module.exports = cartModel;