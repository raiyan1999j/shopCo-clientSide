import { useContext, useEffect, useState } from "react"
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import { InfoContext } from "../../InfoProvider/InoProvider";
import { useNavigate } from "react-router-dom";
import Spin from "../../Preloader/Spin";

export default function CreateOrLogin(){
    const [condition,setCondition] = useState(false);
    const navigate = useNavigate();
    const {user,loading} = useContext(InfoContext);

    useEffect(()=>{
        if(user){
            navigate("/shop")
        }
    },[user])
    return(
        <>
            {
                condition?
                <Login switchMode={(value)=>{setCondition(value)}}/>:
                <CreateAccount switchMode={(value)=>{setCondition(value)}}/>
            }

            {
            loading?<div className="fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-white/50">
                <Spin/>
            </div>:""
        }
        </>
    )
}