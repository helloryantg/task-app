const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupSchema = new Schema({
    title: String,
    author: String,
    body: String,
    createdOn: Date,
    tasks: []
})

module.exports = mongoose.model('Group', groupSchema)