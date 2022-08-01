import React from "react";
import {PropTypes} from "prop-types";

class Proptypes extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div>
                <p>My name is {this.props.name} and my age is {this.props.age}</p>
                <p>Address:<br /> {this.props.address.doorNo},{this.props.address.street}<br />
                {this.props.address.city}-{this.props.address.pincode}</p>
            </div>
        )
    }
}
Proptypes.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    address : PropTypes.shape({
        doorNo : PropTypes.number,
        street : PropTypes.string,
        city : PropTypes.string,
        pincode : PropTypes.number
    })
}
Proptypes.defaultProp={
    name : "Divya",
    age : 20,
    address : {
        doorNo : 59,
        street : "Nehru street",
        city : "Hosur",
        pincode : 635109

    }
}
export default Proptypes