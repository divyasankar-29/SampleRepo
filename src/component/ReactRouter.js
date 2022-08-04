import React from "react";
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
class ReactRouter extends React.Component{
    render(){
        return(
            <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
            </BrowserRouter>
            </>
        )
    }
}
export default ReactRouter