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
    background-color: black;
    align-items: center;
    color: white;
`

class App extends Component {
    state = {}

    componentDidMount() {

    }

    render() {

        return (
            <AppWrapper>
                <TaskWorkspace />
            </AppWrapper>
        )
    }
}

export default App