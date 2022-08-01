import React from "react";
import { useState } from "react";

function Hooks(){
    const [colour, setColour] = useState("pink");
    const [count, setCount] = useState(0);
    const [student, setDetails] = useState({
        name : "Aarthi",
        place : "Hosur",
        age : "21"
    })
    const updateDetails = () =>{
        setDetails(previousState => {
            return{name:"Divya", place:"Hosur", age:"20"}
    });
    }
    return(
        <div>
            <h1>My favourite colour is {colour}</h1>
            <button onClick={() => setColour("black")}>Click</button>
            <br />
            <br />
            <button onClick={() => setCount(count+1)}>Increment {count}</button>
            <h1>Hi! I am {student.name} and I am from {student.place} </h1>
            <h1>My age is {student.age}</h1>
            <button onClick={updateDetails}>Click</button>
        </div>
    )
}
export default Hooks