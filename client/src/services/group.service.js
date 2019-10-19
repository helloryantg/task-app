import axios from 'axios'
import { getAuthToken } from '../services/token.service'

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

export const getUserGroups = async (user) => {
    const response = await axios.get(`/groups/all?owner=${user._id}`, {
        headers: {
            Authorization: getAuthToken()
        }
    })

    return response.data
}