import { MdKeyboardArrowRight, MdKeyboardArrowUp } from "react-icons/md";

export default function DressStyle(){
    return(
        <>
            <div className="mt-6">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-black font-fontShare text-xl leading-normal font-bold">Dress Style</h2>
            <span>
              <MdKeyboardArrowUp className="text-black font-medium"/>
            </span>
          </div>
          <div className="mt-5">
            <div className="flex flex-row justify-between items-center mb-5">
              <h2 className="text-[#00000099] text-base font-normal font-fontShare leading-normal">Casual</h2>
              <span>
                <MdKeyboardArrowRight className="text-[#00000099] font-medium" />
              </span>
            </div>
            <div className="flex flex-row justify-between items-center mb-5">
              <h2 className="text-[#00000099] text-base font-normal font-fontShare leading-normal">Formal</h2>
              <span>
                <MdKeyboardArrowRight className="text-[#00000099] font-medium"/>
              </span>
            </div>
            <div className="flex flex-row justify-between items-center mb-5">
              <h2 className="text-[#00000099] text-base font-normal font-fontShare leading-normal">Party</h2>
              <span>
                <MdKeyboardArrowRight className="text-[#00000099] font-medium"/>
              </span>
            </div>
            <div className="flex flex-row justify-between items-center">
              <h2 className="text-[#00000099] text-base font-normal font-fontShare leading-normal">Gym</h2>
              <span>
                <MdKeyboardArrowRight className="text-[#00000099] font-medium"/>
              </span>
            </div>
          </div>
        </div>
        </>
    )
}