const Schema = mongoose.Schema
const mongoose = require('mongoose')

const groupSchema = new Schema({
    createdOn: Date,
    label: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    }
},
{
    timestamps: true
})

groupSchema.virtual('tasks', {
    foreignField: 'owner',
    localField: '_id',
    ref: 'Task'
})

module.exports = mongoose.model('Group', groupSchema)