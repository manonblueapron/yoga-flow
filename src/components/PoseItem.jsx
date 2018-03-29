import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';

class PoseItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pose = this.props.pose;

    return (
      <ListItem
        primaryText={pose.name}
        onClick={this.props.onClick}
      />
    );
  }
}

export default PoseItem;
