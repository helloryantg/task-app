import React, { Component } from 'react'
import TaskWorkspace from '../TaskWorkspace/TaskWorkspace'
import NavBar from '../NavBar/NavBar'
import styled from 'styled-components'
import { 
    color,
    size 
} from '../../styles/styled-variables'
import axios from 'axios'

const AppWrapper = styled.div`
    height: 120vh;
    width: 100%;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    background-color: ${color.darkBlack};
    align-items: center;
    color: white;
`

class App extends Component {
    state = {
        groups: []
    }

    async componentDidMount() {
        const groups = await axios.get('/groups/all')

        this.setState(() => ({
            groups
        }))
    }

    render() {
        const { groups } = this.state

        return (
            <AppWrapper>
                <NavBar />
                <TaskWorkspace groups={groups} />
            </AppWrapper>
        )
    }
}

export default App