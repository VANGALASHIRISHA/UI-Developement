import { Component } from "react";

class Test extends Component{
    state={
        x:10,
        y:20
    }
    render(){
        return(
        <div>
            <h3>This is class Component</h3>
           x={this.state.x}<br></br>
           y={this.state.y}<br></br>
           addition is   {this.state.x+this.state.y}
        </div>)
    }
}
export default Test;