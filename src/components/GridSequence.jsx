import React, { Component } from 'react';
import SequenceItem from './SequenceItem';

let style = {
  table: {
    position: 'absolute',
    top: '300px',
    left: '700px',
    width: '200px'
  }
};

class GridSequence extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteSequenceItem = this.handleDeleteSequenceItem.bind(this);
  }

  handleDeleteSequenceItem (e) {
    console.log('aa');
    console.log(e);
  }

  render() {
    let rows = [];
    let selectedPoses = this.props.selectedPoses;
    let number_lines = selectedPoses.length / 3;
    let column_number = 3;

    for(let i = 0; i < number_lines; i++) {
      let start = i*column_number;
      let finish = (i+1)*column_number;
      let row_elements = selectedPoses.slice(start, finish).map((selectedPose) =>
        <SequenceItem selectedPose={selectedPose} onClick={() => this.handleDeleteSequenceItem({selectedPose: selectedPose})} />
      );

      rows.push(<tr>
        {row_elements}
      </tr>);
    }

    return (
        <div>
          <table style={style.table}>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      );
  }
}

export default GridSequence;
