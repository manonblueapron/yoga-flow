import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import PoseGroupItem from './PoseGroupItem';

class PoseSelector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let grouped_poses = [];
    grouped_poses = this.props.grouped_poses;
    let pose_group_items = grouped_poses.map((pose_group) =>
      <PoseGroupItem
        pose_group={pose_group}
        onPoseClick={(e) => this.props.handlePoseSelection(e)}
      />
    );

    return (
      <div>
        <MuiThemeProvider>
          <List>
            {pose_group_items}
          </List>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default PoseSelector;
