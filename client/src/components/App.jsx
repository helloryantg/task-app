import React, { Component } from 'react';
import './App.scss';

import LoginPage from './LoginPage'

class App extends Component {

  componentDidMount() {
    fetch('/tasks/test')
      .then(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
        {/* <LoginPage /> */}
      </div>
    )
  }
}

export default App;
