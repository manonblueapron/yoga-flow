import React, { Component } from 'react';

import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import CreateSequence from './components/CreateSequence';

import { Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>
          <p><Link to="/">Home</Link></p>
        </div>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/new" component={CreateSequence} />
        </div>
      </div>
    );
  }
}

export default App;
