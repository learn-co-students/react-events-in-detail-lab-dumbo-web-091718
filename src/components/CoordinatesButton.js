// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  getCoordinates = (e) => {
    this.props.onReceiveCoordinates([ e.clientY, e.clientX])
    console.log("hello prop func")
  }

  

  render() {
     const { onReceiveCoordinates } = this.props
     
    return (
      <div>
        <button onClick={(e) => this.getCoordinates(e)}> Get Coordinates </button>
      </div>
    )
  }
}
