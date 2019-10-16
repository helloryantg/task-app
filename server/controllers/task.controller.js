const Task = require('../models/Task.model')
const Group = require('../models/Group.model')

/**
 * Creates a Task
 */
const createTask = (req, res, next) => {
    const {
        description = '',
        groupName = '',
        groupId = '',
        title = ''
    } = req.body

    if (!groupName || !title) {
        return res
            .status(422)
            .send({ error: 'You must provide a groupName and a task title' })
    }

    Group.findOne({ _id: groupId }, function (err, existingGroup) {
        if (err) return next(err)

        // TODO finish task logic
    })



    const owner = req.user._id
}