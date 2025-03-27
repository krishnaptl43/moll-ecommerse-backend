const { Schema, model } = require('mongoose')
const mongoose =  require('mongoose')
const AutoIncrement = require("mongoose-sequence")(mongoose);

const countSchema = new Schema({
    count: {
        type: Number,
    },
    name: {
        type: String
    },

}, { timestamps: true });

countSchema.plugin(AutoIncrement, {id : 'inhabitant_seq', inc_field: "count",reference_fields:'count',start_seq : 5001});

let countModel = model('count', countSchema)

module.exports = countModel;