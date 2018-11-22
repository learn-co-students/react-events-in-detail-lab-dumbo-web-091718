// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
 
  delayCity = (e) => {
    e.persist()
    setTimeout(()=> this.props.onDelayedClick(e), this.props.delay)
      console.log('delay City', this.props.delay)
  }

  render() {
    console.log(this.props)
    const { onDelayedClick, delay} = this.props 
    console.log(onDelayedClick, delay)
    
    return (
      <div>
        <button onClick={this.delayCity}> Delay City</button>
      </div>
    )
  }
}
