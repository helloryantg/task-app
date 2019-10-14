const auth = require('../config/auth')
const express = require('express')
const router = express.Router()
const groupController = require('../controllers/group.controller')

router.get('/groups/all', auth, groupController.getAllGroups)
router.get('/groups/search', auth, groupController.searchGroups)
router.post('/groups/getGroups', auth, groupController.getGroups)
router.post('/groups/create', auth, groupController.createGroup)

module.exports = router;