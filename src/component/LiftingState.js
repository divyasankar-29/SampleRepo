import React, { Component } from "react";
class Parent extends Component{
    constructor(props){
        super(props);
        this.state = {
            a : 10,
            b : 20
        };
        this.displayValues = this.displayValues.bind(this)
    }
    displayValues(){
        this.setState({
            a : 5,
            b : 10
        })
    }
    render(){
        return(
            <div>
                <h1> Sum of the two numbers {this.state.a+this.state.b}</h1>
                <Child a={this.state.a} b={this.state.b} handleChange={this.displayValues}/>
                <Child2 a={this.state.a} b={this.state.b} />
            </div>
        )
    }
}

class Child extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Product of two numbers {this.props.a * this.props.b}</h1>
                <button onClick={() => this.props.handleChange()}>Click</button>

            </div>
        )
    }
}

class Child2 extends Component{
    render(){
        return(
            <div>
                <h1>The result of division is {this.props.a / this.props.b}</h1>
            </div>
        )
    }
}

export default Parent