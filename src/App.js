import React from 'react';
import './App.css';
import Hooks from './component/Hooks';
import Parent from './component/LiftingState';
import HooksUseEffect from './component/HooksUseEffect';
import ComponentA from './component/ComponentA';
import Mounting from './component/Mounting';
import Updating1 from './component/Updating1';
import Updating2 from './component/Updating2';
import UseReducer from './component/HooksUseReducer';
import Proptypes from './component/Proptypes';
import ConditionalRendering from './component/ConditionalRendering';
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
            <Hooks />
            <Parent />
            <HooksUseEffect />
            <br />
            <ComponentA />
            <br />
            <Mounting color="yellow"/>
            <br />
            <Updating1 />
            <br />
            <Updating2 />
            <br />
            <UseReducer />
            <Proptypes name="Kavya" age={24} address={address}
            />
            <br />
            <ConditionalRendering />
        </div>
    )
}
}

export default App;
