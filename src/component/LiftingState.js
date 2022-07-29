import React, { Component } from "react";

const scaleNames={
    c : 'Celsius',
    f : 'Farehrenheit'
};

class TemperatureInput extends Component{
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state={
            temperature:''
        }
    }

    handleChange(e){
        this.setState({
            temperature:e.target.value
        })
    }

    render(){
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return(
            <div>
                <fieldset>
                    <legend>Enter Temperatue in {scaleNames[scale]}:</legend>
                    <input value={temperature} onChange={this.handleChange} />
                </fieldset>
            </div>
        )
    }
}

class Child extends Component{
    render(){
        return(
            <div>
                <TemperatureInput scale='c' />
                <TemperatureInput scale='f' />
            </div>
        )
    }
}
export default Child