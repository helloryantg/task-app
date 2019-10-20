import React, { Component } from 'react'
import TaskColumn from '../TaskColumn/TaskColumn'
import styled from 'styled-components'
import { getUserGroups } from '../../services/group.service'
import { getAllTasks } from '../../services/task.service'

const TaskWorkspaceWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
`

class TaskWorkspace extends Component {
    
    state = {
        groups: []
    }
    
    async componentDidMount() {
        const groups = await getUserGroups(this.props.user)

        this.setState(() => ({
            groups
        }))
    }

    async handleGetTasks() {
        const tasks = await getAllTasks(this.props.user)
        
        console.log(tasks)

        return tasks
    }

    render () {
        
        const {
            groups
        } = this.state

        console.log('groups', groups)

        return (
            <TaskWorkspaceWrapper>
                {groups.length && groups.map((group, idx) => {
                    const items = this.handleGetTasks()
    
                    return (
                        <TaskColumn 
                            title={group.label}
                            items={items}
                            key={idx}
                        />
                    )
                })}
            </TaskWorkspaceWrapper>
        )
    }
}

export default TaskWorkspace