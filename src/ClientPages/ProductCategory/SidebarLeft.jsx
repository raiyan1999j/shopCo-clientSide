import Option from "../../../public/option.png";
import DressStyle from "./DressStyle";
import DressFormate from "./DressFormate";
import PriceRange from "./PriceRange";
import ColorSelection from "./ColorSelection";
import SizeSelection from "./SizeSelection";

export default function SidebarLeft() {
  return (
    <>
      <div className="w-[295px] float-left border border-[#0000001a] rounded-[20px] py-5 px-6">
        <div className="after:content-'' after:h-[1px] after:w-full after:table after:bg-[#0000001a] after:mt-6">
          <div className="flex flex-row justify-between items-center">
            <div>
              <h2 className="capitalize text-black text-xl font-bold font-fontShare leading-normal">
                filter
              </h2>
            </div>
            <div className="h-6 w-6">
              <img
                src={Option}
                alt="option"
                className="h-full w-full object-fill"
              />
            </div>
          </div>
        </div>

        <DressFormate/>
        <PriceRange/>
        <ColorSelection/>
        <SizeSelection/>
        <DressStyle/>

        <div className="mt-6">
          <button className="w-[247px] h-12 rounded-[62px] bg-black flex justify-center items-center font-fontShare text-sm font-medium leading-normal text-white">Apply Filter</button>
        </div>
      </div>
    </>
  );
}
