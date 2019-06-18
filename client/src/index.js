import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import './index.scss';
import App from './components/App.jsx';

ReactDOM.render(
    <Router>
        <Route component={App}/>
    </Router>, document.getElementById('root')
);
