import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function AddForm(){
    return(
        <>
            <section className="w-ful">
                <div className="w-[1108px] mx-auto my-6">
                    <h2 className="text-black text-2xl font-semibold font-rubik leading-normal capitalize">
                        Product Details
                    </h2>
                    <div className="flex flex-row items-center mt-1">
                        <h4 className="font-sans text-black text-base font-semibold leading-normal capitalize">
                            home
                        </h4>
                        <span className="mr-1 translate-y-[3px]">
                        <MdOutlineKeyboardArrowRight className="text-black text-base"/>
                        </span>

                        <h4 className="font-sans text-black text-base font-semibold leading-normal capitalize">
                            all products
                        </h4>
                        <span className="mr-1 translate-y-[3px]">
                        <MdOutlineKeyboardArrowRight className="text-black text-base"/>
                        </span>

                        <h4>
                            Product details
                        </h4>
                    </div>
                </div>

                <div className="w-[1108px] mx-auto bg-white rounded-2xl">
                    <div className="flex flex-row w-full px-6 py-6">
                        <LeftSide/>
                        <RightSide/>
                    </div>
                </div>
            </section>
        </>
    )
}