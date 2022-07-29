import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props)
            this.state = {
                count:0
            }
        }
    increment(){
        this.setState({
            count : this.state.count+1
        })
        console.log(this.state.count)

        }
    render(){
        return(
            <div>
                <div><b>Count</b>-{this.state.count}
                </div>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}
export default Counter