import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';

class DeleteIcon extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <IconButton onClick={this.props.onClick}>
          <Delete />
        </IconButton>
      </MuiThemeProvider>
    );
  }
}

export default DeleteIcon;
