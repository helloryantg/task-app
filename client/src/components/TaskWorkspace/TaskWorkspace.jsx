import React from 'react'
import GroupTab from '../GroupTab/GroupTab'
import GroupPlus from '../GroupPlus/GroupPlus'
import GroupTask from '../../models/GroupTask.model'
import TaskColumn from '../TaskColumn/TaskColumn'
import styled from 'styled-components'

const TaskWorkspaceWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
`

// const dummyItems = [
//     {
//         label: 'This is the label',
//         description: 'This is the description',
//         createdOn: Date.now()
//     },
//     {
//         label: 'Second label',
//         description: 'Second description',
//         createdOn: Date.now()
//     },
//     {
//         label: 'Third label',
//         description: 'Third description',
//         createdOn: Date.now()
//     }
// ]

// const dummyTitle = 'Things to keep in mind'

// const dummyItemsTwo = [
//     {
//         label: 'Hello there task',
//         description: 'This is the description',
//         createdOn: Date.now()
//     },
//     {
//         label: 'Another description?',
//         description: 'Second description',
//         createdOn: Date.now()
//     },
//     {
//         label: 'For real',
//         description: 'Third description',
//         createdOn: Date.now()
//     },
//     {
//         label: 'So many tasks',
//         description: 'This is the description',
//         createdOn: Date.now()
//     },
//     {
//         label: 'Already!?',
//         description: 'Second description',
//         createdOn: Date.now()
//     },
//     {
//         label: 'Oh man this is a lot of tasks',
//         description: 'Third description',
//         createdOn: Date.now()
//     }
// ]

function TaskWorkspace(props) {
    const { groups } = props 
        || {
            title: "Start a task",
            tasks: [
                { 
                    label: "No task", 
                    description: "Description",
                    createdOn: 1570394802
                }
            ]
        }

    return (
        <TaskWorkspaceWrapper>
            {groups.length && groups.map((group, idx) => {
                const items = group.tasks

                return (
                    <TaskColumn 
                        title={group.title}
                        items={items}
                    />
                )
            })}
            {/* <TaskColumn 
                items={dummyItems}
                title={dummyTitle}
            />

            <TaskColumn
                items={dummyItemsTwo}
                title={'Second group'}
            /> */}
        </TaskWorkspaceWrapper>
    )
}

export default TaskWorkspace