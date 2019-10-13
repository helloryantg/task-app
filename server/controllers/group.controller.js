const Group = require('../models/Group.model')
// const fs = require('fs')

/**
 * Creates a Group
 */
const createGroup = (req, res, next) => {
    const {
        label,
        owner
    } = req.body

    console.log('body', req.body)

    if (!label || !owner) {
        return res.status(422).send({
            error: 'You must provide a label'
        })
    }

    Group.findOne({ owner, label }, function(err, existingGroup) {
        if (err) { 
            return next(err) 
        }

        if (existingGroup) {
            // TODO - Add correct status
            return res.send({
                error: "Label already exists, please use a different one"
            })
        }
        
        const group = new Group({
            label,
            owner
        })

        group.save(function(err) {
            if (err) { return next(err) }

            res.send(group._id)  
        })
    })
}

/**
 * Gets all of the user's groups
 */
const getAllGroups = (req, res, next) => {

    const owner = req.query.owner

    if (!owner) {
        return res.status(422).send({
            error: 'Missing owner'
        })
    }

    Group.find({ owner }, function(err, groups) {
        if (err) { 
            return next(err) 
        }

        console.log('GROUPS', groups)

        if (!groups.length) {
            return res.send({ message: 'This user has no groups' })
        }

        res.send(groups)
    })

    // const json = fs.readFileSync(fileLocation)
    // const data = JSON.parse(json)
    // const data = fileLocation

    // res.send(data)
}

// const fileLocation = '/Users/ryan03gonz/GitHub/task-app/server/api/data.json'
// const fileLocation = require('../api/data.json')

// const addGroup = (req, res) => {
//     const data = req.params
// }

// const addTask = (req, res) => {
//     const body = req.body

//     const groupName = body.group
//     const task = body.task

//     // const fileData = JSON.parse(fs.readFileSync(fileLocation))
//     const fileData = fileLocation
    
//     const foundGroup = fileData.groups.find(group => group.title === groupName)

//     if (foundGroup) {
//         const nextId = foundGroup.tasks.length + 1
//         task.id = nextId
//         foundGroup.tasks.push(task)
//     }

//     const data = JSON.stringify(fileData, null, 2)

//     fs.writeFile(fileLocation, data, (err) => {
//         if (err) throw err
//         console.log("Writing file failed")
//     })
// }

// const editTask = ({ body }, res) => {
//     const {
//         group: groupName,
//         task,
//         id
//     } = body
    
//     const fileData = JSON.parse(fs.readFileSync(fileLocation))

//     const foundGroup = fileData.groups.find(group => group.title === groupName)
//     let foundTask

//     if (foundGroup) {
//         foundTask = foundGroup.tasks.find(task => task.id === id)
//     }
// }

module.exports = {
    getAllGroups,
    createGroup,
    // addGroup,
    // addTask
}
