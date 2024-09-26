import { CiCirclePlus } from "react-icons/ci";
import { LuPlusCircle } from "react-icons/lu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function AllProducts(){
    return(
        <>
            <section className="w-[1180px] float-end bg-[#E7E7E3] before:content-'' before:table after:content-'' after:table after:clear-both">
                <div className="w-[1108px] mx-auto mt-6">
                    <div className="flex flex-row justify-between items-center w-full">
                        <div>
                            <h2 className="text-[#232321] font-rubik text-2xl font-semibold leading-normal capitalize">
                                all products
                            </h2>
                            <div className="flex flex-row items-center">
                                <h4 className="text-base text-black font-semibold font-sans leading-normal capitalize">
                                    home 
                                </h4>
                                <span className="ml-1">
                                    <MdOutlineKeyboardArrowRight className="text-black"/>
                                </span>
                                <h4 className="text-base text-black font-semibold font-sans leading-normal capitalize">
                                    all products
                                </h4>
                            </div>
                        </div>
                        
                        <div>
                            <button className="flex flex-row items-center bg-[#232321] rounded-lg font-rubik text-sm font-medium leading-normal tracking-tight uppercase text-white px-4 h-[48px]">
                                <LuPlusCircle className="text-white mr-2 text-base"/>
                                add new products
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}