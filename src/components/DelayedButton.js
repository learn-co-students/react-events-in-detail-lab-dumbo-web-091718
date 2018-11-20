// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {

    delayEvent = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render(){
        return (<button onClick={this.delayEvent}>Slooooooowwwwwww</button>)
    }
}
export default DelayedButton