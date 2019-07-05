import axios from 'axios'
import * as tokenService from './token.service'

export const signup = user => {
    return axios.post('/signup', user)
        .then(res => {
            if (res.ok) return res.json()
            throw new Error('Email already taken!')
        })
        .then(({ token }) => tokenService.setToken(token))
}

export const login = creds => axios.post('/login', creds)
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('Bad credentials')
    })
    .then(({ token }) => tokenService.setToken(token))

export const getUser = () => tokenService.getUserFromToken()

export const logout = () => tokenService.removeToken()