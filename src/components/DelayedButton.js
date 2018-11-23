import React, {Component} from 'react'

class DelayedButton extends Component {
  
  handleEvent =(event)=>{
    event.persist()
    setTimeout(()=>{
      this.props.onDelayedClick(event)
    }, this.props.delay)
  }

  render() {
    return (
      <button onClick={this.handleEvent} >delyed click mutherfuckers~!</button>
    )
  }
}

export default DelayedButton;
