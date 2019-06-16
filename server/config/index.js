// mongodb://<dbuser>:<dbpassword>@ds054288.mlab.com:54288/node-tasklist

const mongoose = require('mongoose')

const MLAB_URL = 'mongodb://<dbuser>:<dbpassword>@ds054288.mlab.com:54288/node-tasklist'

const mongoDB = process.env.MONGODB_URI || MLAB_URL
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise

const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))