import React, { Component } from 'react';
import GridSequence from './GridSequence';

let style = {
  table: {
    width: '100%'
  }
};

class SequencePrint extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p> Yo sequence time! </p>
        <GridSequence selectedPoses={this.props.selected_poses} />
      </div>
    );
  }
}

export default SequencePrint;
