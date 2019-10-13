const Group = require('../models/Group.model')

/**
 * Creates a Group
 */
const createGroup = (req, res, next) => {
    const { label = '', owner = '' } = req.body

    if (!label || !owner) {
        return res.status(422).send({ error: 'You must provide a label and an owner' })
    }

    Group.findOne({ owner, label }, function(err, existingGroup) {
        if (err) { return next(err) }

        if (existingGroup) {
            // TODO - Add correct status
            return res.send({ error: "Label already exists, please use a different one" })
        }
        
        const group = new Group({ label, owner })

        group.save(function(err) {
            if (err) { return next(err) }

            res.send(group._id)  
        })
    })
}

/**
 * Get a Group
 */
const getGroups = (req, res, next) => {
    
    const { owner = '', ids = [] } = req.body

    if (!owner) {
        return res.status(422).send({ error: 'Please provide an owner'})
    }

    if (!ids.length) {
        return res.status(422).send({ error: 'You must provide at least one id' })
    }

    Group.find().where('_id').in(ids).exec(function(err, existingGroups) {
        if (err) { return next(err) }

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

    const { owner = ''} = req.query

    if (!owner) {
        return res.status(422).send({ error: 'Missing owner' })
    }

    Group.find({ owner }, function(err, groups) {
        if (err) { return next(err) }

        if (!groups.length) {
            return res.send({ message: 'This user has no groups' })
        }

        res.send(groups)
    })
}

module.exports = {
    getAllGroups,
    getGroups,
    createGroup,
}
