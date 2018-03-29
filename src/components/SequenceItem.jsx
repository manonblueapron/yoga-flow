import React, { Component } from 'react';
import DeleteIcon from './DeleteIcon';

let style = {
  image: {
    height: '100px'
  }
};

class SequenceItem extends Component {
  render() {
    let selectedPose = this.props.selectedPose;
    return (
      <td>
        <img src={require("../images/".concat(selectedPose.id, ".jpg"))} alt = '' style={style.image}/>
        <table>
          <tr>
            <td>
              <DeleteIcon onClick={() => this.props.onClick({index: this.props.index})}/>
            </td>
            <td>
              <h3>{selectedPose.name}</h3>
            </td>
          </tr>
        </table>
      </td>
    );
  }
}

export default SequenceItem;
