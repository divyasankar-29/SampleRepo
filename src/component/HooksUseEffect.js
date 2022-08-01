import React,{useState, useEffect, Component} from "react";

function HooksUseEffect(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState("");

    useEffect(() => {
        console.log("Updating the document title")
        document.title = `You clicked ${count} times`
    }, [count]
    )

    return(
        <div>
            <button onClick={() => setCount(count+1)}>Click {count} times</button>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
    )
}
export default HooksUseEffect