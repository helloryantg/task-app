import React from 'react'
import './TaskWorkspace.scss'
import GroupTab from './GroupTab'
import GroupPlus from './GroupPlus'
import GroupTask from '../models/GroupTask.model'

const TaskWorkspace = () => {

    const groups = [
        { title: 'One' },
        { title: 'Two' },
        { title: 'Three' }
    ]

    const group = {
        title: 'First Group',
        createdOnDate: 0,
        tasks: []
    }

    console.log('group', group)

    const newGroup = new GroupTask(group)

    const task = {
        name: 'first task',
        createdOnDate: 0
    }
    newGroup.addTaskToGroup(task)
    console.log('newGroup', newGroup)

    console.log(newGroup.allTasks)

    return (
        <div className="TaskWorkspace">
            <div className="__groupList">
                <div className="__input-container">
                    <input type="text" placeholder="Search"/>
                </div>

                {groups.map(({ title }, idx) => {
                    return <GroupTab text={title} key={idx} />
                })}
                <GroupPlus />
            </div>

            <div className="__taskList">
            
            </div>
        </div>
    )
}

export default TaskWorkspace