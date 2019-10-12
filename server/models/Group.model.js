const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

module.exports = mongoose.model('Group', groupSchema)