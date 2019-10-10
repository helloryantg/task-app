import React, { Component } from 'react'
import * as userServices from '../../services/user.service'
import styled from 'styled-components'

const LoginPageWrapper = styled.div`
    height: 100%;
    width: 100%;

`


class LoginPage extends Component {
    state = {
        email: '',
        password: '',
        validate: ''
    }

    handleChange = ({ target }) => {
        this.setState(() => ({
            [target.name]: target.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { password, validate } = this.state

        if (password !== validate) {
            alert("Passwords are not the same")
            return
        }

        userServices.login(this.state)
            .then(() => {
                this.props.onSignupOrLogin()
            })
            .catch(err => alert('Invalid Credentials'))

    }

    render() {

        return (
            <LoginPageWrapper className="LoginPage">
                <form className="__form" action="" autoComplete="new-password">
                    <div className="__login">LOGIN</div>
                    <div className="__left">
                        <label htmlFor="name">Name: </label>
                        <label htmlFor="email">Email address: </label>
                        <label htmlFor="password">Password: </label>
                        <label htmlFor="password-second">Repeat password: </label>
                    </div>

                    <div className="__right">
                        <input name="name" type="text" onChange={this.handleChange} />
                        <input name="email" type="text" autoComplete="new-password" onChange={this.handleChange} />
                        <input name="password" type="password" autoComplete="new-password" onChange={this.handleChange} />
                        <input name="validate" type="password" autoComplete="new-password" onChange={this.handleChange} />
                    </div>
                    <button className="__button" onClick={this.handleSubmit}>Log In</button>
                </form>

            </LoginPageWrapper>
        )
    }
}

export default LoginPage