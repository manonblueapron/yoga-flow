import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

class PoseItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pose = this.props.pose;
    return (
        <ListItem
          leftAvatar={<Avatar src={require('../images/'+pose.id+'.jpg')} />}
          primaryText={pose.name}
          onClick={this.props.onClick}
        />
    );
  }
}

export default PoseItem;
