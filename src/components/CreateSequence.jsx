import React, { Component } from 'react';
import GridSequence from './GridSequence';
import PoseSelector from './PoseSelector';


let style = {
  table: {
    width: '100%'
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
    this.state = {selected_poses: []};

    this.handlePoseSelectionChange = this.handlePoseSelectionChange.bind(this);
  }

  handlePoseSelectionChange (e) {
    console.log('handlePoseSelectionChange');
    console.log(e);
    let poses = this.state.selected_poses;
    poses.push(e.pose_id);
    this.setState({selected_poses: poses});
  }

  render() {
    // let selectedPoses = ['one', 'two', 'three','one', 'two', 'three','one', 'two', 'three'];

    return (
      <div>
        <p> Yo sequence time! </p>
        <table style={style.table}>
          <tbody>
            <tr>
              <td style={{width: '50%'}}>
                <PoseSelector
                  handlePoseSelection= {(e) => this.handlePoseSelectionChange(e)}
                  grouped_poses
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
