import React, { Component } from 'react';

class DelayedButton extends Component {

  clickEvent = (event) => {
    event.persist()
    window.setTimeout(() => {
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>Delayed Click</button>
      </div>
    );
  }

}

export default DelayedButton;
