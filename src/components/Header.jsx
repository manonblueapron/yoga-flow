import React, { Component } from 'react';
import logo from '../logo.svg';


class Home extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Yoga Flow</h1>
      </header>
    );
  }
}

export default Home;

