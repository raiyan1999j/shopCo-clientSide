import { CiMenuKebab } from "react-icons/ci";
import { FaArrowUpLong } from "react-icons/fa6";

export default function AvailableProducts({allInfo}){
    console.log(allInfo)
    return(
        <>
            <div className="w-[1108px] mx-auto mt-6 mb-[100px]">
            <div className="w-full grid grid-cols-[360px_360px_360px]  gap-x-[14px]">
                <div className="w-full bg-white rounded-2xl p-4">
                    <div className="flex flex-row justify-start">
                        <div className="h-[84px] w-[84px] rounded-lg">
                            <img src="" alt="" className="h-full w-full object-cover rounded-lg" />
                        </div>
                        <div className="mx-4 w-[180px]">
                            <h2 className="text-[#232321] text-base font-sans font-semibold capitalize leading-normal">
                                lorem Ipsum
                            </h2>
                            <h4 className="font-sans text-black/60 text-sm font-semibold leading-normal">
                                category
                            </h4>
                            <div className="mt-4">
                                <span className="text-[#232321] font-rubik text-sm font-semibold">
                                    regular price
                                </span>
                                <span>
                                    
                                </span>
                                <span>
                                    
                                </span>
                            </div>
                        </div>
                        <div>
                            <button className="h-8 w-[27.2px] bg-[#2323210d] flex justify-center items-center rounded-[4px]">
                            <CiMenuKebab className="text-base text-gray-500/50 rotate-[90deg]"/>
                            </button>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-base font-semibold leading-normal font-sans text-[#232321] capitalize">
                            description
                        </h2>
                        <p className="text-sm font-normal font-sans leading-normal text-[#232321] capitalize mt-4">
                            your description here
                        </p>
                    </div>

                    <div className="w-full border border-[#2323214d] rounded-lg p-4 flex flex-col justify-center items-center text-sm font-semibold font-sans text-[#232321] capitalize leading-normal mt-4">
                        <div className="flex flex-row justify-between w-full items-center border border-[#232321] border-t-transparent border-r-transparent border-l-transparent pb-2">
                            <div>
                                <h4>
                                    sales
                                </h4>
                            </div>

                            <div className="flex flex-row">
                                <span className="mr-2">
                                <FaArrowUpLong className="text-base text-[#FFA52F] " />
                                </span>
                                <span>
                                    0
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between w-full pt-2">
                            <div>
                                <h4>
                                    remaining products
                                </h4>
                            </div>
                            <div className="flex flex-row items-center">
                                <span className="relative h-1 w-[52px] bg-[#E7E7E3] rounded-xl mr-2">
                                    <span className="absolute top-0 left-0 h-full w-[80%] bg-[#FFA52F] rounded-xl">
                                    </span>
                                </span>
                                <span>
                                    0
                                </span>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            </div>
            
        </>
    )
}