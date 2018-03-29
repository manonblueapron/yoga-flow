import React, { Component } from 'react';

let style = {
  table: {
    position: 'absolute',
    top: '300px',
    left: '700px',
    width: '200px'
  },

  image: {
    height: '100px'
  }
};

class GridSequence extends Component {
  render() {


  let rows = [];
  let selectedPoses = this.props.selectedPoses;
  let number_lines = selectedPoses.length / 3;

  for(let i = 0; i < number_lines; i++) {
    let row_elements = selectedPoses.slice(i*3, i*3+3).map((selectedPose) =>
      <td>
        <img src={require("../images/".concat(selectedPose, ".jpg"))} alt = '' style={style.image}/>
      </td>
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
