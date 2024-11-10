import { useRef } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function DressFormate({info}){
  const infoLen = useRef(info.length - 1)
  
    return(
        <>
            <div className="mt-6 after:content-'' after:h-[1px] after:w-full after:table after:bg-[#0000001a] after:mt-6">
          {
            info.map((items,index)=>{
              return <div className={`flex flex-row justify-between items-center ${index === infoLen.current?"":"mb-5"}`} key={index}>
            <h3 className="text-[#00000099] font-fontShare text-base font-normal leading-normal capitalize">
              {items}
            </h3>
            <span>
              <MdOutlineKeyboardArrowRight className="text-[#00000099] font-medium" />
            </span>
          </div>
            })
          }
        </div>
        </>
    )
}