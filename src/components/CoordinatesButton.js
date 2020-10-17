// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

  makeArr = (e) => {
    // this.props.onReceiveCoordinates((x,y) => [e.clientX, e.clientY])
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }
  
  render() {
    return (
      <button onClick={this.makeArr}>Button</button>
    )
  }

}