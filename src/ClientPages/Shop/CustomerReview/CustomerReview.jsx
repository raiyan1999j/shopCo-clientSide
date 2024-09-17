import { FaStar } from "react-icons/fa";
import ArrowLeft from "../../../../public/arrowLeft.png";
import ArrowRight from "../../../../public/arrowRight.png";
import Badge from "../../../../public/badge.png";

export default function CustomerReview(){
    return(
        <>
            <section className="w-[1240px] mt-20 mx-auto">
                <div className="flex flex-row justify-between items-center mb-10 w-full">
                    <div>
                        <h2 className="text-black font-googleFont capitalize text-5xl leading-normal">
                            our happy customers
                        </h2>
                    </div>
                    <div className="flex flex-row">
                        <span className="h-6 w-6 mr-4">
                            <img src={ArrowLeft} alt="arrowLeft" className="h-full w-full object-contain" />
                        </span>
                        <span className="h-6 w-6">
                            <img src={ArrowRight} alt="arrowRight" className="h-full w-full object-contain" />
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-[400px_400px_400px] gap-x-5">
                    <div className="border border-[#0000001a] rounded-[20px] py-7 px-8">   
                        <div className="flex flex-row">
                        <FaStar className="text-[#FFC633] mr-[6.49px] text-xl"/>
                        <FaStar className="text-[#FFC633] mr-[6.49px] text-xl"/>
                        <FaStar className="text-[#FFC633] mr-[6.49px] text-xl"/>
                        <FaStar className="text-[#FFC633] mr-[6.49px] text-xl"/>
                        <FaStar className="text-[#FFC633] text-xl"/>
                        </div>
                        <div>
                        <div className="flex flex-row mt-[15px]">
                        <h4 className="text-black font-fontShare font-bold text-xl capitalize mr-1">sarah m.</h4>
                        <span className="h-6 w-6">
                            <img src={Badge} alt="badge" className="h-full w-full object-cover" />
                        </span>
                        </div>
                            <p className="text-[#00000099] text-base font-fontShare font-normal leading-[22px] mt-3">
                            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                            </p>
                        </div>
                    </div>
                    <div className="border border-[#0000001a] rounded-[20px] py-7 px-8">   
                        <div className="flex flex-row">
                        <FaStar className="text-[#FFC633] mr-[6.49px] text-xl"/>
                        <FaStar className="text-[#FFC633] mr-[6.49px] text-xl"/>
                        <FaStar className="text-[#FFC633] mr-[6.49px] text-xl"/>
                        <FaStar className="text-[#FFC633] mr-[6.49px] text-xl"/>
                        <FaStar className="text-[#FFC633] text-xl"/>
                        </div>
                        <div>
                        <div className="flex flex-row mt-[15px]">
                        <h4 className="text-black font-fontShare font-bold text-xl capitalize mr-1">sarah m.</h4>
                        <span className="h-6 w-6">
                            <img src={Badge} alt="badge" className="h-full w-full object-cover" />
                        </span>
                        </div>
                            <p className="text-[#00000099] text-base font-fontShare font-normal leading-[22px] mt-3">
                            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                            </p>
                        </div>
                    </div>
                    <div className="border border-[#0000001a] rounded-[20px] py-7 px-8">   
                        <div className="flex flex-row">
                        <FaStar className="text-[#FFC633] mr-[6.49px] text-xl"/>
                        <FaStar className="text-[#FFC633] mr-[6.49px] text-xl"/>
                        <FaStar className="text-[#FFC633] mr-[6.49px] text-xl"/>
                        <FaStar className="text-[#FFC633] mr-[6.49px] text-xl"/>
                        <FaStar className="text-[#FFC633] text-xl"/>
                        </div>
                        <div>
                        <div className="flex flex-row mt-[15px]">
                        <h4 className="text-black font-fontShare font-bold text-xl capitalize mr-1">sarah m.</h4>
                        <span className="h-6 w-6">
                            <img src={Badge} alt="badge" className="h-full w-full object-cover" />
                        </span>
                        </div>
                            <p className="text-[#00000099] text-base font-fontShare font-normal leading-[22px] mt-3">
                            "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}