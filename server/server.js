const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const morgan = require('morgan')
const logger = require('morgan')
// const fs = require('fs')

const app = express()

require('dotenv').config();
require('./config/database')

const userRouter = require('./routes/api/user.route') // not started
const groupRouter = require('./routes/group.route')
// const taskRouter = require('./routes/task.route') // almost complete

// Middleware
app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.json({ type: '*/*' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('combined'))

// Routes
// app.use(taskRouter)
app.use(groupRouter)

// Put API routes here, before the "catch all" route
app.use(userRouter)
// app.use(require('./config/auth'))


// Catch all route
app.get('*', (req, res) => {
    res.send('404 not found!')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Dev app listening on port ${port}`)
})