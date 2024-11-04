import { MdKeyboardArrowUp } from "react-icons/md";

export default function ColorSelection(){
    return(
        <>
            <div className="mt-6 after:content-'' after:h-[1px] after:w-full after:table after:bg-[#0000001a] after:mt-6">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-black text-xl font-fontShare leading-normal font-bold">
              Colors
            </h2>
            <span>
              <MdKeyboardArrowUp className="text-black font-medium" />
            </span>
          </div>
          <div className="mt-5">
            <div className="grid grid-cols-5 gap-y-4 justify-between">
              <div className="h-[37px] w-[37px] rounded-full bg-[#00c12b]"></div>
              <div className="h-[37px] w-[37px] rounded-full bg-[#F50606]"></div>
              <div className="h-[37px] w-[37px] rounded-full bg-[#F5DD06]"></div>
              <div className="h-[37px] w-[37px] rounded-full bg-[#F57906]"></div>
              <div className="h-[37px] w-[37px] rounded-full bg-[#06CAF5]"></div>

              <div className="h-[37px] w-[37px] rounded-full bg-[#063AF5]"></div>
              <div className="h-[37px] w-[37px] rounded-full bg-[#7D06F5]"></div>
              <div className="h-[37px] w-[37px] rounded-full bg-[#F506A4]"></div>
              <div className="h-[37px] w-[37px] rounded-full bg-[#FFF]"></div>
              <div className="h-[37px] w-[37px] rounded-full bg-[#000]"></div>
            </div>
          </div>
        </div>
        </>
    )
}