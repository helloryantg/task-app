import React, { Component } from 'react'
import * as userServices from '../services/user.service'
import './SignupPage.scss'

class SignupPage extends Component {

    state = {
        name: '',
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

        const { 
            name,
            email,
            password,
            validate
        } = this.state

        if (password === validate) {
            userServices.signup({
                email,
                name,
                password
            })
            .then(() => {
                this.props.onSignupOrLogin()
            })
            .catch(err => alert('Invalid Credentials'))
        } else {
            alert('Passwords must match!')
        }
    }
    render() {
        return (
            <div className="SignupPage" >
                <form className="__form" action="" autoComplete="new-password">
                    <div className="__signup">Sign up</div>
                    
                    <div className="__input-container">
                        <div className="__item">
                            <label htmlFor="name">Name: </label>
                            <input name="name" type="text" autoComplete="new-password" onChange={this.handleChange} />
                        </div>

                        <div className="__item">
                            <label htmlFor="email">Email address: </label>
                            <input name="email" type="text" autoComplete="new-password" onChange={this.handleChange} />
                        </div>

                        <div className="__item">
                            <label htmlFor="password">Password: </label>
                            <input name="password" type="password" autoComplete="new-password" onChange={this.handleChange} />
                        </div>

                        <div className="__item">
                            <label htmlFor="validate">Repeat password: </label>
                            <input name="validate" type="password" autoComplete="new-password" onChange={this.handleChange} />
                        </div>
                    </div>

                    <button className="__button" onClick={this.handleSubmit}>Create your account</button>
                </form>

            </div>
        )

    }
}

export default SignupPage