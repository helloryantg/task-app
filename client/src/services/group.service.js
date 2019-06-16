import axios from 'axios'

export const getAllGroups = () => {
    return axios.get('/groups/all')
}