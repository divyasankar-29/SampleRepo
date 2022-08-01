import React from "react";
import {UseContext,CompanyContext} from "./ComponentA";
function ComponentC(){ 
        return(
            <div>
                <UseContext.Consumer>
                    {
                        user => {
                            return (
                                <CompanyContext.Consumer>
                                    {
                                        company =>{
                                            return  <div>user context {user} company context {company}</div>
                                        }
                                    }
                                </CompanyContext.Consumer>
                            )
                        }
                    }
                </UseContext.Consumer>
            </div>
        )
}
export default ComponentC