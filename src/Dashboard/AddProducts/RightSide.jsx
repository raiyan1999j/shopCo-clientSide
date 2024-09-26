import { HiOutlinePhoto } from "react-icons/hi2";
import { ImCross } from "react-icons/im";

export default function RightSide(){
    return(
        <>
            <div className="w-[457px]">
                <div className="w-[441px] h-[428px] rounded-lg">

                </div>

                <div>
                    <h4 className="text-[#232321] text-xl font-semibold font-rubik leading-normal capitalize mb-4">
                        product gallery
                    </h4>
                    <div className="w-full h-[164px] border border-dashed border-[#232321] p-4 flex flex-col justify-center items-center">
                        <div className="mb-4">
                        <HiOutlinePhoto className="text-[64px] text-[#003F62]"/>
                        </div>
                        <div className="text-base font-semibold font-sans leading-normal text-[#70706E] text-center">
                            <p>
                            Drop your image here, or browse
                            </p>
                            <p className="pt-2">
                            Jpeg, png are allowed
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mx-4">
                    <div className="flex flex-row items-center mt-6">
                        <div className=" h-16 w-16 rounded-lg bg-gray-500">

                        </div>
                        <div className="mx-4 w-[289px]">
                            <h4 className="text-[#232321] text-base font-semibold font-sans leading-normal capitalize mb-4">
                                product image
                            </h4>
                        </div>
                        <div className="h-8 w-8 bg-[#003F62] flex justify-center items-center rounded-full">
                        <ImCross className="text-white" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full mt-10">
                    <div className="w-[220.5px] mr-4">
                        <button className="h-12 w-full border border-[#232321] rounded-lg bg-white text-[#232321] text-sm font-medium font-rubik tracking-tight uppercase leading-normal transition-all duration-150 ease-in hover:text-white hover:bg-[#003F62]">
                            Add
                        </button>
                    </div>

                    <div className="w-[220.5px]">
                        <button className=" h-12 w-full border border-[#232321] rounded-lg text-[#232321] text-sm font-medium font-rubik tracking-tighter uppercase leading-normal transition-all duration-150 ease-in hover:text-white hover:bg-[#003F62]">
                            cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}