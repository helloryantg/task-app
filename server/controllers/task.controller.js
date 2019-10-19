const Task = require('../models/Task.model')
const Group = require('../models/Group.model')

/**
 * Get User Tasks
 */
const getTasks = async (req, res, next) => {
    const user = req.user

    try {
        const tasks = await Task.find({ _id: user.id })
        res.send(tasks)
    } catch (e) {
        res.status(500).send()
    }
}

/**
 * Creates a Task
 */
const createTask = async (req, res, next) => {
    const {
        description = '',
        groupName = '',
        groupId = '',
        title = ''
    } = req.body

    const user = req.user

    if (!groupName || !title) {
        return res.status(422).send({ error: 'You must provide a groupName and a task title' })
    }

    Group.findOne({ _id: groupId }, function (err, existingGroup) {
        if (err) return next(err)

        if (existingGroup) {
            const task = new Task({ 
                description,
                groupId,
                groupName,
                title,
                owner: user._id
            })

            task.save(function (err) {
                if (err) return next(err)

                res.send(task._id)
            })
        }
    })

}

/**
 * Updates a Task (INCOMPLETE CHECK THIS)
 */
const updateTask = async (req, res, next) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'description', 'groupName']
    const isValidOperation = updates.every(update => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid Updates!' })
    }

    try {
        const task = await Task
            .findByIdAndUpdate(
                req.params.id, 
                req.body, 
                { new: true, runValidators: true }
            )

        if (!task) {
            return res
                .status(404)
                .send()
        }

        res.send(task)

    } catch (e) {
        return res.status(400).send(e)
    }
}

/**
 * Deletes a Task
 */
const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            res.status(404).send()
        }
    } catch (e) {
        return res.status(500).send()
    }
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}