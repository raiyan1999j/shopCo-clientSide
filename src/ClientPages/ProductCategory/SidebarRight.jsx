import { MdKeyboardArrowDown } from "react-icons/md";
import Product1 from "../../../public/product1.png";
import Product2 from "../../../public/product2.png";
import Product3 from "../../../public/product3.png";
import ArrowLeft from "../../../public/arrowLeft.png";
import ArrowRight from "../../../public/arrowRight.png";

import { FaStar, FaStarHalf } from "react-icons/fa";

export default function SidebarRight(){
    return(
        <>
            <div className="w-[925px] float-left pl-[21px]">
                <div className="w-full flex flex-row items-center mb-4">
                    <div>
                        <h2 className="text-black text-[32px] font-bold font-fontShare">Casual</h2>
                    </div>
                    <div className="flex flex-row ml-auto">
                        <p className="text-[#00000099] text-base font-normal font-fontShare leading-normal">
                        Showing 1-10 of 100 Products
                        </p>
                        <p className="text-[#00000099] text-base font-normal font-fontShare leading-normal ml-3">
                        Sort by:
                        <span className="text-black font-medium ml-1">
                         Most Popular
                        </span> 
                        <MdKeyboardArrowDown className="text-black ml-1 font-medium inline-block"/>
                        </p>
                    </div>
                </div>

                <div className="w-full after:content-'' after:table after:w-full after:h-[1px] after:bg-[#0000001a] after:mt-8">
                <div className="grid grid-cols-[294px_294px_294px] gap-x-5 gap-y-[36px]">
                    <div>
                        <div className="h-[298px] w-full">
                            <img src={Product1} alt="product1" className="h-full w-full object-cover rounded-[20px]" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-black font-bold font-fontShare leading-normal">Gradient Graphic T-shirt</h3>
                            <div className="flex flex-row items-center my-[8.26px]">
                                <div className="flex flex-row gap-x-[5.31px]">
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStarHalf className="text-[#FFC633]"/>
                                </div>
                                <div>
                                    <h2 className="text-sm font-fontShare font-normal text-black">
                                        3.5/
                                        <span className="text-[#00000099]">5</span>
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-2xl font-fontShare text-black leading-normal">$145</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-[298px] w-full">
                            <img src={Product2} alt="product2" className="h-full w-full object-cover rounded-[20px]" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-black font-bold font-fontShare leading-normal">Gradient Graphic T-shirt</h3>
                            <div className="flex flex-row items-center my-[8.26px]">
                                <div className="flex flex-row gap-x-[5.31px]">
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStarHalf className="text-[#FFC633]"/>
                                </div>
                                <div>
                                    <h2 className="text-sm font-fontShare font-normal text-black">
                                        3.5/
                                        <span className="text-[#00000099]">5</span>
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-2xl font-fontShare text-black leading-normal">$145</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-[298px] w-full">
                            <img src={Product3} alt="product3" className="h-full w-full object-cover rounded-[20px]" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-black font-bold font-fontShare leading-normal">Gradient Graphic T-shirt</h3>
                            <div className="flex flex-row items-center my-[8.26px]">
                                <div className="flex flex-row gap-x-[5.31px]">
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStarHalf className="text-[#FFC633]"/>
                                </div>
                                <div>
                                    <h2 className="text-sm font-fontShare font-normal text-black">
                                        3.5/
                                        <span className="text-[#00000099]">5</span>
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-2xl font-fontShare text-black leading-normal">$145</h2>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="h-[298px] w-full">
                            <img src={Product3} alt="product3" className="h-full w-full object-cover rounded-[20px]" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-black font-bold font-fontShare leading-normal">Gradient Graphic T-shirt</h3>
                            <div className="flex flex-row items-center my-[8.26px]">
                                <div className="flex flex-row gap-x-[5.31px]">
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStarHalf className="text-[#FFC633]"/>
                                </div>
                                <div>
                                    <h2 className="text-sm font-fontShare font-normal text-black">
                                        3.5/
                                        <span className="text-[#00000099]">5</span>
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-2xl font-fontShare text-black leading-normal">$145</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-[298px] w-full">
                            <img src={Product1} alt="product1" className="h-full w-full object-cover rounded-[20px]" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-black font-bold font-fontShare leading-normal">Gradient Graphic T-shirt</h3>
                            <div className="flex flex-row items-center my-[8.26px]">
                                <div className="flex flex-row gap-x-[5.31px]">
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStarHalf className="text-[#FFC633]"/>
                                </div>
                                <div>
                                    <h2 className="text-sm font-fontShare font-normal text-black">
                                        3.5/
                                        <span className="text-[#00000099]">5</span>
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-2xl font-fontShare text-black leading-normal">$145</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-[298px] w-full">
                            <img src={Product2} alt="product2" className="h-full w-full object-cover rounded-[20px]" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-black font-bold font-fontShare leading-normal">Gradient Graphic T-shirt</h3>
                            <div className="flex flex-row items-center my-[8.26px]">
                                <div className="flex flex-row gap-x-[5.31px]">
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStarHalf className="text-[#FFC633]"/>
                                </div>
                                <div>
                                    <h2 className="text-sm font-fontShare font-normal text-black">
                                        3.5/
                                        <span className="text-[#00000099]">5</span>
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-2xl font-fontShare text-black leading-normal">$145</h2>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="h-[298px] w-full">
                            <img src={Product2} alt="product2" className="h-full w-full object-cover rounded-[20px]" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-black font-bold font-fontShare leading-normal">Gradient Graphic T-shirt</h3>
                            <div className="flex flex-row items-center my-[8.26px]">
                                <div className="flex flex-row gap-x-[5.31px]">
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStarHalf className="text-[#FFC633]"/>
                                </div>
                                <div>
                                    <h2 className="text-sm font-fontShare font-normal text-black">
                                        3.5/
                                        <span className="text-[#00000099]">5</span>
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-2xl font-fontShare text-black leading-normal">$145</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-[298px] w-full">
                            <img src={Product3} alt="product3" className="h-full w-full object-cover rounded-[20px]" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-black font-bold font-fontShare leading-normal">Gradient Graphic T-shirt</h3>
                            <div className="flex flex-row items-center my-[8.26px]">
                                <div className="flex flex-row gap-x-[5.31px]">
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStarHalf className="text-[#FFC633]"/>
                                </div>
                                <div>
                                    <h2 className="text-sm font-fontShare font-normal text-black">
                                        3.5/
                                        <span className="text-[#00000099]">5</span>
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-2xl font-fontShare text-black leading-normal">$145</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="h-[298px] w-full">
                            <img src={Product1} alt="product1" className="h-full w-full object-cover rounded-[20px]" />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-black font-bold font-fontShare leading-normal">Gradient Graphic T-shirt</h3>
                            <div className="flex flex-row items-center my-[8.26px]">
                                <div className="flex flex-row gap-x-[5.31px]">
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStar className="text-[#FFC633]"/>
                                <FaStarHalf className="text-[#FFC633]"/>
                                </div>
                                <div>
                                    <h2 className="text-sm font-fontShare font-normal text-black">
                                        3.5/
                                        <span className="text-[#00000099]">5</span>
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-2xl font-fontShare text-black leading-normal">$145</h2>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="w-full flex flex-row justify-center items-center mt-5">
                    <button className="flex flex-row w-[110px] h-9 justify-center items-center text-black text-sm font-medium font-fontShare leading-[20px] rounded-lg border border-#0000001a">
                        <span className="h-5 w-5 flex justify-center items-center mr-2">
                            <img src={ArrowLeft} alt="arrowLeft"/>
                        </span>
                        Previous
                    </button>
                    <div className="mx-[216px] w-[292px] flex flex-row">
                        <span className="h-10 w-10 flex justify-center items-center text-sm font-medium font-fontShare leading-[20px] text-black bg-[#0000000f]">1</span>
                        <span className="h-10 w-10 flex justify-center items-center text-sm font-medium font-fontShare leading-[20px] text-black">2</span>
                        <span className="h-10 w-10 flex justify-center items-center text-sm font-medium font-fontShare leading-[20px] text-black">3</span>
                        <span className="h-10 w-10 flex justify-center items-center text-sm font-medium font-fontShare leading-[20px] text-black">...</span>
                        <span className="h-10 w-10 flex justify-center items-center text-sm font-medium font-fontShare leading-[20px] text-black">8</span>
                        <span className="h-10 w-10 flex justify-center items-center text-sm font-medium font-fontShare leading-[20px] text-black">9</span>
                        <span className="h-10 w-10 flex justify-center items-center text-sm font-medium font-fontShare leading-[20px] text-black">10</span>
                    </div>
                    <button className="flex flex-row w-[110px] h-9 justify-center items-center text-black text-sm font-medium font-fontShare leading-[20px] rounded-lg border border-[#0000001a]">
                        Next
                        <span className="h-5 w-5 flex justify-center items-center ml-2">
                            <img src={ArrowRight} alt="arrowRight" />
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}