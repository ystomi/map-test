import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

// const SearchGuide = () => (
//   <MuiThemeProvider>
//     <RaisedButton label="Default" />
//   </MuiThemeProvider>
// );

export default class SearchGuide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <MuiThemeProvider>
        <TextField
          hintText="Search word"
        /><br />
        <br />
        {/* <RaisedButton
          label="Toggle Drawer"
          onClick={this.handleToggle}
        /> */}
        <Drawer open={this.state.open}>
        </Drawer>
      </MuiThemeProvider>
    );
  }
}