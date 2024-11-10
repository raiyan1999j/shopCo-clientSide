import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function ColorSelection({info}){
  const [collapsibleCon,setCollapsibleCon] = useState(false);
    return(
        <>
            <div className="mt-6 after:content-'' after:h-[1px] after:w-full after:table after:bg-[#0000001a] after:mt-6">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-black text-xl font-fontShare leading-normal font-bold">
              Colors
            </h2>
            <span className={`transition-all duration-150 ease-in hover:cursor-pointer hover:bg-gray-900 hover:rounded-full group ${collapsibleCon?"rotate-0":"rotate-[180deg]"}`} onClick={()=>{setCollapsibleCon(!collapsibleCon)}}>
              <MdKeyboardArrowUp className="text-black font-medium group-hover:text-white"/>
            </span>
          </div>
          <div className={`mt-5 transition-all duration-300 ease-linear ${collapsibleCon?"max-h-[100vh] scale-y-100":"max-h-0 scale-y-0 overflow-hidden"} origin-top`}>
            <div className="grid grid-cols-5 gap-y-4 justify-between">
              {
                info.map((items,index)=>{
                  return <div className="h-[37px] w-[37px] rounded-full" style={{backgroundColor:`${items?items:""}`}} key={index}></div>
                })
              }
            </div>
          </div>
        </div>
        </>
    )
}