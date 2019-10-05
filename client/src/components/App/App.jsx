import React, { Component } from 'react'
import TaskWorkspace from '../TaskWorkspace/TaskWorkspace'
import NavBar from '../NavBar/NavBar'
import styled from 'styled-components'
import { 
    color,
    size 
} from '../../styles/styled-variables'

const AppWrapper = styled.div`
    height: 120vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${color.darkBlack};
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
                <NavBar />
                <TaskWorkspace />
            </AppWrapper>
        )
    }
}

export default App