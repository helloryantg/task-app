import axios from 'axios'
import tokenService from './token.service'

function signup(user) {
    return axios.post('/api/users/signup', JSON.stringify(user))
        .then(res => {
            if (res.ok) return res.json()
            throw new Error('Email already taken!')
        })
        .then(({ token }) => tokenService.setToken(token))
}

function login(creds) {
    return axios.post('/api/users/login', JSON.stringify(creds))
        .then(res => {
            if (res.ok) return res.json()
            throw new Error('Bad credentials')
        })
        .then(({ token }) => tokenService.setToken(token))
}

function getUser() {
    return tokenService.getUserFromToken()
}

function logout() {
    tokenService.removeToken
}

export default {
    signup,
    getUser,
    logout,
    login
}