import React, { Component } from 'react';
import GridSequence from './GridSequence';
import PoseSelector from './PoseSelector';


let style = {
  table: {
    width: '100%'
  },
  td: {
    width: '50%'
  }
};

let grouped_poses = [
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

class CreateSequence extends Component {
  constructor(props) {
    super(props);
    this.state = {selected_poses: ["one", "two", "three", "one", "two", "three", "one", "two", "three"]};

    this.handlePoseSelectionChange = this.handlePoseSelectionChange.bind(this);
  }

  handlePoseSelectionChange (e) {
    let poses = this.state.selected_poses;
    poses.push(e.pose_id);
    this.setState({selected_poses: poses});
  }

  render() {
    return (
      <div>
        <p> Yo sequence time! </p>
        <table style={style.table}>
          <tbody>
            <tr>
              <td style={style.td}>
                <PoseSelector
                  handlePoseSelection= {(e) => this.handlePoseSelectionChange(e)}
                  grouped_poses = {grouped_poses}
                />
              </td>
              <td>
                <GridSequence selectedPoses={this.state.selected_poses} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CreateSequence;
