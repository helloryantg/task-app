const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupSchema = new Schema({
    label: String,
    createdOn: Date,
    owner: String
})

groupSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

module.exports = mongoose.model('Group', groupSchema)