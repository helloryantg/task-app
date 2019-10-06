import React, { Component } from 'react'
import { darken } from 'polished'
import styled from 'styled-components'
import {
    color,
    size,
    border
} from '../../styles/styled-variables'

const TaskColumnWrapper = styled.div`
    width: 20rem;
    height: 80%;
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
        
        & > .item {
            height: 1.2rem;
            padding: 0.6rem;
            display: flex;
            align-items: center;
            margin: 0.4rem 0.2rem;
            border-bottom: 2px solid ${color.darkBlack};
            border-right: 1px solid ${color.darkBlack}
            border-radius: ${border.radiusDefault};
            background-color: ${darken(0.24, color.blackLight)};

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
            border-radius: ${border.radiusDefault};

            &--active {
                height: 8rem;
                width: 100%;
                display: flex;
                flex-direction: column;

                & > textarea {
                    height: 4rem;
                    width: 90%;
                    border-radius: ${border.radiusDefault};
                    margin: 0.6rem;
                    border: none;
                    resize: none;
                    padding: 0.4rem;

                    &:focus {
                        outline: none;
                    }
                }

                & > .bottom {
                    display: flex;
                    align-items: center;
                    margin: 0 0.6rem;

                    & > button {
                        height: 1.8rem;
                        width: 6rem;
                        border-radius: ${border.radiusDefault};
                        margin-right: 0.4rem;
                    }

                    & > .cancel {
                        color: black;
                    }
                } 
            }
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
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${border.radiusDefault};
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
        selected: [],
        addButton: false
    }

    handleClickAdd = () => {
        this.setState(prevState => ({
            addButton: !prevState.addButton
        }))
    }

    handleAddCard = (newItem) => {
        this.setState((prevState) => ({
            items: [...prevState.items, newItem]
        }))
    }

    render() {
        const {
            title,
            items,
            addButton
        } = this.state

        console.log(addButton)

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
                    {addButton ?
                        <div className="__add--active">
                            <textarea placeholder="Enter a title for this card" name="" id="" cols="30" rows="10"></textarea>
                            <div className="bottom">
                                <button>Add Card</button>
                                <div className="cancel" onClick={this.handleClickAdd}>
                                    <IconWrapper>X</IconWrapper>
                                </div>
                            </div>
                        </div>   
                        :
                        <div className="__add" onClick={this.handleClickAdd}>
                            Add another card
                        </div>
                    }
                </div>
            </TaskColumnWrapper>
        )
    }
}

export default TaskColumn