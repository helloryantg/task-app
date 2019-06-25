import React, { Component } from 'react'
import './LoginPage.scss'

class LoginPage extends Component {
    state = {
        email: null,
        password: null,
        validate: null
    }

    componentDidMount() {
        
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
                        <input name="text" type="text" autoComplete="new-password" />
                        <input name="password" type="password" autoComplete="new-password"/>
                        <input name="password-second" type="password-second" autoComplete="new-password"/>
                    </div>
                </form>

            </div>
        )
    }
}

export default LoginPage