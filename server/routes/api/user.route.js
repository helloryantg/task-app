const express = require('express')
const router = express.Router()
const User = require('../../models/User.model')
const userController = require('../../controllers/user.controller')

router.post('/signup', userController.signup)
router.post('/login', userController.login)

module.exports = router