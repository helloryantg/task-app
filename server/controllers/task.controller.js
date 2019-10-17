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

// const Task = require('../models/Task.model')

// router.get('/tasks', async (req, res) => {
//     try {
//         const tasks = await Task.find({})
//         res.send(tasks)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// router.post('/tasks', async (req, res) => {
//     const { 
//         title,
//         description,
//         groupName
//     } = req.body

//     const task = new Task({
//         title,
//         description,
//         groupName 
//     })

//     try {
//         await task.save()
//         res.status(201).send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// router.put('/tasks/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['title', 'description', 'groupName']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!'})
//     }

//     try {
//         const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

//         if (!task) {
//             return res.status(404).send()
//         }

//         res.send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// router.delete('/tasks/:id', async (req, res) => {
//     try {
//         const task = await Task.findByIdAndDelete(req.params.id)

//         if (!task) {
//             res.status(404).send()
//         }

//         res.send(task)
//     } catch (e) {
//         res.status(500).send()
//     }
// })