import Facebook from "../../../public/facebook.png";
import Google from "../../../public/google.png";

export default function CreateAccount({switchMode}){

    return(
        <>
        <section className="w-[1240px] mx-auto mt-6">
            <div className="w-[712px] mx-auto">
                <div className="w-full text-center">
                    <h2 className="text-[#333] text-[32px] font-fontShare font-medium leading-normal">Create an account</h2>
                </div>
                <div className="w-full text-center">
                    <p className="text-[#333] text-base font-normal  leading-normal font-fontShare">
                        Already have an account? 
                        <span className="text-[#111] underline" onClick={()=>{switchMode(true)}}>Log in</span>
                    </p>
                </div>

                <div className="mt-[72px]">
                    <label htmlFor="name" className="text-base text-[#666] font-normal leading-normal block">
                    What should we call you?
                    </label>
                    <input type="text" className="w-full h-[56px] border border-[#66666659] text-[#66666699] font-fontShare text-base font-normal pl-6 rounded-xl mt-[7px]" placeholder="Enter your profile name" />
                </div>
                
                <div className="mt-10">
                    <label htmlFor="email" className="text-base text-[#666] font-normal leading-normal block">what is your email?</label>
                    <input type="text" className="w-full h-[56px] border border-[#66666659] text-[#66666699] font-fontShare text-base font-normal pl-6 rounded-xl mt-[7px]" placeholder="Enter your email address" />
                </div>

                <div className="mt-10">
                    <div className="flex flex-row justify-between w-full">
                        <div>
                            <label htmlFor="password" className="text-base text-[#666] font-normal leading-normal">
                            Create a password
                            </label>
                        </div>
                        <div>
                            <span></span>
                            <span className="text-[#666666cc] text-lg font-fontShare font-normal">Hidden</span>
                        </div>
                    </div>  
                    <input type="text" className="w-full h-[56px] border border-[#66666659] text-[#66666699] font-fontShare text-base font-normal pl-6 rounded-xl mt-[7px]" placeholder="Enter your password" />
                </div>

                <div className="mt-10">
                    <p className="text-base font-normal font-fontShare text-[#333] leading-normal">
                    By creating an account, you agree to the 
                    <span className="text-[#111] underline"> Terms of use</span> and
                    <span className="text-[#111] underline"> Privacy Policy.</span>
                    </p>
                </div>

                <div className="mt-2">
                    <button className="w-full h-[64px] rounded-[40px] text-white text-[22px] font-medium font-fontShare leading-normal bg-[#111]/25 flex justify-center items-center">
                        Create an account
                    </button>
                </div>

                <div className="mt-[72px]">
                    <p className="text-[#666] text-xl font-normal leading-normal">OR Continue with</p>
                    <div className="flex flex-row gap-x-4 mt-4">
                        <div>
                            <button className="w-[277px] h-[64px] border border-[#333] rounded-[40px] flex flex-row items-center justify-center text-[#333] text-[22px] font-normal font-fontShare">
                                <span className="h-8 w-8 mr-4">
                                    <img src={Facebook} alt="facebook" className="h-full w-full object-cover" />
                                </span>
                                Facebook
                            </button>
                        </div>
                        <div>
                        <button className="w-[277px] h-[64px] border border-[#333] rounded-[40px] flex flex-row items-center justify-center text-[#333] text-[22px] font-normal font-fontShare">
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