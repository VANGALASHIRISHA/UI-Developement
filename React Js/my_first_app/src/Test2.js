

import React, { Component } from 'react'

export default class Test2 extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            id:101,
            name:"Venu",
            designation:props.desig
        }
    }
  render() {
    return (
      <div>
        {this.state.id}<br></br>
        {this.state.name}<br></br>
        Designation{this.state.designation}
      </div>
    )
  }
}
