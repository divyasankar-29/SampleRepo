import React from "react";

class Updating2 extends React.Component{
    
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("div1").innerHTML = 
        `Before Update the favourite colour was ${this.props.prevState.favColor}`
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML = 
        `After Update the favourite colour is ${this.props.favColor}`
    }
    render(){
        return(
            <div>
                <h2>My favourite colour is {this.props.favColor}</h2>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        )
    }
}
export default Updating2