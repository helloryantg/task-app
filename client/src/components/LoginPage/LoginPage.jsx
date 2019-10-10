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
        password: ''
    }

    handleChange = ({ target }) => {
        this.setState(() => ({
            [target.name]: target.value
        }))
    }

    handleSubmit = () => {
        const { email, password } = this.state

        userServices.login(this.state)
            .then(() => {
                this.props.onSignupOrLogin()
            })
            .catch(err => alert('Invalid Credentials'))
    }

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
                        <input 
                            name="email" 
                            type="text" 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div className="password">
                        <div className="label">Password</div>
                        <input 
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <Link 
                        className="login" 
                        to="/"
                        onClick={this.handleSubmit}
                    >
                        <div className="label">Log In</div>
                    </Link>
                </div>
            </LoginPageWrapper>
        )
    }
}

export default LoginPage