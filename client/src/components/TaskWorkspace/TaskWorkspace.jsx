import React from 'react'
import './TaskWorkspace.scss'
import GroupTab from '../GroupTab/GroupTab'
import GroupPlus from '../GroupPlus/GroupPlus'
import GroupTask from '../../models/GroupTask.model'
import styled from 'styled-components'

const TaskWorkspaceWrapper = styled.div`
    display: flex;
    justify-content: center;
`

function TaskWorkspace() {

    return (
        <TaskWorkspaceWrapper>
            Ryan
        </TaskWorkspaceWrapper>
    )
}

export default TaskWorkspace