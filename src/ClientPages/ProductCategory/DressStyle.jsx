import { useRef, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowUp } from "react-icons/md";

export default function DressStyle({info}){
  const [collapsibleCon,setCollapsibleCon] = useState(false);
  const infoLen = useRef(info.length - 1);
    return(
        <>
            <div className="mt-6">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-black font-fontShare text-xl leading-normal font-bold">Dress Style</h2>
            <span className={`transition-all duration-150 ease-in hover:cursor-pointer hover:bg-gray-900 hover:rounded-full group ${collapsibleCon?"rotate-0":"rotate-[180deg]"}`} onClick={()=>{setCollapsibleCon(!collapsibleCon)}}>
              <MdKeyboardArrowUp className="text-black font-medium group-hover:text-white"/>
            </span>
          </div>
          <div className={`mt-5 transition-all duration-300 ease-linear ${collapsibleCon?"max-h-[100vh] scale-y-100":"max-h-0 scale-y-0 overflow-hidden"} origin-top`}>
            {
              info.map((items,index)=>{
                return <div className={`flex flex-row justify-between items-center ${index === infoLen.current?"":"mb-5"}`} key={index}>
              <h2 className="text-[#00000099] text-base font-normal font-fontShare leading-normal capitalize">
                {items}
              </h2>
              <span>
                <MdKeyboardArrowRight className="text-[#00000099] font-medium" />
              </span>
            </div>
              })
            }
          </div>
        </div>
        </>
    )
}