import React, { Component } from "react";

class Mounting extends Component{
    constructor(props){
        super(props);
        this.state={
            favouriteColor : "orange"
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     return{
    //         favouriteColor : props.color
    //     }
    // }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                favouriteColor : "blue"
            })
        },1000)
    }
    render(){
        return(
            <div>
                <h2>My favourite colour is {this.state.favouriteColor}</h2>
            </div>
        )
    }
}
export default Mounting