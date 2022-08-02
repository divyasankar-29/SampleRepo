import { Button } from "@mui/material";
import React, { Component } from "react";

class Click extends React.Component{

    clickHandler(){
       alert("Button Clicked")
    }
    
    
    render(){
        return(
            <div>
                <Button variant="text" onClick={this.clickHandler}>Click Me</Button>
                <Button variant="contained" onClick={this.clickHandler}>Click Me</Button>
                <Button variant="outlined" onClick={this.clickHandler}>Click Me</Button>
                <br />
                <Button variant="contained" disabled>Disabled</Button>
                <br />
                <Button variant="contained" disableElevation>Elevation</Button>
            </div>
        )
    }
}
export default Click