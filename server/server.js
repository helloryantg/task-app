const bodyParser = require('body-parser')
const express = require('express')
const logger = require('morgan')
// const path = require('path')

const app = express()

// Database config files
require('dotenv').config();
require('./config/database')

// Middleware
app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.json({ type: '*/*' }))
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.use(require('./routes/group.route'))
// app.use(require('./routes/task.route'))
app.use(require('./routes/api/user.route'))

// Catch all route
app.get('*', (req, res) => { res.send('404 not found!') })

const port = process.env.PORT || 5000

app.listen(port, () => { console.log(`Dev app listening on port ${port}`) })