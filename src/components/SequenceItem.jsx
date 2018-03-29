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
        <DeleteIcon onClick={this.props.onClick}/>
      </td>
    );
  }
}

export default SequenceItem;
// <DeleteIcon onClick={() => this.props.onClick({selectedPose: this.props.selectedPose})}/>