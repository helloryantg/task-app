const express = require('express')
const router = express.Router()

const taskController = require('../controllers/task.controller')

router.get('/test', taskController.test)

module.exports = router;