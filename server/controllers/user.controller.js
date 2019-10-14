const SECRET = process.env.SECRET
const User = require('../models/User.model')
const jwt = require('jsonwebtoken')

/**
 * User login
 */
const login = (req, res, next) => {

    const {
        email,
        password
    } = req.body

    User.findOne({ email })
        .exec()
        .then(user => {

            if (!user) {
                return res
                    .status(401)
                    .json({ err: 'bad credentials' })
            }

            user.comparePassword(password, function (err, isMatch) {

                if (err) { return next(err) }

                if (isMatch) {
                    res.json({
                        token: createJWT(user),
                        user
                    })
                } else {
                    return res
                        .status(401)
                        .json({ err: 'bad credentials' })
                }
            })
        })
        .catch(err => res.status(400).json(err))
}

/**
 * User signup
 */
const signup = (req, res, next) => {

    const {
        email,
        name,
        password
    } = req.body

    if (!email || !password) {
        return res
            .status(422)
            .send({ error: 'You must provide email and password' })
    }

    User.findOne({ email }, function (err, existingUser) {
        if (err) { return next(err) }

        if (existingUser) {
            return res
                .status(422)
                .send({ error: 'Email is already in use' })
        }

        const user = new User({ 
            email, 
            name, 
            password
        })

        user.save(function (err) {
            if (err) { return next(err) }

            res.json({ token: createJWT(user) })
        })
    })
}

function createJWT(user) {
    return jwt.sign({ user }, SECRET, { expiresIn: '24h' })
}

module.exports = {
    login,
    signup
}

/**
 * TODO - Create status code file and import from there
 */