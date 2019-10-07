import axios from 'axios'

export const getAllGroups = () => {
    return axios.get('/groups/all')
}

export const addGroup = group => {
    const data = {
        group
    }

    return axios.put('/groups/add', data)
}

export const addTask = taskData => {
    const data = {
        group: taskData.group,
        task: taskData.task
    }

    return axios.put('/groups/addTask', data)
}