const Group = require('../models/Group.model')
const fs = require('fs')


const getAllGroups = (req, res) => {

    const json = fs.readFileSync('/Users/ryan03gonz/GitHub/task-app/server/api/data.json')
    const data = JSON.parse(json)
    console.log(data)

    res.send(data)
}

module.exports = {
    getAllGroups
}
