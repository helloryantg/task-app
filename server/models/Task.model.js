const Schema = mongoose.Schema
const mongoose = require('mongoose')

const taskSchema = new Schema({
    createdOn: Date,
    description: {
        max: 250,
        type: String
    },
    groupName: {
        max: 200,
        required: true,
        type: String
    },
    owner: {
        required: true,
        type: String
    },
    title: {
        max: 100,
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Task', taskSchema)