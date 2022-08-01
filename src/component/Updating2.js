import React from "react";

class Updating2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favouriteColor : "red"
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                favouriteColor : "black"
            })
        },2000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("div1").innerHTML = 
        `Before Update the favourite colour was ${prevState.favouriteColor}`
    }
    componentDidUpdate(){
        document.getElementById("div2").innerHTML = 
        `After Update the favourite colour is ${this.state.favouriteColor}`
    }
    render(){
        return(
            <div>
                <h2>My favourite colour is {this.state.favouriteColor}</h2>
                <div id="div1"></div>
                <div id="div2"></div>
            </div>
        )
    }
}
export default Updating2