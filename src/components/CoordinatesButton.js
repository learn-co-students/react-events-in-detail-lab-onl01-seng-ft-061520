import React, { Component } from 'react';

class CoordinatesButton extends Component {

  clickEvent = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>Coordinates</button>
      </div>
    );
  }

}

export default CoordinatesButton;
