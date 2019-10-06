const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        max: 100
    },
    description: {
        type: String,
        required: true,
        max: 250
    },
    groupName: {
        type: String,
        required: true,
        max: 200
    },
    createdOn: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Task', taskSchema)