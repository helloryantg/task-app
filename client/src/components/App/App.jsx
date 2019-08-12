import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.scss';
import TaskWorkspace from '../TaskWorkspace'
import LoginPage from '../LoginPage'
import SignupPage from '../SignupPage'
import * as groupServices from '../../services/group.service'
import * as userServices from '../../services/user.service'

class App extends Component {

  state = {
    user: null,
    groups: null
  }

  componentDidMount() {
    // const user = userServices.getUser()

    // console.log('user', user)

    // groupServices.getAllGroups()
    //   .then(({ data }) => {
    //     this.setState(() => ({
    //       groups: data
    //     }))
    //   })
  }

  handleChange = (e) => {
    this.setState(() => ({
      [e.target.name]: e.target.value
    }))
  }

  handleSignupOrLogin = () => {
    this.setState(() => ({
      user: userServices.getUser()
    }))
  }

  render() {

    const { user, groups } = this.state

    return (
      <div className="App">
        <TaskWorkspace groups={groups} />
      </div>

    )
  }
}

export default App;
