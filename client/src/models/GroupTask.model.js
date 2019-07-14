import { timingSafeEqual } from "crypto";

class GroupTask {

    constructor({
        title = '',
        createdOnDate = 0,
        tasks = []
    }) {
        this.title = title
        this.createdOnDate = createdOnDate
        this.tasks = tasks
    }

    update(changes = {}) {
        this.constructor(changes)
    }

    addTaskToGroup(task) {
        this.tasks.push(task)
    }

    get allTasks() {
        return this.tasks
    }
}

export default GroupTask