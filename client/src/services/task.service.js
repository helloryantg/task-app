import axios from 'axios'
import { getAuthToken } from '../services/token.service'

export const getAllTasks = (user) => {
    
    return axios.get('/tasks', {
        headers: {
            Authorization: getAuthToken()
        }
    })
}

