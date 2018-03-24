import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import CreateSequence from './components/CreateSequence';

import { Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
         <div>
          <Route exact path="/" component={Home} />
          <Route path="/new" component={CreateSequence} />
        </div>
      </div>
    );
  }
}

export default App;

          // <ul>
          //   <li>
          //     <Link to="/">Home</Link>
          //   </li>
          //   <li>
          //     <Link to="/topics">Topics</Link>
          //   </li>
          // </ul>