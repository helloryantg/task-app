const Group = require('../models/Group.model')
const fs = require('fs')

const fileLocation = '/Users/ryan03gonz/GitHub/task-app/server/api/data.json'

const getAllGroups = (req, res) => {

    const json = fs.readFileSync(fileLocation)
    const data = JSON.parse(json)

    res.send(data)
}

const addGroup = (req, res) => {
    const data = req.params
}

const addTask = (req, res) => {
    const body = req.body

    const groupName = body.group
    const task = body.task

    const fileData = JSON.parse(fs.readFileSync(fileLocation))
    
    const foundGroup = fileData.groups.find(group => group.title === groupName)

    if (foundGroup) {
        const nextId = foundGroup.tasks.length + 1
        task.id = nextId
        foundGroup.tasks.push(task)
    }

    const data = JSON.stringify(fileData, null, 2)

    fs.writeFile(fileLocation, data, (err) => {
        if (err) throw err
        console.log("Writing file failed")
    })
}

const editTask = ({ body }, res) => {
    const {
        group: groupName,
        task,
        id
    } = body
    
    const fileData = JSON.parse(fs.readFileSync(fileLocation))

    const foundGroup = fileData.groups.find(group => group.title === groupName)
    let foundTask

    if (foundGroup) {
        foundTask = foundGroup.tasks.find(task => task.id === id)
    }
}

module.exports = {
    getAllGroups,
    addGroup,
    addTask
}
