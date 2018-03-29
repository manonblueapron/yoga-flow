import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import PoseGroupItem from './PoseGroupItem';

let pose_groups = [
  {
    group_name: 'CHILL POSES',
    open: true,
    poses: [
      {
        id: 'one',
        name: 'dodo'
      }
    ]
  },{
    group_name: 'STANDING POSES',
    open: false,
    poses: [
      {
        id: 'two',
        name: 'debout',
      },
      {
        id: 'three',
        name: 'les bras en l air',
      }
    ]
  }
];

class PoseSelector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pose_group_items = pose_groups.map((pose_group) =>
      <PoseGroupItem
        pose_group={pose_group}
        onPoseClick={(e) => this.props.handlePoseSelection(e)}
      />
    );

    return (
      <div style={{height: '50px'}}>
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
