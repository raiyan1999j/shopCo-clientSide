import { MdKeyboardArrowUp } from "react-icons/md";

export default function SizeSelection(){
    return(
        <>
            <div className="mt-6">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-black font-fontShare font-bold text-xl capitalize">
              size
            </h2>
            <span>
              <MdKeyboardArrowUp className="text-black font-medium" />
            </span>
          </div>
          <div className="mt-5 after:content-'' after:h-[1px] after:w-full after:table after:bg-[#0000001a] after:mt-6">
            <div className="flex flex-row flex-wrap gap-x-2 gap-y-2">
                <span className="text-[#00000099] text-sm font-normal font-fontShare py-[10px] px-5 bg-[#F0F0F0] rounded-[62px]">
                XX-Small
                </span>
                <span className="text-[#00000099] text-sm font-normal font-fontShare py-[10px] px-5 bg-[#F0F0F0] rounded-[62px]">
                X-Small
                </span>
                <span className="text-[#00000099] text-sm font-normal font-fontShare py-[10px] px-5 bg-[#F0F0F0] rounded-[62px]">
                Small
                </span>
                <span className="text-[#00000099] text-sm font-normal font-fontShare py-[10px] px-5 bg-[#F0F0F0] rounded-[62px]">
                Medium
                </span>
                <span className="text-[#00000099] text-sm font-normal font-fontShare py-[10px] px-5 bg-[#F0F0F0] rounded-[62px]">
                Large
                </span>
                <span className="text-[#00000099] text-sm font-normal font-fontShare py-[10px] px-5 bg-[#F0F0F0] rounded-[62px]">
                X-Large
                </span>
                <span className="text-[#00000099] text-sm font-normal font-fontShare py-[10px] px-5 bg-[#F0F0F0] rounded-[62px]">
                XX-Large
                </span>
                <span className="text-[#00000099] text-sm font-normal font-fontShare py-[10px] px-5 bg-[#F0F0F0] rounded-[62px]">
                3X-Large
                </span>
                <span className="text-[#00000099] text-sm font-normal font-fontShare py-[10px] px-5 bg-[#F0F0F0] rounded-[62px]">
                4X-Large
                </span>
            </div>
          </div>
        </div>
        </>
    )
}