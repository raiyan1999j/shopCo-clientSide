import { useContext, useEffect, useState } from "react";
import Facebook from "../../../public/facebook.png";
import Google from "../../../public/google.png";
import { useFormik } from "formik";
import { PiEyeClosedBold } from "react-icons/pi";
import { RxEyeOpen } from "react-icons/rx";
import { InfoContext } from "../../InfoProvider/InoProvider";

const validate = values=>{
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordValidation = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    const errors = {}

    if(!values.userName){
        errors.userName = "Required!"
    }else if(values.userName.length < 3){
        errors.userName = "Name should be at least 3 character"
    }

    if(!values.email){
        errors.email = "Required"
    }else if(!emailValidation.test(values.email)){
        errors.email = "Email is invalid"
    }

    if(!values.password){
        errors.password = "Required"
    }else if(!passwordValidation.test(values.password)){
        errors.password = "Password must include at least one uppercase letter, one number, and a common symbol."
    }

    return errors;
}

export default function CreateAccount({switchMode}){
    const [condition,setCondition] = useState(false);
    const [txtOrPass,setTxtPass] = useState(false);
    const {newAccountOpen,googleUser,facebookUser} = useContext(InfoContext);

    const modeSwitch=()=>{
        setCondition(true);

        setTimeout(()=>{
            switchMode(true)
        },300)
    }

    const formHandler=useFormik({
        initialValues:{
            userName:"",
            email:"",
            password:""
        },
        validate,
        onSubmit:value=>{
            newAccountOpen(value)
        }
    })
    return(
        <>
        <section className={`w-[1240px] mx-auto mt-6 ${condition?"opacity-0 transition-all duration-200 ease-out":"opacity-100 transition-all duration-200 ease-in"}`}>
            <div className="w-[712px] mx-auto">
                <div className="w-full text-center">
                    <h2 className="text-[#333] text-[32px] font-fontShare font-medium leading-normal">Create an account</h2>
                </div>
                <div className="w-full text-center">
                    <p className="text-[#333] text-base font-normal  leading-normal font-fontShare">
                        Already have an account? 
                        <span className="text-[#111] underline hover:cursor-pointer" onClick={modeSwitch}>Log in</span>
                    </p>
                </div>

                <form onSubmit={formHandler.handleSubmit}>
                <div className="mt-[72px]">
                    <label htmlFor="name" className="text-base text-[#666] font-normal leading-normal block">
                    What should we call you?
                    </label>
                    <input type="text" className="w-full h-[56px] border border-[#66666659] text-black placeholder:text-[#66666699] font-fontShare text-base font-normal pl-6 rounded-xl mt-[7px]" placeholder="Enter your profile name" {...formHandler.getFieldProps("userName")} />

                        {formHandler.touched.userName && formHandler.errors.userName?<span className=" text-rose-600 font-fontShare text-base font-bold">{formHandler.errors.userName}</span>:null}
                </div>
                
                <div className="mt-10">
                    <label htmlFor="email" className="text-base text-[#666] font-normal leading-normal block">what is your email?</label>
                    <input type="text" className="w-full h-[56px] border border-[#66666659] placeholder:text-[#66666699] font-fontShare text-base font-normal pl-6 rounded-xl mt-[7px]" placeholder="Enter your email address" {...formHandler.getFieldProps("email")} />

                    {formHandler.touched.email && formHandler.errors.email?<span className=" text-rose-600 font-fontShare text-base font-bold">{formHandler.errors.email}</span>:null}
                </div>

                <div className="mt-10">
                    <div className="flex flex-row justify-between w-full">
                        <div>
                            <label htmlFor="password" className="text-base text-[#666] font-normal leading-normal">
                            Create a password
                            </label>
                        </div>
                        <div className="flex flex-row items-center hover:cursor-pointer" onClick={()=>{setTxtPass(!txtOrPass)}}>
                            <span className="mr-2">
                            {
                                txtOrPass?<RxEyeOpen className="text-[#666] font-normal"/>:<PiEyeClosedBold className="text-[#666] font-normal"/>
                            }
                            </span>
                            <span className="text-[#666666cc] text-lg font-fontShare font-normal">{txtOrPass?"Visible":"Hidden"}</span>
                        </div>
                    </div>  
                    <input type={txtOrPass?"text":"password"} className="w-full h-[56px] border border-[#66666659] placeholder:text-[#66666699] font-fontShare text-base font-normal pl-6 rounded-xl mt-[7px]" placeholder="Enter your password" {...formHandler.getFieldProps("password")} />

                    {formHandler.touched.password && formHandler.errors.password?<span className=" text-rose-600 font-fontShare text-base font-bold">
                        {formHandler.errors.password}
                    </span>:null}
                </div>
                

                <div className="mt-10">
                    <p className="text-base font-normal font-fontShare text-[#333] leading-normal">
                    By creating an account, you agree to the 
                    <span className="text-[#111] underline"> Terms of use</span> and
                    <span className="text-[#111] underline"> Privacy Policy.</span>
                    </p>
                </div>

                <div className="mt-2">
                    <button className="w-full h-[64px] rounded-[40px] text-white text-[22px] font-medium font-fontShare leading-normal bg-[#111]/25 flex justify-center items-center transition-all ease-in duration-150 hover:bg-[#111]" type="submit">
                        Create an account
                    </button>
                </div>
                </form>

                <div className="mt-[72px]">
                    <p className="text-[#666] text-xl font-normal leading-normal">OR Continue with</p>
                    <div className="flex flex-row gap-x-4 mt-4">
                        <div>
                            <button className="w-[277px] h-[64px] border border-[#333] rounded-[40px] flex flex-row items-center justify-center text-[#333] text-[22px] font-normal font-fontShare transition-all duration-100 ease-in hover:bg-[#111] hover:text-white" onClick={()=>{facebookUser()}}>
                                <span className="h-8 w-8 mr-4">
                                    <img src={Facebook} alt="facebook" className="h-full w-full object-cover" />
                                </span>
                                Facebook
                            </button>
                        </div>
                        <div>
                        <button className="w-[277px] h-[64px] border border-[#333] rounded-[40px] flex flex-row items-center justify-center text-[#333] text-[22px] font-normal font-fontShare transition-all duration-100 ease-in hover:bg-[#111] hover:text-white" onClick={()=>{googleUser()}}>
                                <span className="h-8 w-8 mr-4">
                                    <img src={Google} alt="Google" className="h-full w-full object-cover" />
                                </span>
                                Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}