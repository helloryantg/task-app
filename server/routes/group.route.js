const express = require('express')
const router = express.Router()

const groupController = require('../controllers/group.controller')

router.get('/groups/all', groupController.getAllGroups)
router.put('/groups/add', groupController.addGroup)
router.put('/groups/addTask', groupController.addTask)

module.exports = router;