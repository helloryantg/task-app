import React, { Component } from 'react'
import * as userServices from '../../services/user.service'
import styled from 'styled-components'
import {
    color,
    size,
    border
} from '../../styles/styled-variables'
import { Link } from 'react-router-dom'


const LoginPageWrapper = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${color.blackDark};
    display: flex;
    justify-content: center;
    padding-top: 10%;
    color: white;

    & > .form {
        height: 40rem;
        width: 20rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        & > .message {
            font-size: 2.4rem;
            align-self: flex-start;

            & > a {
                font-size: 1.6rem;
            }
        }

        & > .email,
        & > .password {
            margin-top: 1rem;
            width: 20rem;
            height: 6rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            font-size: 1.6rem;
            
            & > input {
                width: 98%;
                border-radius: ${border.radiusDefault};
                height: 2rem;
            }
        }

        & > .login {
            margin-top: 2rem;
            width: 20rem;
            height: 3rem;
            border-radius: ${border.radiusDefault};
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            color: white;
            background-color: ${color.blackLight};
            border-bottom: 2px solid ${color.blackMedium};
            border-right: 1px solid ${color.blackMedium};

            & > .label {
                font-size: 1.6rem;
            }
        }
    }
`

class LoginPage extends Component {
    state = {
        email: '',
        password: '',
        validate: ''
    }

    // handleChange = ({ target }) => {
    //     this.setState(() => ({
    //         [target.name]: target.value
    //     }))
    // }

    // handleSubmit = (e) => {
    //     e.preventDefault()

    //     const { password, validate } = this.state

    //     if (password !== validate) {
    //         alert("Passwords are not the same")
    //         return
    //     }

    //     userServices.login(this.state)
    //         .then(() => {
    //             this.props.onSignupOrLogin()
    //         })
    //         .catch(err => alert('Invalid Credentials'))

    // }

    render() {

        return (
            <LoginPageWrapper className="LoginPage">
                <div className="form">
                    <div className="message">
                        <div className="label">Log in</div>
                        <Link to="/signup">or create an account</Link>
                    </div>
                    <div className="email">
                        <div className="label">Email</div>
                        <input type="text"/>
                    </div>
                    <div className="password">
                        <div className="label">Password</div>
                        <input type="password"/>
                    </div>
                    <Link className="login" to="/">
                        <div className="label">Log In</div>
                    </Link>
                </div>
                
                
                {/* <form className="__form" action="" autoComplete="new-password">
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
                </form> */}
            </LoginPageWrapper>
        )
    }
}

export default LoginPage