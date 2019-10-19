import React, { Component } from 'react'
import TaskColumn from '../TaskColumn/TaskColumn'
import styled from 'styled-components'
import { getUserGroups } from '../../services/group.service'

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

        console.log(groups)
    }

    render () {
        
        const {
            groups
        } = this.state

        return (
            <TaskWorkspaceWrapper>
                {groups.length && groups.map((group, idx) => {
                    const items = group.tasks
    
                    return (
                        <TaskColumn 
                            title={group.title}
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