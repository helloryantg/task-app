const Group = require('../models/Group.model')

const getAllGroups = (req, res) => {
    const date = Date.now()

    const group1 = new Group({ title: "Camping", createdOn: date })
    const group2 = new Group({ title: "Shopping", createdOn: date })
    const group3 = new Group({ title: "Health", createdOn: date })
    const group4 = new Group({ title: "Travel", createdOn: date })

    res.send([group1, group2, group3, group4])
}

module.exports = {
    getAllGroups
}
