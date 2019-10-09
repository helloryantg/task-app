const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
    },
    password: String
}, {
    timestamps: true
})

userSchema.virtual('groups', {
    ref: 'Group',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.password
        return ret
    }
})

userSchema.pre('save', (next) => {
    const user = this

    console.log('this ran', user)

    if (!user.isModified('password')) return next()
    
    bcrypt.hash(user.password, SALT_ROUNDS, (err, hash) => {
        if (err) return next(err)

        user.password = hash

        next()
    })
})

userSchema.methods.comparePassword = (tryPassword, cb) => {
    bcrypt.compare(tryPassword, cb)
}

module.exports = mongoose.model('User', userSchema)