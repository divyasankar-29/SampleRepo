import React,{useContext} from "react";
import ComponentC from "./ComponentC";
import {UseContext,CompanyContext} from "./ComponentA"

function ComponentB(){
    const user = useContext(UseContext)
    const company = useContext(CompanyContext)
        return(
            <div>
                {user} from {company}
            </div>
        )
}
export default ComponentB