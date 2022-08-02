import React from 'react';
import './App.css';

import Proptypes from './component/Proptypes';
import Component2 from './component/Component2';
import Click from './component/ClassClick';
class App extends React.Component{

render(){
    const address={
        doorNo : 34,
        street : "Netaji street",
        city : "Banglore",
        pincode : 654321
    }
    return(
        <div>
            
            <Proptypes name="Kavya" age={24} address={address}
            />
            <br />
            <Component2 />
            <br />
            <Click />
        </div>
    )
}
}

export default App;
