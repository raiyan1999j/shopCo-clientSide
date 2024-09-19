import {
  MdKeyboardArrowRight,
  MdKeyboardArrowUp,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Option from "../../../public/option.png";

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

        <div className="mt-6">
          <button className="w-[247px] h-12 rounded-[62px] bg-black flex justify-center items-center font-fontShare text-sm font-medium leading-normal text-white">Apply Filter</button>
        </div>
      </div>
    </>
  );
}
