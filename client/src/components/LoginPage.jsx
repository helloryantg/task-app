import React, { Component } from 'react'
import './LoginPage.scss'
import * as userServices from '../services/user.service'

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

        console.log(this.state)

        userServices.login(this.state)
            .then(() => {
                this.props.onSignupOrLogin()
            })
            .catch(err => alert('Invalid Credentials'))

    }

    render() {
        return (
            <div className="LoginPage">
                <form className="__form" action="" autoComplete="new-password">
                    <div className="__login">LOGIN</div>
                    <div className="__left">
                        <label htmlFor="email">Email address: </label>
                        <label htmlFor="password">Password: </label>
                        <label htmlFor="password-second">Repeat password: </label>
                    </div>

                    <div className="__right">
                        <input name="email" type="text" autoComplete="new-password" onChange={this.handleChange} />
                        <input name="password" type="password" autoComplete="new-password" onChange={this.handleChange} />
                        <input name="password-second" type="password-second" autoComplete="new-password" onChange={this.handleChange} />
                    </div>
                    <button className="__button" onClick={this.handleSubmit}>Log In</button>
                </form>

            </div>
        )
    }
}

export default LoginPage