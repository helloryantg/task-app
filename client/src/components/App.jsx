import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import './App.scss';
import TaskWorkspace from './TaskWorkspace'
import LoginPage from './LoginPage'
import * as groupServices from '../services/group.service'
import * as userServices from '../services/user.service'

class App extends Component {

  state = {
    user: null,
    groups: null
  }

  componentDidMount() {
    const user = userServices.getUser()

    console.log('user', user)
    
    groupServices.getAllGroups()
      .then(({ data }) => {
        this.setState(() => ({
          groups: data
        }))
      })
  }

  render() {

    const { user, groups } = this.state

    // if (!user) return <LoginPage />

    if (!groups) return <div>Loading...</div>

    return (
      <div className="App">




        <TaskWorkspace groups={groups} />
      </div>
    )
  }
}

export default App;
