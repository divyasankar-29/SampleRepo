import React from 'react';
import './App.css';
import Child from './component/LiftingState';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <Child />
    </div>
  );
  }
}

export default App;
