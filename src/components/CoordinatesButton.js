import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  handleClick = (e) => {
    const coordinates = []
    coordinates.push(e.clientX)
    coordinates.push(e.clientY)
    this.props.onReceiveCoordinates(coordinates)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coordinates</button>
    )
  }

}
