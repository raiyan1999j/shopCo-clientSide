import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Sample1 from "../../../public/sample1.png";
import Sample2 from "../../../public/sample2.png";
import Sample3 from "../../../public/sample3.png";
import Sample4 from "../../../public/sample4.png";
import Minus from "../../../public/minus.png";
import Plus from "../../../public/plus.png";

import { FaStar, FaStarHalf } from "react-icons/fa";

export default function SelectedItems({ pathHistory }) {
  return (
    <>
      <section className="w-[1240px] mx-auto mt-6">
        <div className="w-full mx-auto flex flex-row mb-9">
          <p className="text-[#00000099] capitalize font-fontShare text-base font-normal leading-normal mr-3">
            home
            <span className="ml-1">
              <MdOutlineKeyboardArrowRight className="inline" />
            </span>
          </p>
          {pathHistory.map((value, index) => {
            return (
              <p
                className="text-[#00000099] capitalize font-fontShare text-base font-normal leading-normal mr-3"
                key={index}
              >
                {value}

                {index !== pathHistory.length - 1 ? (
                  <span className="ml-1">
                    <MdOutlineKeyboardArrowRight className="inline" />
                  </span>
                ) : (
                  ""
                )}
              </p>
            );
          })}
        </div>

        <div className="w-full mx-auto">
          <div className="grid grid-cols-[152px_444px_600px] items-center">
            <div className="flex flex-col">
              <div className="w-[152px] h-[167px] rounded-[20px] mb-[14px]">
                <img
                  src={Sample1}
                  alt="sample1"
                  className="h-full w-full object-cover rounded-[20px]"
                />
              </div>
              <div className="w-[152px] h-[167px] rounded-[20px] mb-[14px]">
                <img
                  src={Sample2}
                  alt="sample2"
                  className="h-full w-full object-cover rounded-[20px]"
                />
              </div>
              <div className="w-[152px] h-[167px] rounded-[20px] mb-[14px]">
                <img
                  src={Sample3}
                  alt="sample3"
                  className="h-full w-full object-cover rounded-[20px]"
                />
              </div>
            </div>
            <div className="h-[530px] w-full rounded-[20px] ml-[14px]">
              <img
                src={Sample4}
                alt="sample4"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="ml-10">
              <h2 className="text-black font-googleFont text-[40px] font-bold uppercase">
                One Life Graphic T-shirt
              </h2>
              <div className="flex flex-row items-center">
                <span className="flex flex-row mr-4">
                  <FaStar className="mr-[7.1px] text-[#FFC633]" />
                  <FaStar className="mr-[7.1px] text-[#FFC633]" />
                  <FaStar className="mr-[7.1px] text-[#FFC633]" />
                  <FaStar className="mr-[7.1px] text-[#FFC633]" />
                  <FaStarHalf className="text-[#FFC633]" />
                </span>
                <span className="font-normal text-base font-fontShare">
                  <span className="text-black">4.5/</span>
                  <span className="text-[#00000099]">5</span>
                </span>
              </div>
              <div className="flex flex-row items-center font-fontShare text-[32px] font-bold">
                <span className="text-black mr-3">$260</span>
                <span className="text-[#00000099] mr-3 line-through">$300</span>
                <span className="h-[34px] w-[72px] rounded-[62px] bg-[#ff33331a] flex justify-center items-center text-[#F33] text-base font-medium">
                  -40%
                </span>
              </div>
              <div className="after:content-'' after:w-full after:h-[1px] after:bg-[#0000001a] after:table after:mt-6">
                <p className="text-base text-[#00000099] font-fontShare font-normal leading-[22px]">
                  This graphic t-shirt which is perfect for any occasion.
                  Crafted from a soft and breathable fabric, it offers superior
                  comfort and style.
                </p>
              </div>
              <div className="after:content-'' after:table after:h-[1px] after:w-full after:bg-[#0000001a] after:mt-6 mt-6">
                <h4 className="text-[#00000099] text-base font-normal font-fontShare capitalize mb-4">
                  Select Colors
                </h4>
                <ul className="flex flex-row">
                  <li className="h-[37px] w-[37px] rounded-full bg-[#4F4631] mr-4"></li>
                  <li className="h-[37px] w-[37px] rounded-full bg-[#314F4A] mr-4"></li>
                  <li className="h-[37px] w-[37px] rounded-full bg-[#31344F] mr-4"></li>
                </ul>
              </div>
              <div className="after:content-'' after:table after:h-[1px] after:w-full after:bg-[#0000001a] after:mt-6 mt-6">
                <h4 className="text-[#00000099] text-base font-normal font-fontShare capitalize mb-4">
                  Choose Size
                </h4>
                <div className="flex flex-row">
                  <span className="py-3 px-6 bg-[#F0F0F0] rounded-[62px] capitalize text-[#00000099] text-base font-fontShare font-normal leading-normal mr-3">
                    small
                  </span>
                  <span className="py-3 px-6 bg-[#F0F0F0] rounded-[62px] capitalize text-[#00000099] text-base font-fontShare font-normal leading-normal mr-3">
                    medium
                  </span>
                  <span className="py-3 px-6 bg-[#F0F0F0] rounded-[62px] capitalize text-[#00000099] text-base font-fontShare font-normal leading-normal mr-3">
                    large
                  </span>
                  <span className="py-3 px-6 bg-[#F0F0F0] rounded-[62px] capitalize text-[#00000099] text-base font-fontShare font-normal leading-normal mr-3">
                    x-large
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center mt-6">
                <div className="flex flex-row justify-center items-center bg-[#F0F0F0] rounded-[62px] w-[170px] h-[52px] px-5 mr-5">
                  <span className="h-6 w-6 flex justify-center items-center">
                    <img src={Minus} alt="minus" className="w-full" />
                  </span>
                  <span className="mx-auto">1</span>
                  <span className="h-6 w-6 flex justify-center items-center">
                    <img src={Plus} alt="plus" className="w-full" />
                  </span>
                </div>
                <div>
                  <button className="w-[400px] h-[52px] text-base text-white font-medium font-fontShare leading-normal flex justify-center items-center bg-black rounded-[62px]">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
