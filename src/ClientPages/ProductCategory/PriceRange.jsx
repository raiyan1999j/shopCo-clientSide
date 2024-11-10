import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

export default function PriceRange({info}){
  const firstValue = useRef(0);
  const secondValue= useRef(0);
  const [collect,setCollect] = useState({first:0,second:secondValue.current.value})
  const [amount,setAmount] = useState({first:0,second:0});
  const [collapsibleCon,setCollapsibleCon] = useState(false);

  const rangeValue=()=>{
    let first = firstValue.current.value;
    let second= secondValue.current.value;
    const maximum = info[1].maxPrice;
    const firstAmount = Math.ceil((maximum/100) * Number(first));
    const secondAmount= Math.ceil((maximum/100) * Number(second));

    setAmount({first:firstAmount,second:secondAmount})
    setCollect({first,second})
  }

  useEffect(()=>{
    const maximum = info[1].maxPrice;
    const minimum = info[0].minPrice;
    const defaultPercentage =Math.ceil((100/maximum) * minimum);
    const defaultAmount = Math.ceil((maximum/100) * defaultPercentage);

    secondValue.current.value = defaultPercentage;
    firstValue.current.value = 0;

    setAmount({...amount,second:defaultAmount})
  },[])
    return(
        <>
            <div className="mt-6 after:content-'' after:h-[1px] after:w-full after:table after:bg-[#0000001a] after:mt-6">
          <div className="flex flex-row justify-between items-center">
            <h2 className="capitalize text-xl font-bold font-fontShare leading-normal">
              price
            </h2>
            <span className={`transition-all duration-150 ease-in hover:cursor-pointer hover:bg-gray-900 hover:rounded-full group ${collapsibleCon?"rotate-0":"rotate-[180deg]"}`} onClick={()=>{setCollapsibleCon(!collapsibleCon)}}>
              <MdKeyboardArrowUp className="text-black font-medium group-hover:text-white" />
            </span>
          </div>
          <div className={`mt-5 transition-all duration-300 ease-linear ${collapsibleCon?"max-h-[100vh] scale-y-100":"max-h-0 scale-y-0 overflow-hidden"} origin-top`}>
          <div>
            <div className="w-[247px] h-5 relative mx-auto">
              <div className="h-1/4 w-full rounded-xl absolute -z-10" style=
              {{background:`linear-gradient(to right,#bdc3c7 
              ${collect.first>collect.second?collect.second:collect.first}% ,
              black ${collect.first>collect.second?collect.second:collect.first}%,
              black ${collect.second<collect.first?collect.first:collect.second}%, 
              #bdc3c7 ${collect.second<collect.first?collect.second:collect.first}%)`}}></div>
                
                <input type="range" className="w-full priceRange supportRange" min={0} max={100} step={1} ref={firstValue} onChange={()=>{rangeValue()}}/>

                <input type="range" className="w-full priceRange support " min={0} max={100} step={1} ref={secondValue} onChange={()=>{rangeValue()}}/>
            </div>
          </div>
          <div className="w-[247px] h-5 mx-auto relative mt-1">
            <span className="absolute leading-normal text-black font-fontShare text-sm font-medium flex flex-row items-center" 
            style={{left:`${collect.first}%`}}>
            <TbCurrencyTaka />
              {amount.first}
            </span>
            <span className="absolute leading-normal text-black font-fontShare text-sm font-medium flex flex-row items-center" 
            style={{left:`${collect.second - 5}%`}}>
            <TbCurrencyTaka />
              {amount.second}
            </span>
          </div>
          </div>
        </div>
        </>
    )
}