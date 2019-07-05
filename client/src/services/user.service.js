import axios from 'axios'
import * as tokenService from './token.service'

export const signup = user => axios.post('/api/users/signup', JSON.stringify(user))
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('Email already taken!')
    })
    .then(({ token }) => tokenService.setToken(token))

export const login = creds => axios.post('/api/users/login', JSON.stringify(creds))
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('Bad credentials')
    })
    .then(({ token }) => tokenService.setToken(token))

export const getUser = () => tokenService.getUserFromToken()

export const logout = () => tokenService.removeToken()