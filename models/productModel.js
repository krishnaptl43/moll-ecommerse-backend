const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    prod_name: {
        type: String,
        required: true,
        unique: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    thumbnail: {
        type: String,
        required: true,
    },
    category: {
        type: Schema.Types.Mixed,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    discount: {
        type: String,
        default: 0
    },
    dimension: {
        type: String,
        required: true,
    },
    discription: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
    },
    warranty: {
        type: String,
        default: "No Warranty"
    },
    accesseries: {
        type: String,
    },
    weight: {
        type: String,
        required: true,
    },
    supplier: {
        type: String,
        required: true,
    },
    images: {
        type: Schema.Types.Array,
    },
}, { timestamps: true });

let productModel = model('product', productSchema)

module.exports = productModel;