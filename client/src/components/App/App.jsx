import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import TaskWorkspace from '../TaskWorkspace'
import LoginPage from '../LoginPage'
import SignupPage from '../SignupPage'
import * as groupServices from '../../services/group.service'
import * as userServices from '../../services/user.service'
import styled from 'styled-components'

const AppWrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

class App extends Component {
    state = {
        user: null,
        groups: null
    }

    componentDidMount() {

    }

    handleChange = (e) => {
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    handleSignupOrLogin = () => {
        this.setState(() => ({
            user: userServices.getUser()
        }))
    }

    render() {

        const { user, groups } = this.state

        let body
        if (!user) {
            // body = <LoginPage />
        } else {
            body = <TaskWorkspace groups={groups} />
        }

        return (
            <AppWrapper>
                {body}
            </AppWrapper>
        )
    }
}

export default App