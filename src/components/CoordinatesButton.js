import React, { Component} from 'react'

class CoordinatesButton extends Component {
    handleClick = (event) => {
       let eventData = []
        eventData.push(event.clientX)
        eventData.push(event.clientY)
        this.props.onReceiveCoordinates(eventData) 
    }
    render() {
        return (
            <button onClick={this.handleClick}></button>
        )
    }
}

export default CoordinatesButton;