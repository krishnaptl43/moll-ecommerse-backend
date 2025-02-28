const { Schema, model } = require('mongoose')

const categorySchema = new Schema({
    cate_name: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    slug: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
    },
}, { timestamps: true });

let categoryModel = model('category', categorySchema)

module.exports = categoryModel;