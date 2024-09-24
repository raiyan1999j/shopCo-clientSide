import { useFormik } from "formik";
import { useContext, useState } from "react"
import { PiEyeClosedBold } from "react-icons/pi";
import { RxEyeOpen } from "react-icons/rx";
import { InfoContext } from "../../InfoProvider/InoProvider";

export default function Login({switchMode}){
    const [condition,setCondition] = useState(false);
    const [txtOrPass,setTxtPass] = useState(false);
    const {loginUser,errorMessage} = useContext(InfoContext);

    const modeSwitch=()=>{
        setCondition(!condition)
        
        setTimeout(()=>{
            switchMode(false)
        },300)
    }

    const formHandler=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        onSubmit:value=>{loginUser(value)}
    })
    return(
        <>
            <section className={`w-[1240px] mx-auto mt-6 ${condition?"opacity-0 transition-all duration-200 ease-out":"opacity-100 transition-all duration-200 ease-in"}`}>
            <div className="w-[712px] mx-auto">
                <div className="w-full text-center">
                    <h2 className="text-[#333] text-[32px] font-fontShare font-medium leading-normal">Log in to your account</h2>
                </div>
                <div className="w-full text-center">
                    <p className="text-[#333] text-base font-normal  leading-normal font-fontShare">
                        Don't have an account? 
                        <span className="text-[#111] underline hover:cursor-pointer" onClick={modeSwitch}>Create a free account</span>
                    </p>
                </div>
                
                <form onSubmit={formHandler.handleSubmit}>
                <div className="mt-10">
                    <label htmlFor="email" className="text-base text-[#666] font-normal leading-normal block">what is your email?</label>
                    <input type="text" className="w-full h-[56px] border border-[#66666659] placeholder:text-[#66666699] font-fontShare text-base font-normal pl-6 rounded-xl mt-[7px]" placeholder="Enter your email address" {...formHandler.getFieldProps("email")}/>
                </div>

                <div className="mt-10">
                    <div className="flex flex-row justify-between w-full">
                        <div>
                            <label htmlFor="password" className="text-base text-[#666] font-normal leading-normal">
                            Password
                            </label>
                        </div>
                        <div className="flex items-center hover:cursor-pointer" onClick={()=>{setTxtPass(!txtOrPass)}}>
                            <span className="mr-2">
                            {
                                txtOrPass?<RxEyeOpen />:<PiEyeClosedBold />
                            }
                            </span>
                            <span className="text-[#666666cc] text-lg font-fontShare font-normal">
                            {txtOrPass?"Visible":"Hidden"}
                            </span>
                        </div>
                    </div>  
                    <input type={txtOrPass?"text":"password"} className="w-full h-[56px] border border-[#66666659] placeholder:text-[#66666699] font-fontShare text-base font-normal pl-6 rounded-xl mt-[7px]" placeholder="Enter your password" {...formHandler.getFieldProps("password")} />
                </div>

                <p className="text-rose-600 font-fontShare text-sm font-medium mt-4">
                    {errorMessage?"Password or email mismatch":""}
                </p>
                <div className="mt-6">
                    <button className="w-full h-[64px] rounded-[40px] text-white text-[22px] font-medium font-fontShare leading-normal bg-[#111]/25 flex justify-center items-center transition-all ease-in duration-200 hover:bg-black">
                        Log in
                    </button>
                </div>
                </form>

            </div>
        </section>
        </>
    )
}