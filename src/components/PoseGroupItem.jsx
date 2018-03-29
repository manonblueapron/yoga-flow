import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import PoseItem from './PoseItem';

class PoseGroupItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pose_group = this.props.pose_group;
    return (
      <ListItem
        primaryText={pose_group.group_name}
        initiallyOpen={pose_group.open}
        primaryTogglesNestedList={true}
        nestedItems={pose_group.poses.map((pose) =>
          <PoseItem pose={pose} onClick={({pose_id = pose.id}) => this.props.onPoseClick({pose_id: pose_id})} />
        )}
      />
    );
  }
}

export default PoseGroupItem;
