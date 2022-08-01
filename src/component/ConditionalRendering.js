import React from "react";

class Warning extends React.Component{
    render(){
        if(!this.props.warn){
            return null;
        }
        return(
            <div>
                <b>Warning</b>
            </div>
        )
    }
}
class ConditionalRendering extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showWarning : true
        }
        this.handleClick  = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(prevState => ({
            showWarning : !prevState.showWarning
        }))
    }
    render(){
        return(
            <div>
                <Warning warn={this.state.showWarning} />
                <button onClick={this.handleClick}>
                    {this.state.showWarning ? "Hide" : "Show"}
                </button>
            </div>
        )
    }
}


export default ConditionalRendering