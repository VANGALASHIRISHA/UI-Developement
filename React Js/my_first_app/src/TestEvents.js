import React, { Component } from 'react'

export default class TestEvents extends Component {
    constructor(){
        super()
        this.state={
            id:101,
            name:"Venu"
        }
        this.addEvent=this.addEvent.bind(this)
    }
    addEvent()
    {
        this.setState({designation:"Python Developer"})
    }
  render() {
    return (
      <div>
        <h3>Testing TestEvents</h3>
        ID:{this.state.id}<br></br>
        NAME:{this.state.name}<br></br>
        Desig:{this.state.designation}<br></br>
        <button onClick={this.addEvent}>Add Event</button>
      </div>
    )
  }
}
