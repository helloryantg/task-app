const Task = require('../models/Task.model')

const getAllTasks = (req, res, next) => {
    Task.find({}, (err, tasks) => {
        if (err) return next(err)
        
        return tasks
    })
}

const createTask = (req, res, next) => {
    const { 
        type,
        description,
        groupName
    } = req.body

    const task = new Task({
        type,
        description,
        groupName 
    })

    task.save((err) => {
        if (err) {
            return next(err)
        }
        res.send('Task created successfully')
    })
}

module.exports = {
    getAllTasks,
    createTask
}