import Option from "../../../public/option.png";
import DressStyle from "./DressStyle";
import DressFormate from "./DressFormate";
import PriceRange from "./PriceRange";
import ColorSelection from "./ColorSelection";
import SizeSelection from "./SizeSelection";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { publicRoute } from "../../AxiosBase/PublicRoute";
import Dots from "../../Preloader/Dots";

export default function SidebarLeft() {
  const [collapsibleCon,setCollapsibleCon] = useState(false);
  const [temporary,setTempo] = useState(true);

  const {isError,isPending,data} = useQuery({
    queryKey:["productFilter"],
    queryFn:()=>{
      return publicRoute("/productFilter")
      .then(res=>res.data)
    }
  })

  return (
    <>
      <div className="w-[295px] float-left border border-[#0000001a]  rounded-[20px] px-6 py-5">
          <div className="flex flex-row flex-wrap justify-between items-center after:content-'' after:h-[1px] after:w-full after:table after:bg-[#0000001a] after:mt-6">
            <div>
              <h2 className="capitalize text-black text-xl font-bold font-fontShare leading-normal">
                filter
              </h2>
            </div>
            <div className="h-6 w-6 hover:cursor-pointer hover:bg-gray-300 hover:rounded-full transition-all duration-150 ease-linear hover:h-6 hover:w-6" onClick={()=>{setCollapsibleCon(!collapsibleCon)}}>
              <img
                src={Option}
                alt="option"
                className="h-full w-full object-fill transition-all duration-200 ease-linear hover:scale-[0.7]"
              />
            </div>
          </div>
        
        <div className={`transition-all duration-150 ease-linear origin-top ${collapsibleCon?" max-h-full scale-y-100":"max-h-0 scale-y-0 overflow-hidden"}`}>
        {
          isPending?
          <div className="h-full w-full flex justify-center items-center py-4">
            <Dots/>
          </div>:
          isError?
          <h3 className="text-rose-600 capitalize font-rubik font-semibold">
            something went wrong please try again
          </h3>:
          <>
          <DressFormate info={data[0].dressFormate}/>
          <PriceRange info={data[0].priceRange}/>
          <ColorSelection info={data[0].color}/>
          <SizeSelection info={data[0].size}/>
          <DressStyle info={data[0].dressStyle}/>
          </>
        }
        <div className="mt-6">
          <button className="w-[247px] h-12 rounded-[62px] bg-black flex justify-center items-center font-fontShare text-sm font-medium leading-normal text-white">Apply Filter</button>
        </div>
        </div>
        </div>
    </>
  );
}
