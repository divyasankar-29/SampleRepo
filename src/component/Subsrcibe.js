import React, { Component } from "react";

class Subscribe extends Component{
    constructor(){
        super()
        this.state = {
            message : "Welcome Visitor"
        }
    }
    changeMessage(){
        this.setState({
            message : "Thank You for subscribing"
        })
    }
    render(){
        return(
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.changeMessage.bind(this)}>Subscribe</button>
            </div>
        )
    }
}
export default Subscribe