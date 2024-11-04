import { MdKeyboardArrowUp } from "react-icons/md";

export default function PriceRange(){
    return(
        <>
            <div className="mt-6 after:content-'' after:h-[1px] after:w-full after:table after:bg-[#0000001a] after:mt-6">
          <div className="flex flex-row justify-between items-center">
            <h2 className="capitalize text-xl font-bold font-fontShare leading-normal">
              price
            </h2>
            <span>
              <MdKeyboardArrowUp className="text-black font-medium" />
            </span>
          </div>
          <div className="mt-5"></div>
        </div>
        </>
    )
}