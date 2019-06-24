const express = require('express')
const router = express.Router()

const taskController = require('../controllers/task.controller')

router.get('/all', taskController.getAllTasks)
router.get('/task', taskController.createTask)
router.get('/task/:id', taskController.updateTask)
router.get('/task/:id', taskController.deleteTask)

module.exports = router;