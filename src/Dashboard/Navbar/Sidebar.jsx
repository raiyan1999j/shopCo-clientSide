import { IoAlbums, IoDocumentSharp } from "react-icons/io5";
import { MdOutlineDashboard, MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Sidebar(){
    return(
        <>
        <div className="w-[260px] px-6 py-[31.39px] border border-[#23232133] border-t-transparent border-b-transparent border-l-transparent">
            <div className="mb-[32.14px]">
                <h1 className="uppercase text-black font-googleFont font-bold text-[32px] pl-[22px]">
                    shop.co
                </h1>
            </div>
            
            <div className="mb-[32.14px]">
                <ul className="flex flex-col w-[212px] gap-y-4">
                    <li className="uppercase text-sm font-medium font-rubik text-[#232321] leading-normal tracking-tight h-12 w-full rounded-lg px-4 flex flex-row items-center relative before:transition-all before:duration-300 before:ease-in before:absolute before:content-'' before:h-full before:w-0 before:bg-[#232321] before:rounded-lg before:-z-20 hover:before:w-full hover:cursor-pointer hover:delay-300 hover:text-white group">
                        <span className="mr-2 ml-4">
                        <MdOutlineDashboard className="text-base text-[#232321] group-hover:text-white" />
                        </span>
                        Dashboard
                    </li>
                    <li className="uppercase text-sm font-medium font-rubik text-[#232321] leading-normal tracking-tight h-12 w-full rounded-lg px-4 flex flex-row items-center relative before:transition-all before:duration-300 before:ease-in before:absolute before:content-'' before:h-full before:w-0 before:bg-[#232321] before:rounded-lg before:-z-20 hover:before:w-full hover:cursor-pointer hover:delay-300 hover:text-white group">
                        <span className="mr-2 ml-4">
                        <IoAlbums className="text-base text-[#232321] group-hover:text-white" />
                        </span>
                        all products
                    </li>
                    <li className="uppercase text-sm font-medium font-rubik text-[#232321] leading-normal tracking-tight h-12 w-full rounded-lg px-4 flex flex-row items-center relative before:transition-all before:duration-300 before:ease-in before:absolute before:content-'' before:h-full before:w-0 before:bg-[#232321] before:rounded-lg before:-z-20 hover:before:w-full hover:cursor-pointer hover:delay-300 hover:text-white group">
                        <span className="mr-2 ml-4">
                        <IoDocumentSharp className="text-base text-[#232321] group-hover:text-white" />
                        </span>
                        order list
                    </li>
                </ul>
            </div>

            <div>
                <div className="flex flex-row justify-between items-center">
                    <h2 className=" text-xl font-semibold font-rubik leading-normal text-[#232321]">Categories</h2>
                    <span>
                    <MdOutlineKeyboardArrowRight className="text-2xl text-[#232321]"/>
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}