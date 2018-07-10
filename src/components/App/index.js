import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import IconFA from '@fortawesome/react-fontawesome';

import List from '../List';

import './index.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <div className="app-box">
                        <header className="app-header">
                            <span className="app-title">Your<br/>Things</span>
                        </header>
                        <Route exact path="/" component={List} />
                        <button className="add-button">
                            <IconFA icon={["fas", "plus"]} />
                        </button>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
