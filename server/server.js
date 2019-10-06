const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const logger = require('morgan')
// const fs = require('fs')

const app = express()

// require('dotenv').config();
// require('./config/database')

// const userRouter = require('./routes/api/user.route') // not started
// const taskRouter = require('./routes/task.route') // almost complete
const groupRouter = require('./routes/group.route') // not started

// Middleware
app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
// app.use(taskRouter)
app.use(groupRouter) // not done yet

// Put API routes here, before the "catch all" route
// app.use(userRouter)
// app.use(require('./config/auth'))


// Catch all route
app.get('*', (req, res) => {
    res.send('404 not found!')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Dev app listening on port ${port}`)
})