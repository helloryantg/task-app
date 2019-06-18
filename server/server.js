const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const logger = require('morgan')

const app = express()

require('dotenv').config();
require('./config/database')

// Middleware
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.use('/tasks', require('./routes/task.route'))
app.use('/groups', require('./routes/group.route'))

// Put API routes here, before the "catch all" route
app.use(require('./config/auth'))

// Catch all route
app.get('*', (req, res) => {
    res.send('404 not found!')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Dev app listening on port ${port}`)
})