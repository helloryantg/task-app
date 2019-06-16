import React from 'react'
import './TaskWorkspace.scss'
import GroupTab from './GroupTab'

const TaskWorkspace = () => {
    return (
        <div className="TaskWorkspace">
            <div className="__groupList">
                <div className="__input-container">
                    <input type="text" placeholder="Search"/>
                </div>

                <GroupTab text={'Camping'} />    
                <GroupTab text={'Item 2'} />    
                <GroupTab text={'Item 3'} />    
                <GroupTab text={'Item 4'} />    
            </div>

            <div className="__taskList">
            
            </div>
        </div>
    )
}

export default TaskWorkspace