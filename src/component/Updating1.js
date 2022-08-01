import React from "react";

class Updating1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            favouriteColour : "red"
        }
    }
    componentShouldUpdate(){
        return true;
    }
    
    handleChange(){
        this.setState({
            favouriteColour : "blue"
        })
    }
    
    render(){
        return(
            <div>
                <h2>My favourite colour is {this.state.favouriteColour}</h2>
                <button onClick={this.handleChange.bind(this)}>Click</button>
            </div>
        )
    }
}
export default Updating1