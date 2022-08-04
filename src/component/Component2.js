import React from "react";
import Component3 from "./Component3";
import Component1 from "./Component1";

class Component2 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userName : ""
        }
    }
    handleChange= (e) => {
        this.setState({
            userName : e
        })
    }
    
    render(){
        return(
            <div>
                <br />
                <Component3  name = {this.state.userName} handleOnChange={this.handleChange} /> 
                <br />
                <Component1 name = {this.state.userName} />
            </div>
        )
    }
}
export default Component2