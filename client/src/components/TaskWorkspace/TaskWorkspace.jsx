import React from 'react'
import TaskColumn from '../TaskColumn/TaskColumn'
import styled from 'styled-components'

const TaskWorkspaceWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
`

function TaskWorkspace(props) {
    
    const groups = props.groups

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

export default TaskWorkspace