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

    const group = body.group
    const task = body.task

    // console.log('group', group, 'task: ', task)

    const fileData = JSON.parse(fs.readFileSync(fileLocation))
    const groups = fileData.groups
    
    groups.push(group)

    console.log(groups)

    // fs.writeFile(fileLocation, )
}

module.exports = {
    getAllGroups,
    addGroup,
    addTask
}
