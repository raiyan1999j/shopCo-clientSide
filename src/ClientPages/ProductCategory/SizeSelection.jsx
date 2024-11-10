import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

export default function SizeSelection({info}){
  const [collapsibleCon,setCollapsibleCon] = useState(false);
  
    return(
        <>
            <div className="mt-6 after:content-'' after:h-[1px] after:w-full after:table after:bg-[#0000001a] after:mt-6">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-black font-fontShare font-bold text-xl capitalize">
              size
            </h2>
            <span className={`transition-all duration-150 ease-in hover:cursor-pointer hover:bg-gray-900 hover:rounded-full group ${collapsibleCon?"rotate-0":"rotate-[180deg]"}`} onClick={()=>{setCollapsibleCon(!collapsibleCon)}}>
              <MdKeyboardArrowUp className="text-black font-medium group-hover:text-white" />
            </span>
          </div>
          <div className={`mt-5 transition-all duration-300 ease-linear ${collapsibleCon?"max-h-[100vh] scale-y-100":"max-h-0 scale-y-0 overflow-hidden"} origin-top`}>
            <div className="flex flex-row flex-wrap gap-x-2 gap-y-2">
                {
                  info.map((items,index)=>{
                    return <span className="text-[#00000099] text-sm font-normal font-fontShare py-[10px] px-5 bg-[#F0F0F0] rounded-[62px]" key={index}>
                      {items}
                      </span>
                  })
                }
            </div>
          </div>
        </div>
        </>
    )
}