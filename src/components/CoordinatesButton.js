import React, { Component } from 'react';

class CoordinatesButton extends Component {

    clickHandler = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
        console.log(event)
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}></button>
            </div>
        );
    }
}

export default CoordinatesButton;