const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user.controller')

const auth = require('../../config/auth')

router.get('/', auth, function(req, res) {
    res.send({ hi: 'there' })
})
router.post('/signup', userController.signup)
router.post('/login', userController.login)

module.exports = router