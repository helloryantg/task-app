import axios from 'axios'

export const getAllGroups = () => {
    return axios.get('/groups/all')
}

export const createGroup = (group) => {
    return axios.post('/groups/create', group.format())
}

export const getGroups = (ids) => {
    const data = { ids }

    return axios.post('/groups/getGroups', data)
}