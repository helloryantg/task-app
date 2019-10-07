class Task {
    
    constructor({
        label = '',
        createdOn = 0,
        description = '',
        id = ''
    } = {}) {
        this.label = label
        this.createdOn = createdOn
        this.description = description
        this.id = id
    }

    update(changes = {}) {
        return new this.consturctor(changes)
    }

    resolve(server) {
        const {
            label,
            createdOn,
            description,
            id
        } = server

        return new this.constructor({
            label,
            description,
            createdOn,
            id
        })
    }
}

export default Task