const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GroupSchema = new Schema({
    title: {
        type: String,
        required: true,
        max: 100
    },
    createdOn: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Group', GroupSchema)