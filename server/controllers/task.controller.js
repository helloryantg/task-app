const Task = require('../models/Task.model')

const getAllTasks = (req, res, next) => {
    Task.find({}, (err, tasks) => {
        if (err) return next(err)
        
        return tasks
    })
}

module.exports = {
    getAllTasks
}