import React, { Component } from 'react';
import './App.scss';
import TaskWorkspace from './TaskWorkspace'
// import LoginPage from './LoginPage'
import * as groupServices from '../services/group.service'

class App extends Component {

  state = {
    groups: null
  }

  componentDidMount() {
    groupServices.getAllGroups()
      .then(({ data }) => {
      this.setState(() => ({
        groups: data
      }))
    })
  }

  render() {

    const { groups } = this.state

    if (!groups) return <div>Loading...</div>

    return (
      <div className="App">
        {/* <LoginPage /> */}
        <TaskWorkspace groups={groups} />
      </div>
    )
  }
}

export default App;
