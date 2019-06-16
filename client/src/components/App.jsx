import React, { Component } from 'react';
import './App.scss';
import axios from 'axios'
import TaskWorkspace from './TaskWorkspace'
import LoginPage from './LoginPage'

class App extends Component {

  componentDidMount() {
    axios.get('tasks/test').then(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
        {/* <LoginPage /> */}
        <TaskWorkspace />
      </div>
    )
  }
}

export default App;
