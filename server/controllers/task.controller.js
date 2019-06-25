const Task = require('../models/Task.model')

const getAllTasks = (req, res, next) => {
    Task.find({}, (err, tasks) => {
        if (err) return next(err)
        return tasks
    })
}

const createTask = (req, res, next) => {

    const { 
        title,
        description,
        groupName
    } = req.body

    const task = new Task({
        title,
        description,
        groupName 
    })

    task.save((err) => {
        if (err) return next(err)
        res.send('Task created successfully')
    })
}

const updateTask = (req, res, next) => {
    Task.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, task) => {
        if (err) return next(err)
        res.send('Task updated')
    })
}

const deleteTask = (req, res, next) => {
    Task.findByIdAndRemove(req.params.id, (err) => {
        if (err) return next(err)
        res.send('Deleted successfully')
    })
}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask
}