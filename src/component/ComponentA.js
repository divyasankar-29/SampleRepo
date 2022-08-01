import React from "react";
import ComponentB from "./ComponentB";

export const UseContext = React.createContext()
export const CompanyContext = React.createContext()
function ComponentA(){ 
        return(
            <div>
                <UseContext.Provider value={"Divya"}>
                    <CompanyContext.Provider value={"Rently"}>
                    <ComponentB />
                    </CompanyContext.Provider>
                </UseContext.Provider>
               
            </div>
        )
}
export default ComponentA