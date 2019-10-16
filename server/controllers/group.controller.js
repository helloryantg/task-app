const Group = require('../models/Group.model')
const User = require('../models/User.model')

/**
 * Creates a Group
 */
const createGroup = (req, res, next) => {
    const { label = '' } = req.body

    const owner = req.user._id

    if (!label) {
        return res
            .status(422)
            .send({ error: 'You must provide a label' })
    }

    Group.findOne({ owner, label }, function (err, existingGroup) {
        if (err) return next(err)

        if (existingGroup) {
            // TODO - Add correct status
            return res.send({ error: "Label already exists, please use a different one" })
        }

        const group = new Group({ label, owner })

        group.save(function (err) {
            if (err) return next(err)

            res.send(group._id)
        })
    })
}

/**
 * Get a Group(s)
 */
const getGroups = (req, res, next) => {
    const { ids = [] } = req.body

    if (!ids.length) {
        return res
            .status(422)
            .send({ error: 'You must provide at least one id' })
    }

    Group
        .find()
        .where('_id')
        .in(ids)
        .exec(function (err, existingGroups) {
            if (err) return next(err)

            if (!existingGroups.length) {
                res.send({ message: 'No groups found' })
            }

            res.send(existingGroups)
        })
}

/**
 * Gets all of the user's groups
 */
const getAllGroups = (req, res, next) => {
    const owner = req.user._id

    Group.find({ owner }, function (err, groups) {
        if (err) return next(err)

        if (!groups.length) {
            return res.send({ message: 'This user has no groups' })
        }

        res.send(groups)
    })
}

/**
 * Searches groups
 */
const searchGroups = async (req, res, next) => {
    const {
        limit = 10,
        skip = 20,
        sortBy = 'createdAt:desc',
        label
    } = req.query

    const match = {}

    if (label) {
        match.label = label
    }

    const userId = req.user._id

    try {

        Group
            .find({ owner: userId })
            .sort({ createdAt: -1 })
            .exec(function (err, groups) {
                if (err) return next(err)
                res.send(groups)
            })

    } catch (e) {
        next(e)
    }
    

}

module.exports = {
    getAllGroups,
    getGroups,
    createGroup,
    searchGroups
}
