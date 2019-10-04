import React from 'react'
import './TaskWorkspace.scss'
import GroupTab from './GroupTab'
import GroupPlus from './GroupPlus'
import GroupTask from '../models/GroupTask.model'
import styled from 'styled-components'

const TaskWorkspaceWrapper = styled.div`

`

function TaskWorkspace() {

    return (
        <TaskWorkspaceWrapper>
            Task Workspace
        </TaskWorkspaceWrapper>
    )
}

export default TaskWorkspace