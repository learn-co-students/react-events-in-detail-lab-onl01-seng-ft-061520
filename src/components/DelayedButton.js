import React, { Component} from 'react'

class DelayedButton extends Component {
    handleClick = (event) => {
        event.persist();
        setTimeout(() => {this.props.onDelayedClick(event)},this.prop.delay);
    }
    render() {
        return (
            <button onClick={this.prop.handleClick}></button>
        )
    }
}

export default DelayedButton;
