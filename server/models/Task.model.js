const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    createdOn: Date,
    description: {
        type: String,
        max: 500
    },
    groupId: {
        type: String
    },
    groupName: {
        type: String,
        required: true,
        max: 200
    },
    owner: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        max: 100
    }
})

module.exports = mongoose.model('Task', taskSchema)