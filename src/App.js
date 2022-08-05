import React from 'react';
import './App.css';
import ReactRouter from './component/ReactRouter';
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Post from './component/Post';
import Hook from './component/Hook';


  
class App extends React.Component{

render(){
    console.log("app call");
    // const address={
    //     doorNo : 34,
    //     street : "Netaji street",
    //     city : "Banglore",
    //     pincode : 654321
    // }
    return(
        <div className='div1'>
        <BrowserRouter>
        <div>
        <ReactRouter />
        </div>
        <Routes>
        <Route path="/" element={<Home/>} exact/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/post" element={<Post/>} />
        </Routes> 

               
        </BrowserRouter>
        <Hook />
        </div>
       
    )
}
}

export default App;
