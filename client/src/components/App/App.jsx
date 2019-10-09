import React, { Component } from 'react'
import TaskWorkspace from '../TaskWorkspace/TaskWorkspace'
import NavBar from '../NavBar/NavBar'
import styled from 'styled-components'
import { 
    color,
    size 
} from '../../styles/styled-variables'
import { getAllGroups } from '../../services/group.service'
import GroupTask from '../../models/GroupTask.model'

const AppWrapper = styled.div`
    height: 120vh;
    width: 100%;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    background-color: ${color.blackDark};
    align-items: center;
    color: white;
`

class App extends Component {
    state = {
        groups: [],
        user: {}
    }

    async componentDidMount() {
        
        const response = await getAllGroups()
        const groups = response.data.groups.map(group => new GroupTask().resolve(group))
        console.log(groups)
        const user = response.data.creator

        this.setState(() => ({
            groups,
            user
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