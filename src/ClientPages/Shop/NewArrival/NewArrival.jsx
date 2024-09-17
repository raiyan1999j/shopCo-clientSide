import { FaStar, FaStarHalf } from "react-icons/fa";
import New1 from "../../../../public/new1.png";
import New2 from "../../../../public/new2.png";
import New3 from "../../../../public/new3.png";
import New4 from "../../../../public/new4.png"

export default function NewArrival() {
  return (
    <>
      <section className="w-full mx-auto mt-[72px]" id="newArrivals">
        <div className="w-[1240px] mx-auto text-center mb-[55px]">
          <h2 className="capitalize font-bold text-5xl text-black font-googleFont">
            new arrivals
          </h2>
        </div>
        <div className="w-[1240px] mx-auto">
          <div className="w-full grid grid-cols-[296px_296px_296px_296px] gap-x-[20px]">
            <div>
              <div className="w-full h-[298px] rounded-[20px]">
                <img
                  src={New1}
                  alt="new1"
                  className="h-full w-full object-cover rounded-[20px]"
                />
              </div>
              <div className=" mt-4">
                <h4 className="text-black font-fontShare text-[20px] font-bold leading-normal capitalize">
                  t-shirt with tape details
                </h4>
                <div className="my-2 flex flex-row items-center">
                  <span className="flex flex-row">
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStarHalf className="text-[#FFC633]" />
                  </span>
                  <span className="ml-[13px]">4.5/5</span>
                </div>
                <div>
                  <h3 className="font-bold text-2xl font-fontShare text-black">
                    $120
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full h-[298px] rounded-[20px]">
                <img
                  src={New2}
                  alt="new2"
                  className="h-full w-full object-cover rounded-[20px]"
                />
              </div>
              <div className=" mt-4">
                <h4 className="text-black font-fontShare text-[20px] font-bold leading-normal capitalize">
                  skinny fit jeans
                </h4>
                <div className="my-2 flex flex-row items-center">
                  <span className="flex flex-row">
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStarHalf className="text-[#FFC633]" />
                  </span>
                  <span className="ml-[13px]">4.5/5</span>
                </div>
                <div className="flex flex-row items-center">
                  <h3 className="font-bold text-2xl font-fontShare text-black">
                    $120
                  </h3>
                  <h3 className="text-[#00000066] font-fontShare font-bold text-2xl line-through mx-[10px]">
                    $260
                  </h3>
                  <span className="w-[58px] h-[28px] bg-[#ff33331a] rounded-[62px] flex justify-center items-center">
                    -20%
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full h-[298px] rounded-[20px]">
                <img
                  src={New3}
                  alt="new3"
                  className="h-full w-full object-cover rounded-[20px]"
                />
              </div>
              <div className=" mt-4">
                <h4 className="text-black font-fontShare text-[20px] font-bold leading-normal capitalize">
                CHECKERED SHIRT
                </h4>
                <div className="my-2 flex flex-row items-center">
                  <span className="flex flex-row">
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStarHalf className="text-[#FFC633]" />
                  </span>
                  <span className="ml-[13px]">4.5/5</span>
                </div>
                <div>
                  <h3 className="font-bold text-2xl font-fontShare text-black">
                    $120
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full h-[298px] rounded-[20px]">
                <img
                  src={New4}
                  alt="new4"
                  className="h-full w-full object-cover rounded-[20px]"
                />
              </div>
              <div className=" mt-4">
                <h4 className="text-black font-fontShare text-[20px] font-bold leading-normal capitalize">
                SLEEVE STRIPED T-SHIRT
                </h4>
                <div className="my-2 flex flex-row items-center">
                  <span className="flex flex-row">
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStarHalf className="text-[#FFC633]" />
                  </span>
                  <span className="ml-[13px]">4.5/5</span>
                </div>
                <div>
                  <h3 className="font-bold text-2xl font-fontShare text-black">
                    $120
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1240px] mx-auto flex flex-col items-center justify-center mt-[36px] after:content-'' after:w-full after:h-[1px] after:bg-[#0000001a] after:mt-[64px]">
            <button className="text-black font-fontShare text-base font-medium capitalize h-[52px] w-[218px] flex justify-center items-center rounded-[62px] border border-[#0000001a] bg-[#0000001a]">
                view all
            </button>
        </div>
      </section>
    </>
  );
}
