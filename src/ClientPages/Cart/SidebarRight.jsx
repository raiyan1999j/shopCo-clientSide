import Token from "../../../public/token.png";

export default function SidebarRight(){
    return(
        <>
            <div className="w-[505px] float-left border border-[#0000001a] rounded-[20px] py-5 px-6 ml-5">
                <div className="w-full after:table after:content-'' after:h-[1px] after:w-full after:bg-[#0000001a] after:my-5">
                    <h2 className="capitalize font-bold text-2xl font-fontShare leading-normal mb-6">
                        order summery
                    </h2>
                    <div className="flex flex-row justify-between  text-xl font-fontShare leading-normal mb-5">
                        <h2 className="text-[#00000099] font-normal">
                            Subtotal
                        </h2>
                        <h2 className="text-black font-bold">
                            $565
                        </h2>
                    </div>

                    <div className="flex flex-row justify-between  text-xl font-fontShare leading-normal mb-5">
                        <h2 className="text-[#00000099] font-normal capitalize">
                            discount (20%)
                        </h2>
                        <h2 className="text-[#F33] font-bold">
                            -$113
                        </h2>
                    </div>

                    <div className="flex flex-row justify-between  text-xl font-fontShare leading-normal">
                        <h2 className="text-[#00000099] font-normal capitalize">delivery fee</h2>
                        <h2 className="text-black font-bold">$15</h2>
                    </div>
                </div>

                <div className="flex flex-row justify-between font-fontShare leading-normal text-black">
                    <h2 className="font-normal text-xl capitalize">
                        total
                    </h2>
                    <h2 className="font-bold text-2xl">
                        $467
                    </h2>
                </div>

                <div className="flex flex-row mt-6">
                    <div className="w-[326px] h-[48px] rounded-[62px] bg-[#F0F0F0] relative mr-3">
                        <input type="text" className="absolute h-full w-[274px] left-[52px] top-0 bg-transparent placeholder:text-[#00000066] placeholder:font-fontShare placeholder:text-base placeholder:font-normal placeholder:leading-normal" placeholder="Add promo code" />
                        <span className="h-6 w-6 absolute top-3 left-4">
                            <img src={Token} alt="token" className="h-full w-full object-contain" />
                        </span>
                    </div>
                    <div>
                        <button className="h-[48px] w-[119px] flex justify-center items-center bg-black rounded-[62px] capitalize text-white text-base font-medium font-fontShare">
                            apply
                        </button>
                    </div>
                </div>

                <div className="mt-6">
                    <button className="h-[60px] w-[457px] bg-black flex justify-center items-center capitalize text-base font-medium font-fontShare leading-normal text-white rounded-[62px]">
                        go to checkout
                    </button>
                </div>
            </div>
        </>
    )
}