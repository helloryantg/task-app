const auth = require('../config/auth')
const express = require('express')
const router = express.Router()
const groupController = require('../controllers/group.controller')

router.get('/groups/all', auth, groupController.getAllGroups)
router.post('/groups/create', auth, groupController.createGroup)
// router.put('/groups/add', groupController.addGroup)
// router.put('/groups/addTask', groupController.addTask)

module.exports = router;