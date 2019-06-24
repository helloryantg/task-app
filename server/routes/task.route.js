const express = require('express')
const router = express.Router()

const taskController = require('../controllers/task.controller')

router.get('/all', taskController.getAllTasks)
router.post('/create', taskController.createTask)
router.put('/update/:id', taskController.updateTask)
router.delete('/delete/:id', taskController.deleteTask)

module.exports = router