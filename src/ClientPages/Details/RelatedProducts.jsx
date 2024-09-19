import { FaStar, FaStarHalf } from "react-icons/fa";
import Related1 from "../../../public/related1.png";
import Related2 from "../../../public/related2.png";
import Related3 from "../../../public/related3.png";
import Related4 from "../../../public/related4.png";

export default function RelatedProducts() {
  return (
    <>
      <section className="w-[1240px] mx-auto mt-16">
        <div className="w-full mx-auto text-center mb-[55px]">
          <h2 className="text-black font-googleFont text-5xl font-bold leading-normal">
            You might also like
          </h2>
        </div>
        <div className="w-full mx-auto">
          <div className="grid grid-cols-4 gap-x-[21px]">
            <div className="w-[296px]">
              <div className="w-full h-[298px] rounded-[20px]">
                <img
                  src={Related1}
                  alt="relatedProducts1"
                  className="h-full w-full object-cover rounded-[20px]"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-black font-fontShare text-xl font-bold leading-normal">
                  Polo with Contrast Trims
                </h2>
                <div className="flex flex-row items-center mt-2">
                  <div className="flex flex-row mr-[7.79px]">
                    <FaStar className="text-[#FFC633] mr-[5.31px]" />
                    <FaStar className="text-[#FFC633] mr-[5.31px]" />
                    <FaStar className="text-[#FFC633] mr-[5.31px]" />
                    <FaStar className="text-[#FFC633] mr-[5.31px]" />
                    <FaStarHalf className="text-[#FFC633] mr-[5.31px]" />
                  </div>
                  <div className=" font-fontShare text-sm font-normal leading-normal">
                    <span className="text-black">4.5/</span>
                    <span className="text-[#00000099]">5</span>
                  </div>
                </div>

                <div className="flex flex-row items-center mt-[8.25px]">
                  <h4 className="text-black text-2xl font-bold font-fontShare leading-normal">
                    $212
                  </h4>
                  <h4 className="text-[#00000066] text-2xl font-bold font-fontShare line-through mx-[10px]">
                    $242
                  </h4>
                  <span className="py-[6px] px-[14px] rounded-[62px] bg-[#ff33331a] text-[#F33] text-xs font-medium font-fontShare leading-normal">
                    -20%
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[296px]">
              <div className="w-full h-[298px] rounded-[20px]">
                <img
                  src={Related2}
                  alt="relatedProducts2"
                  className="h-full w-full object-cover rounded-[20px]"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-black font-fontShare text-xl font-bold leading-normal">
                  Polo with Contrast Trims
                </h2>
                <div className="flex flex-row items-center mt-2">
                  <div className="flex flex-row mr-[7.79px]">
                    <FaStar className="text-[#FFC633] mr-[5.31px]" />
                    <FaStar className="text-[#FFC633] mr-[5.31px]" />
                    <FaStar className="text-[#FFC633] mr-[5.31px]" />
                    <FaStar className="text-[#FFC633] mr-[5.31px]" />
                    <FaStarHalf className="text-[#FFC633] mr-[5.31px]" />
                  </div>
                  <div className=" font-fontShare text-sm font-normal leading-normal">
                    <span className="text-black">4.5/</span>
                    <span className="text-[#00000099]">5</span>
                  </div>
                </div>

                <div className="flex flex-row items-center mt-[8.25px]">
                  <h4 className="text-black text-2xl font-bold font-fontShare leading-normal">
                    $212
                  </h4>
                  <h4 className="text-[#00000066] text-2xl font-bold font-fontShare line-through mx-[10px]">
                    $242
                  </h4>
                  <span className="py-[6px] px-[14px] rounded-[62px] bg-[#ff33331a] text-[#F33] text-xs font-medium font-fontShare leading-normal">
                    -20%
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[296px]">
              <div className="w-full h-[298px] rounded-[20px]">
                <img
                  src={Related3}
                  alt="relatedProducts3"
                  className="h-full w-full object-cover rounded-[20px]"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-black font-fontShare text-xl font-bold leading-normal">
                  Polo with Contrast Trims
                </h2>
                <div className="flex flex-row items-center mt-2">
                  <div className="flex flex-row mr-[7.79px]">
                    <FaStar className="text-[#FFC633] mr-[5.31px]" />
                    <FaStar className="text-[#FFC633] mr-[5.31px]" />
                    <FaStar className="text-[#FFC633] mr-[5.31px]" />
                    <FaStar className="text-[#FFC633] mr-[5.31px]" />
                    <FaStarHalf className="text-[#FFC633] mr-[5.31px]" />
                  </div>
                  <div className=" font-fontShare text-sm font-normal leading-normal">
                    <span className="text-black">4.5/</span>
                    <span className="text-[#00000099]">5</span>
                  </div>
                </div>

                <div className="flex flex-row items-center mt-[8.25px]">
                  <h4 className="text-black text-2xl font-bold font-fontShare leading-normal">
                    $212
                  </h4>
                  <h4 className="text-[#00000066] text-2xl font-bold font-fontShare line-through mx-[10px]">
                    $242
                  </h4>
                  <span className="py-[6px] px-[14px] rounded-[62px] bg-[#ff33331a] text-[#F33] text-xs font-medium font-fontShare leading-normal">
                    -20%
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[296px]">
              <div className="w-full h-[298px] rounded-[20px]">
                <img
                  src={Related4}
                  alt="relatedProducts4"
                  className="h-full w-full object-cover rounded-[20px]"
                />
              </div>
              <div className="mt-4">
                <h2 className="text-black font-fontShare text-xl font-bold leading-normal">
                  Polo with Contrast Trims
                </h2>
                <div className="flex flex-row items-center mt-2">
                  <div className="flex flex-row mr-[7.79px]">
                    <FaStar className="text-[#FFC633] mr-[5.31px]" />
                    <FaStar className="text-[#FFC633] mr-[5.31px]" />
                    <FaStar className="text-[#FFC633] mr-[5.31px]" />
                    <FaStar className="text-[#FFC633] mr-[5.31px]" />
                    <FaStarHalf className="text-[#FFC633] mr-[5.31px]" />
                  </div>
                  <div className=" font-fontShare text-sm font-normal leading-normal">
                    <span className="text-black">4.5/</span>
                    <span className="text-[#00000099]">5</span>
                  </div>
                </div>

                <div className="flex flex-row items-center mt-[8.25px]">
                  <h4 className="text-black text-2xl font-bold font-fontShare leading-normal">
                    $212
                  </h4>
                  <h4 className="text-[#00000066] text-2xl font-bold font-fontShare line-through mx-[10px]">
                    $242
                  </h4>
                  <span className="py-[6px] px-[14px] rounded-[62px] bg-[#ff33331a] text-[#F33] text-xs font-medium font-fontShare leading-normal">
                    -20%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
