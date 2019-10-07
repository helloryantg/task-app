import Task from '../models/Task.model'

class GroupTask {

    constructor({
        title = '',
        tasks = []
    } = {}) {
        this.title = title
        this.tasks = tasks
    }

    update(changes = {}) {
        return new this.constructor(changes)
    }

    resolve(server) {
        const {
            title,
            tasks
        } = server

        return new this.constructor({
            title,
            tasks: tasks.map(task => new Task().resolve(task))
        })
    }
}

export default GroupTask