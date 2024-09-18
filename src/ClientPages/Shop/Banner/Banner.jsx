
export default function Banner(){
    return(
        <>
            <section className=" w-full mx-auto bg-bannerImg bg-no-repeat pt-[103px] pb-[116px]">
                <div className="w-[1240px] relative mx-auto after:content-'' after:absolute after:bg-vectorBig after:right-0 after:h-[104px] after:w-[104px] after:top-0 before:absolute before:h-[56px] before:w-[56px] before:top-[146px] before:bg-vectorSmall before:left-[651px]">
                    <div className="w-[577px]">
                        <h2 className="text-black font-googleFont font-bold text-[64px] leading-[64px] uppercase">
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                        </h2>
                    </div>
                    <div className="w-[545px] my-8">
                        <p className="text-[#00000099] font-fontShare text-base font-normal leading-[22px]">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                        </p>
                    </div>
                    <div className="mb-12">
                        <button className="h-[52px] w-[210px] flex justify-center items-center bg-black rounded-[62px] capitalize text-white">
                            shop now
                        </button>
                    </div>
                    <div className="w-[596px] flex flex-row justify-between">
                        <div>
                            <h2 className=" text-[40px] font-bold font-fontShare text-black">
                                200+
                            </h2>
                            <p className="font-fontShare text-base text-[#00000099] font-normal leading-[22px] capitalize">
                                international brand
                            </p>
                        </div>
                        <span className=" w-[1px] bg-[#0000001a] mx-8"></span>
                        <div>
                            <h2 className=" text-[40px] font-bold font-fontShare text-black">
                                2,000+
                            </h2>
                            <p className="font-fontShare text-base text-[#00000099] font-normal leading-[22px] capitalize">
                                hight-quality products
                            </p>
                        </div>
                        <span className="w-[1px] bg-[#0000001a] mx-8"></span>
                        <div>
                            <h2 className=" text-[40px] font-bold font-fontShare text-black">
                                30,000+
                            </h2>
                            <p className="font-fontShare text-base text-[#00000099] font-normal leading-[22px] capitalize">
                                happy customers
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}