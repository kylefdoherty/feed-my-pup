import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const outerWrapperStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'dee0e0',
  height: '100vh'
};

const innerWrapperStyles = {
  background: 'dee0e0',
  padding: '20px',
  marginTop: '100px'
}

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={outerWrapperStyles} className='outer-wrapper'>
          <div style={innerWrapperStyles} className='inner-wrapper'>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
