import React, { Component } from 'react'
import { darken } from 'polished'
import styled from 'styled-components'
import {
    color,
    size,
    border
} from '../../styles/styled-variables'
import pencil from '../../icons/pencil-edit-button.svg'
import more from '../../icons/more.svg'
import close from '../../icons/close.svg'
import add from '../../icons/add.svg'
import { 
    addGroup,
    addTask 
} from '../../services/group.service'

const TaskColumnWrapper = styled.div`
    width: 20rem;
    margin: 0.6rem;
    display: flex;
    flex-direction: column;
    background-color: ${color.blackMedium};
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
            justify-content: space-between;
            margin: 0.4rem 0.2rem;
            border-bottom: 2px solid ${color.blackDark};
            border-right: 1px solid ${color.blackDark}
            border-radius: ${border.radiusDefault};
            background-color: ${darken(0.24, color.blackLight)};

            &:hover {
                background-color: ${color.blackLight};

                & img {
                    display: block;
                }
            }

            & img {
                display: none;
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
                margin-bottom: 0.4rem;

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

            & > .__text {
                margin-left: 0.4rem;
            }
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
    background-color: inherit;
    
    & > img {
        height: 1rem;
        width: 1rem;
        filter: invert(100%);
    }
`

class TaskColumn extends Component {

    state = {
        title: 'Things to keep in mind',
        items: [],
        selected: [],
        addButton: false,
        textValue: ''
    }

    componentDidMount() {
        this.setState(() => ({
            items: this.props.items
        }))
    }

    componentDidUpdate(prevProps, prevState) {
        const { items } = this.props

        if (prevProps.items !== this.props.items) {
            this.setState(() => ({
                items
            }))
        }
    }

    handleClickAdd = () => {
        this.setState(prevState => ({
            addButton: !prevState.addButton,
            textValue: ''
        }))
    }

    handleAddCard = () => {
        const newItem = {
            label: this.state.textValue,
            description: '',
            createdOn: Date.now()
        }

        const data = {
            group: this.props.title,
            task: newItem
        }
        addTask(data)

        this.setState((prevState) => ({
            items: [...prevState.items, newItem],
            textValue: ''
        }))
    }

    handleTextAreaChange = ({ target }) => {
        this.setState(() => ({
            textValue: target.value
        }))
    }

    handleEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault()
            if (this.state.textValue === "") {
                return
            }
            this.handleAddCard()
        }
    }

    handleBlur = () => {
        this.setState(() => ({ 
            addButton: false
        }))
    }

    render() {
        const {
            items,
            addButton,
            textValue
        } = this.state

        const {
            title
        } = this.props

        return (
            <TaskColumnWrapper>
                <div className="title">
                    <div className="__text">{title}</div>
                    <IconWrapper>
                        <img src={more} alt=""/>
                    </IconWrapper>
                </div>

                <div className="items">
                    {items.map((item, idx) => {
                        return (
                            <div
                                className="item"
                                key={idx}
                            >
                                <div className="label">{item.label}</div>
                                <IconWrapper>
                                    <img src={pencil} alt=""/>
                                </IconWrapper>
                            </div>
                        )
                    })}
                </div>

                <div className="button">
                    {addButton ?
                        <div className="__add--active">
                            <textarea 
                                placeholder="Enter a title for this card" 
                                name="" 
                                id="" 
                                cols="30" 
                                rows="10"
                                value={textValue}
                                onChange={this.handleTextAreaChange}
                                autoFocus
                                onKeyDown={this.handleEnterPress}
                                onBlur={this.handleBlur}
                            />
                            <div className="bottom">
                                <button onClick={this.handleAddCard}>Add Card</button>
                                <div className="cancel" onClick={this.handleClickAdd}>
                                    <IconWrapper>
                                        <img src={close} alt=""/>
                                    </IconWrapper>
                                </div>
                            </div>
                        </div>   
                        :
                        <div className="__add" onClick={this.handleClickAdd}>
                            <IconWrapper>
                                <img src={add} alt=""/>
                            </IconWrapper>
                            <div className="__text">Add another card</div>
                        </div>
                    }
                </div>
            </TaskColumnWrapper>
        )
    }
}

export default TaskColumn