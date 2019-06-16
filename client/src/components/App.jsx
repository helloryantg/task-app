import React, { Component } from 'react';
import './App.scss';
import axios from 'axios'
import TaskWorkspace from './TaskWorkspace'
import LoginPage from './LoginPage'

class App extends Component {

  state = {
    groups: null
  }

  componentDidMount() {
    axios.get('/groups/all').then(res => {
      // console.log(res)
      this.setState(() => ({
        groups: res.data
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
