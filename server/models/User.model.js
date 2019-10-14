const SALT_ROUNDS = 6
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')


const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
    },
    name: {
        required: true,
        type: String,
    },
    password: String
}, {
    timestamps: true
})

// Compares the password with the user's hashed password during login
userSchema.methods.comparePassword = function (tryPassword, cb) {
    const user = this
    bcrypt.compare(tryPassword, user.password, cb)
}

// Hashes the password before saving to the MongoDB database
userSchema.pre('save', function (next) {
    const user = this

    if (!user.isModified('password')) return next()

    bcrypt.hash(user.password, SALT_ROUNDS, (err, hash) => {
        if (err) return next(err)

        user.password = hash

        next()
    })
})

userSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.password
        return ret
    }
})

userSchema.virtual('groups', {
    ref: 'Group',
    localField: '_id',
    foreignField: 'owner'
})



module.exports = mongoose.model('User', userSchema)