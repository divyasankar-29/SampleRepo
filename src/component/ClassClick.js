import React, { Component } from "react";

class Click extends React.Component{

    clickHandler(){
        console.log("Button Clicked")
    }
    
    
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}
export default Click