import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function DressFormate(){
    return(
        <>
            <div className="mt-6 after:content-'' after:h-[1px] after:w-full after:table after:bg-[#0000001a] after:mt-6">
          <div className="flex flex-row justify-between items-center mb-5">
            <h3 className="text-[#00000099] font-fontShare text-base font-normal leading-normal">
              T-shirts
            </h3>
            <span>
              <MdOutlineKeyboardArrowRight className="text-[#00000099] font-medium" />
            </span>
          </div>
          <div className="flex flex-row justify-between items-center mb-5">
            <h3 className="text-[#00000099] font-fontShare text-base font-normal leading-normal">
              Shorts
            </h3>
            <span>
              <MdOutlineKeyboardArrowRight className="text-[#00000099] font-medium" />
            </span>
          </div>
          <div className="flex flex-row justify-between items-center mb-5">
            <h3 className="text-[#00000099] font-fontShare text-base font-normal leading-normal">
              Shirts
            </h3>
            <span>
              <MdOutlineKeyboardArrowRight className="text-[#00000099] font-medium" />
            </span>
          </div>
          <div className="flex flex-row justify-between items-center mb-5">
            <h3 className="text-[#00000099] font-fontShare text-base font-normal leading-normal">
              Hoodie
            </h3>
            <span>
              <MdOutlineKeyboardArrowRight className="text-[#00000099] font-medium" />
            </span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <h3 className="text-[#00000099] font-fontShare text-base font-normal leading-normal">
              Jeans
            </h3>
            <span>
              <MdOutlineKeyboardArrowRight className="text-[#00000099] font-medium" />
            </span>
          </div>
        </div>
        </>
    )
}