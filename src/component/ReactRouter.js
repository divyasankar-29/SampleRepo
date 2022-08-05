import React from "react";
import {Link} from "react-router-dom";
import "./styles.css";

class ReactRouter extends React.Component{
    render(){
        return(
            <div>
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/post">Post</Link>
                </li>
            </ul>
            </div>
        )
    }
}
export default ReactRouter