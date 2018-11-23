import React, {Component} from 'react'

class CoordinatesButton extends Component {

  handleClick(event) {
    let arr = []
    arr.push(event.clientX)
    arr.push(event.clientY)
    this.props.onReceiveCoordinates(arr)
  }

  render() {
    return (
      <button onClick={(event)=>this.handleClick(event)}>Click me mutherfucker</button>
    )
  }
}

export default CoordinatesButton;
