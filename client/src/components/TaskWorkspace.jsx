import React from 'react'
import './TaskWorkspace.scss'
import GroupTab from './GroupTab'
import GroupPlus from './GroupPlus'

const TaskWorkspace = () => {

    const groups = [
        { title: 'One' },
        { title: 'Two' },
        { title: 'Three' }
    ]

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