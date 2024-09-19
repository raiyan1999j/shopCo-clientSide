import { useState } from "react"
import Login from "./Login";
import CreateAccount from "./CreateAccount";

export default function CreateOrLogin(){
    const [condition,setCondition] = useState(false);
    return(
        <>
            {
                condition?
                <Login/>:
                <CreateAccount switchMode={(value)=>{setCondition(value)}}/>
            }
        </>
    )
}