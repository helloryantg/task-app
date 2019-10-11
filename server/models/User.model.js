const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
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

userSchema.pre('save', function(next) {
    const user = this

    if (!user.isModified('password')) return next()
    
    bcrypt.hash(user.password, SALT_ROUNDS, (err, hash) => {
        if (err) return next(err)

        user.password = hash

        next()
    })
})

userSchema.methods.comparePassword = (tryPassword, cb) => {

    const hash = bcrypt.hashSync(tryPassword, SALT_ROUNDS)

    bcrypt.compare(tryPassword, hash, cb)
}

module.exports = mongoose.model('User', userSchema)