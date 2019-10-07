import Task from '../models/Task.model'

class GroupTask {

    constructor({
        title = '',
        tasks = [],
        id
    } = {}) {
        this.title = title
        this.tasks = tasks
        this.id = id
    }

    update(changes = {}) {
        return new this.constructor(changes)
    }

    resolve(server) {
        const {
            title,
            tasks,
            id
        } = server

        return new this.constructor({
            title,
            tasks: tasks.map(task => new Task().resolve(task)),
            id
        })
    }
}

export default GroupTask