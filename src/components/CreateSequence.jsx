import React, { Component } from 'react';
import GridSequence from './GridSequence';
import SequencePrint from './SequencePrint';
import PoseSelector from './PoseSelector';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';


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

let selectedPosesSource = [
  {
    id: "one",
    name: "picture_one"
  },
  {
    id: "two",
    name: "picture_two"
  },
  {
    id: "three",
    name: "picture_three"
  },
    {
    id: "one",
    name: "picture_one"
  },
  {
    id: "two",
    name: "picture_two"
  },
  {
    id: "three",
    name: "picture_three"
  },
  {
    id: "one",
    name: "picture_one"
  },
  {
    id: "two",
    name: "picture_two"
  },
  {
    id: "three",
    name: "picture_three"
  }];

function sleep (time) {
  console.log()
  return new Promise((resolve) => setTimeout(resolve, time));
}

class CreateSequence extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_poses: selectedPosesSource,
      isPrintable: false
    };

    this.handlePoseSelectionChange = this.handlePoseSelectionChange.bind(this);
    this.print = this.print.bind(this);
    this.resetIsPrintable = this.resetIsPrintable.bind(this);
  }

  resetIsPrintable() {
    this.setState({isPrintable:false});
  }

  print(){
    console.log(this.state);
    this.setState({isPrintable: true});
    sleep(50).then(()=>{
      window.print();
      window.onafterprint = this.resetIsPrintable();
    });
  }

  handlePoseSelectionChange (e) {
    let poses = this.state.selected_poses;
    poses.push(e.pose);
    this.setState({selected_poses: poses});
  }

  render() {

    let content = this.state.isPrintable ?
      (<SequencePrint  selected_poses={this.state.selected_poses}/>) :
      (
        <div>
          <MuiThemeProvider>
            <RaisedButton label="Print" onClick={() => this.print()} />
          </MuiThemeProvider>
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
    return (<div>{content}</div>);
  }
}

export default CreateSequence;
