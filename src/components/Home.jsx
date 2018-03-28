import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <p> Hello this is 'home' </p>

        <p><Link to="/new">Create a new Sequence</Link></p>
      </div>
    );
  }
}

export default Home;
