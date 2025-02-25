const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mobile_number: {
        type: String,
        unique: true,
        validate: {
            validator: function (v) {
                return /\d{10}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'User phone number required']
    },
    isActive: {
        type: Boolean,
        default: true
    },
    address: {
        type: String,
    },
    image: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    }
}, { timestamps: true });

let userModel = model('users', userSchema)

module.exports = userModel;