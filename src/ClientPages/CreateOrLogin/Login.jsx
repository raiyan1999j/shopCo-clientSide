import { useState } from "react"

export default function Login({switchMode}){
    const [condition,setCondition] = useState(false);

    const modeSwitch=()=>{
        setCondition(!condition)
        
        setTimeout(()=>{
            switchMode(false)
        },300)
    }
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
                        <span className="text-[#111] underline" onClick={modeSwitch}>Create a free account</span>
                    </p>
                </div>
                
                <div className="mt-10">
                    <label htmlFor="email" className="text-base text-[#666] font-normal leading-normal block">what is your email?</label>
                    <input type="text" className="w-full h-[56px] border border-[#66666659] text-[#66666699] font-fontShare text-base font-normal pl-6 rounded-xl mt-[7px]" placeholder="Enter your email address" />
                </div>

                <div className="mt-10">
                    <div className="flex flex-row justify-between w-full">
                        <div>
                            <label htmlFor="password" className="text-base text-[#666] font-normal leading-normal">
                            Password
                            </label>
                        </div>
                        <div>
                            <span></span>
                            <span className="text-[#666666cc] text-lg font-fontShare font-normal">Hidden</span>
                        </div>
                    </div>  
                    <input type="text" className="w-full h-[56px] border border-[#66666659] text-[#66666699] font-fontShare text-base font-normal pl-6 rounded-xl mt-[7px]" placeholder="Enter your password" />
                </div>

                <div className="mt-2">
                    <button className="w-full h-[64px] rounded-[40px] text-white text-[22px] font-medium font-fontShare leading-normal bg-[#111]/25 flex justify-center items-center">
                        Log in
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}