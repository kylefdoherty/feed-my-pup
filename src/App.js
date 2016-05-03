import React, { Component } from 'react';

// need to clean this up later
const outerWrapperStyles = {
  display: '-webkit-box',
  display: '-moz-box',
  display: '-webkit-flex',
  display: 'flex',
  WebkitBoxFlexDirection: 'row',
  MozBoxFlexDirection: 'row',
  WebkitFlexDirection: 'row',
  flexDirection: 'row',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  width: '100%',
  height: '100%'
};

const innerWrapperStyles = {
  margin: 'auto'
}

export default class App extends Component {
  render() {
    return (
      <div style={outerWrapperStyles} className='outer-wrapper'>
        <div style={innerWrapperStyles} className='inner-wrapper'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
