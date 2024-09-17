
export default function Category(){
    return(
        <>
            <section className="w-[1240px] mx-auto bg-[#F0F0F0] rounded-[40px] mt-[60px]">
                <div className="w-full text-center pt-[70px] pb-[64px]">
                    <h2 className="text-black font-googleFont text-5xl font-bold uppercase leading-normal">
                        browse by dress style
                    </h2>
                </div>
                <div className="grid grid-cols-[407px_684px] gap-x-5 mx-[64px]">
                    <div className="w-full h-[289px] rounded-[20px] bg-casual bg-no-repeat bg-contain">
                        <div className="pt-[25px] pl-[36px]">
                            <h2 className="text-black font-fontShare capitalize font-bold text-[36px]">
                                casual
                            </h2>
                        </div>
                    </div>
                    <div className="w-full h-[289px] rounded-[20px] bg-formal bg-no-repeat bg-contain">
                        <div className="pt-[25px] pl-[36px]">
                            <h2 className="text-black font-fontShare capitalize font-bold text-[36px]">
                                formal
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-[684px_407px] gap-x-5 mx-[64px] mt-5 pb-[76px]">
                    <div className="w-full h-[289px] bg-party bg-no-repeat bg-cover rounded-[20px] mr-5">
                        <div className="pt-[25px] pl-[36px]">
                            <h2 className="text-black font-fontShare capitalize font-bold text-[36px]">
                                party
                            </h2>
                        </div>
                    </div>
                    <div className="w-full h-[298px] bg-gym bg-no-repeat bg-cover rounded-[20px]">
                        <div className="pt-[25px] pl-[36px]">
                            <h2 className="text-black font-fontShare capitalize font-bold text-[36px]">
                                gym
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}