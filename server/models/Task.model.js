const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
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
    }
})

module.exports = mongoose.model('Task', TaskSchema)