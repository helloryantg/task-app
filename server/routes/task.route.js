const auth = require('../config/auth')
const express = require('express')
const router = express.Router()
const taskController = require('../controllers/task.controller')

router.get('/tasks', auth, taskController.getTasks)
router.post('/tasks/create', auth, taskController.createTask)
router.put('/tasks/:id', auth, taskController.updateTask)
router.delete('/tasks/:id', auth, taskController.deleteTask)

module.exports = router