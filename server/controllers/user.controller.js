const User = require('../models/User.model')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const login = (req, res) => {
    User.findOne({ email: req.body.email })
        .exec()
        .then(user => {

            if (!user) return res.status(401).json({ err: 'bad credentials' })

            user.comparePassword(req.body.password, function(err, isMatch) {
                console.log("is a match? ", isMatch)
                
                if (isMatch) {
                    res.json({ token: createJWT(user) })
                } else {
                    return res.status(401).json({ err: 'bad credentials' })
                }
            })
        })
        .catch(err => res.status(400).json(err))
}

const signup = (req, res, next) => {
    const { email, password, name } = req.body

    if (!email || !password) {
        return res.status(422).send({ error: 'You must provide email and password' })
    }

    User.findOne({ email: email }, function(err, existingUser) {
        if (err) { return next(err) }

        if (existingUser) { return res.status(422).send({ error: 'Email is already in use' }) }

        const user = new User({ email, password, name })

        user.save(function(err) {
            if (err) { return next(err) }

            res.json({ token: createJWT(user) })
        })
    })
}

function createJWT(user) {
    return jwt.sign({ user }, SECRET, { expiresIn: '24h' })
}

module.exports = {
    signup,
    login
}