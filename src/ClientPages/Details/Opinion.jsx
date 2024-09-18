import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Option from "../../../public/option.png";
import Badge from "../../../public/badge.png";
import ReviewMenu from "../../../public/reviewMenu.png";
import { FaStar, FaStarHalf } from "react-icons/fa";
export default function Opinion() {
  return (
    <>
      <section className="w-[1240px] mx-auto mt-20">
        <div className="w-full after:content-'' after:table after:bg-[#0000001a] after:h-[1px] after:w-full after:mt-6">
          <div className="grid grid-cols-3">
            <div className="text-center">
              <h2 className="text-[#00000099] font-fontShare font-normal text-xl leading-[22px]">Product Details</h2>
            </div>
            <div className="text-center w-full after:content-'' after:table after:h-[2px] after:w-full after:bg-black after:translate-y-6">
              <h2 className="text-black text-xl font-fontShare font-medium leading-[22px]">Rating & Reviews</h2>
            </div>
            <div className="text-center">
              <h2 className="text-[#00000099] font-fontShare text-xl font-normal leading-[22px]">FAQs</h2>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-row justify-between items-center mt-6">
            <div className="flex flex-row items-center">
                <h2 className="text-black font-fontShare text-2xl font-bold leading-normal mr-2">
                All Reviews
                </h2>
                <span className="text-[#00000099] text-base font-normal font-fontShare leading-[22px]">
                    (45)
                </span>
            </div>
            <div className="flex flex-row">
              <div className=" h-12 w-12 flex justify-center items-center rounded-full bg-[#F0F0F0]">
                <img src={Option} alt="option" />
              </div>
              <div className="bg-[#F0F0F0] w-[120px] h-[48px] rounded-[62px] flex flex-row justify-between items-center px-5 mx-[10px]">
                <span className="capitalize text-black font-medium font-fontShare leading-normal">
                  latest
                </span>
                <span>
                <MdOutlineKeyboardArrowDown />
                </span>
              </div>
              <div>
                <button className="w-[166px] h-12 rounded-[62px] bg-black text-white text-base font-medium font-fontShare flex flex-row justify-center items-center">
                Write a Review
                </button>
              </div>
            </div>
        </div>

        <div className="w-full mx-auto mt-8">
          <div className="grid grid-cols-[610px_610px] gap-y-[20.42px] gap-x-5">
            <div className="border border-[#0000001a] rounded-[20px] py-7 px-8">
              <div className="flex flex-row justify-between mb-[15px]">
              <div className="flex flex-row">
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStarHalf className="text-[#FFC633] mr-[6.49px]"/>
              </div>
              <div>
                <button>
                  <img src={ReviewMenu} alt="reviewMenu" />
                </button>
              </div>
              </div>

              <div className="flex flex-row mb-3">
                <h2 className="text-black text-xl font-bold font-fontShare leading-[22px]">Samantha D.</h2>
                <span className="h-6 w-6 ml-1">
                  <img src={Badge} alt="badge" className="h-full w-full object-cover" />
                </span>
              </div>

              <div className="mb-6">
                <p className="text-[#00000099] text-base font-normal font-fontShare leading-[22px]">
                "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                </p>
              </div>

              <div>
                <p className="text-[#00000099] text-base font-medium leading-[22px] font-fontShare">
                Posted on August 14, 2023
                </p>
              </div>
            </div>
            <div className="border border-[#0000001a] rounded-[20px] py-7 px-8">
              <div className="flex flex-row justify-between mb-[15px]">
              <div className="flex flex-row">
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStarHalf className="text-[#FFC633] mr-[6.49px]"/>
              </div>
              <div>
                <button>
                  <img src={ReviewMenu} alt="reviewMenu" />
                </button>
              </div>
              </div>

              <div className="flex flex-row mb-3">
                <h2 className="text-black text-xl font-bold font-fontShare leading-[22px]">Samantha D.</h2>
                <span className="h-6 w-6 ml-1">
                  <img src={Badge} alt="badge" className="h-full w-full object-cover" />
                </span>
              </div>

              <div className="mb-6">
                <p className="text-[#00000099] text-base font-normal font-fontShare leading-[22px]">
                "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                </p>
              </div>

              <div>
                <p className="text-[#00000099] text-base font-medium leading-[22px] font-fontShare">
                Posted on August 14, 2023
                </p>
              </div>
            </div>

            <div className="border border-[#0000001a] rounded-[20px] py-7 px-8">
              <div className="flex flex-row justify-between mb-[15px]">
              <div className="flex flex-row">
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStarHalf className="text-[#FFC633] mr-[6.49px]"/>
              </div>
              <div>
                <button>
                  <img src={ReviewMenu} alt="reviewMenu" />
                </button>
              </div>
              </div>

              <div className="flex flex-row mb-3">
                <h2 className="text-black text-xl font-bold font-fontShare leading-[22px]">Samantha D.</h2>
                <span className="h-6 w-6 ml-1">
                  <img src={Badge} alt="badge" className="h-full w-full object-cover" />
                </span>
              </div>

              <div className="mb-6">
                <p className="text-[#00000099] text-base font-normal font-fontShare leading-[22px]">
                "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                </p>
              </div>

              <div>
                <p className="text-[#00000099] text-base font-medium leading-[22px] font-fontShare">
                Posted on August 14, 2023
                </p>
              </div>
            </div>
            <div className="border border-[#0000001a] rounded-[20px] py-7 px-8">
              <div className="flex flex-row justify-between mb-[15px]">
              <div className="flex flex-row">
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStarHalf className="text-[#FFC633] mr-[6.49px]"/>
              </div>
              <div>
                <button>
                  <img src={ReviewMenu} alt="reviewMenu" />
                </button>
              </div>
              </div>

              <div className="flex flex-row mb-3">
                <h2 className="text-black text-xl font-bold font-fontShare leading-[22px]">Samantha D.</h2>
                <span className="h-6 w-6 ml-1">
                  <img src={Badge} alt="badge" className="h-full w-full object-cover" />
                </span>
              </div>

              <div className="mb-6">
                <p className="text-[#00000099] text-base font-normal font-fontShare leading-[22px]">
                "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                </p>
              </div>

              <div>
                <p className="text-[#00000099] text-base font-medium leading-[22px] font-fontShare">
                Posted on August 14, 2023
                </p>
              </div>
            </div>

            <div className="border border-[#0000001a] rounded-[20px] py-7 px-8">
              <div className="flex flex-row justify-between mb-[15px]">
              <div className="flex flex-row">
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStarHalf className="text-[#FFC633] mr-[6.49px]"/>
              </div>
              <div>
                <button>
                  <img src={ReviewMenu} alt="reviewMenu" />
                </button>
              </div>
              </div>

              <div className="flex flex-row mb-3">
                <h2 className="text-black text-xl font-bold font-fontShare leading-[22px]">Samantha D.</h2>
                <span className="h-6 w-6 ml-1">
                  <img src={Badge} alt="badge" className="h-full w-full object-cover" />
                </span>
              </div>

              <div className="mb-6">
                <p className="text-[#00000099] text-base font-normal font-fontShare leading-[22px]">
                "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                </p>
              </div>

              <div>
                <p className="text-[#00000099] text-base font-medium leading-[22px] font-fontShare">
                Posted on August 14, 2023
                </p>
              </div>
            </div>
            <div className="border border-[#0000001a] rounded-[20px] py-7 px-8">
              <div className="flex flex-row justify-between mb-[15px]">
              <div className="flex flex-row">
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStar className="text-[#FFC633] mr-[6.49px]"/>
              <FaStarHalf className="text-[#FFC633] mr-[6.49px]"/>
              </div>
              <div>
                <button>
                  <img src={ReviewMenu} alt="reviewMenu" />
                </button>
              </div>
              </div>

              <div className="flex flex-row mb-3">
                <h2 className="text-black text-xl font-bold font-fontShare leading-[22px]">Samantha D.</h2>
                <span className="h-6 w-6 ml-1">
                  <img src={Badge} alt="badge" className="h-full w-full object-cover" />
                </span>
              </div>

              <div className="mb-6">
                <p className="text-[#00000099] text-base font-normal font-fontShare leading-[22px]">
                "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                </p>
              </div>

              <div>
                <p className="text-[#00000099] text-base font-medium leading-[22px] font-fontShare">
                Posted on August 14, 2023
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto mt-[36.42px] flex justify-center">
          <button className="w-[230px] h-[52px] rounded-[62px] border border-[#0000001a] bg-white flex justify-center items-center text-black text-base font-medium font-fontShare leading-normal">
          Load More Reviews
          </button>
        </div>
      </section>
    </>
  );
}
