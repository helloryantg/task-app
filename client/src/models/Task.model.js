class Task {
    
    constructor({
        label = '',
        createdOn = 0,
        description = ''
    } = {}) {
        this.label = label
        this.createdOn = createdOn
        this.description = description
    }

    update(changes = {}) {
        return new this.consturctor(changes)
    }

    resolve(server) {
        const {
            label,
            createdOn,
            description
        } = server

        return new this.constructor({
            label,
            description,
            createdOn
        })
    }
}

export default Task