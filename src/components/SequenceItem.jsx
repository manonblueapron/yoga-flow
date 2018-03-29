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
        <img src={require("../images/".concat(selectedPose, ".jpg"))} alt = '' style={style.image}/>
        <DeleteIcon onClick={() => this.props.onClick({index: this.props.index})}/>
      </td>
    );
  }
}

export default SequenceItem;
