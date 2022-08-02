import React from "react";

class Component3 extends React.Component{
    constructor(props){
        super(props);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleBlur(event){
        this.props.handleOnChange(event.target.value.toUpperCase());
    }
    render(){
        return(
            <div>
                <input type="text" 
                value = {this.props.name}
                onChange={(e)  => this.props.handleOnChange(e.target.value)} 
                onBlur={this.handleBlur} />
            </div>
        )
    }
}
export default Component3