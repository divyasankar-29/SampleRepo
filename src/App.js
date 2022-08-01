import React from 'react';
import './App.css';
import Hooks from './component/Hooks';
import Parent from './component/LiftingState';
import HooksUseEffect from './component/HooksUseEffect';
import ComponentA from './component/ComponentA';

class App extends React.Component{

render(){
    return(
        <div>
            <Hooks />
            <Parent />
            <HooksUseEffect />
            <br />
            <ComponentA />
        </div>
    )
}
}

export default App;
