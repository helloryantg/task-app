const auth = require('../config/auth')
const express = require('express')
const router = express.Router()
const taskController = require('../controllers/task.controller')

router.get('/tasks', auth, taskController.getTasks)
router.post('/tasks/create', auth, taskController.createTask)
router.put('/tasks/update', auth, taskController.updateTask)
router.delete('/tasks/delete', auth, taskController.deleteTask)

module.exports = router