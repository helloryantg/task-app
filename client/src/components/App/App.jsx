import React, { Component } from 'react'
import TaskWorkspace from '../TaskWorkspace/TaskWorkspace'
import NavBar from '../NavBar/NavBar'
import styled from 'styled-components'
import {
    color,
    size,
    border
} from '../../styles/styled-variables'
import { getAllGroups } from '../../services/group.service'
import GroupTask from '../../models/GroupTask.model'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import LoginPage from '../../components/LoginPage/LoginPage'
import SignupPage from '../../components/SignupPage/SignupPage'

const AppWrapper = styled.div`
    height: 120vh;
    width: 100%;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    background-color: ${color.blackDark};
    align-items: center;
    color: white;
`

const RootPage = styled.div`
    height: 120vh;
    width: 100%;
    background-color: ${color.blackDark};
    color: white;

    & > .bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 2.2rem;
        padding: 1rem;

        & > .left {

        }

        & > .right {
            display: flex;

            & > .login,
            & > .signup {
                height: 2rem;
                width: 6rem;
                border: 1px solid white;
                border-radius: ${border.radiusDefault}
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${color.blackLight};
                cursor: pointer;
                color: white;
                text-decoration: none;
            }

            & > .signup {
                background-color: ${color.blackMedium};
                margin-left: 1rem;
            }

        }
    }
`

class App extends Component {
    state = {
        groups: [],
        user: {}
    }

    async componentDidMount() {

        const response = await getAllGroups()
        const groups = response.data.groups.map(group => new GroupTask().resolve(group))

        this.setState(() => ({
            groups
        }))
    }

    render() {
        const {
            groups,
            user
        } = this.state

        let body

        if (Object.entries(user).length === 0) {
            body = <RootPage>
                <div className="bar">
                    <div className="left"></div>
                    <div className="right">
                        <Link className="login" to="/login">Login</Link>
                        <Link className="signup" to="/signup">Signup</Link>
                    </div>
                </div>
            </RootPage>
        } else {
            body = <AppWrapper>
                <NavBar />
                <TaskWorkspace groups={groups} />
            </AppWrapper>
        }

        return (
            <Router>
                <Switch>
                    <Route exact path="/">{body}</Route>
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/signup" component={SignupPage} />
                </Switch>
            </Router>
        )
    }
}

export default App