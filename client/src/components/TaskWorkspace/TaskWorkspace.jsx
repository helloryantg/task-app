import React from 'react'
import './TaskWorkspace.scss'
import GroupTab from '../GroupTab/GroupTab'
import GroupPlus from '../GroupPlus/GroupPlus'
import GroupTask from '../../models/GroupTask.model'
import TaskColumn from '../TaskColumn/TaskColumn'
import styled from 'styled-components'

const TaskWorkspaceWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    
`

function TaskWorkspace() {

    return (
        <TaskWorkspaceWrapper>
            <TaskColumn />
        </TaskWorkspaceWrapper>
    )
}

export default TaskWorkspace