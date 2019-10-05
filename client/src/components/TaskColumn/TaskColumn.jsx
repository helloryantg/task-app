import React, { Component } from 'react'
import styled from 'styled-components'
import { 
    color, 
    size,
    border 
} from '../../styles/styled-variables'

const TaskColumnWrapper = styled.div`
    width: 20rem;
    margin: 0.6rem;
    display: flex;
    flex-direction: column;
    background-color: ${color.mediumBlack};
    border-radius: ${border.radiusDefault};

    & > .title {
        margin: ${size.medium};
        height: 3.6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 ${size.medium};

        & > .__text {
            
        }
    }

    & > .items {
        
        // & > .item:first-child {
        //     border-top: 2px solid ${color.darkBlack};
        // }

        & > .item {
            height: 1.2rem;
            padding: 0.6rem;
            display: flex;
            align-items: center;
            margin: 0.4rem 0.2rem;
            border-bottom: 2px solid ${color.darkBlack};
            border-right: 1px solid ${color.darkBlack}
            border-radius: ${border.radiusDefault};

            &:hover {
                background-color: ${color.lightBlack};
            }
        }

    }

    & > .button {
            
        & > .__add {
            height: 1.2rem;
            padding: 0.6rem;
            display: flex;
            align-items: center;
            margin: 0.4rem 0;
        }

        &:hover {
            background-color: ${color.lightBlack};
        }
    }
`

const IconWrapper = styled.div`
    height: 1.8rem;
    width: 1.8rem;
    background-color: white;
`

const dummyItems = [
    {
        label: 'This is the label',
        description: 'This is the description',
        createdOn: Date.now()
    },
    {
        label: 'Second label',
        description: 'Second description',
        createdOn: Date.now()
    },
    {
        label: 'Third label',
        description: 'Third description',
        createdOn: Date.now()
    }
]

class TaskColumn extends Component {

    state = {
        title: 'Default Title',
        items: dummyItems,
        selected: []
    }

    render() {
        const {
            title,
            items
        } = this.state

        return (
            <TaskColumnWrapper>
                <div className="title">
                    <div className="__text">{title}</div>
                    <IconWrapper>Dots</IconWrapper>
                </div>

                <div className="items">
                    {items.map((item, idx) => {
                        return (
                            <div 
                                className="item"
                                key={idx}
                            >{item.label}</div>
                        )
                    })}   
                </div>

                <div className="button">
                    <div className="__add">Add another card</div>
                </div>
            </TaskColumnWrapper>
        )
    }
}

export default TaskColumn