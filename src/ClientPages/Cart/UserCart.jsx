import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

export default function UserCart(){
    return(
        <>
            <section className="w-[1240px] mx-auto mt-6">
            <div className="w-full mx-auto flex flex-row">
                    <p className="text-[#00000099] capitalize font-fontShare text-base font-normal leading-normal mr-3">
                    home 
                    <span className="ml-1">
                    <MdOutlineKeyboardArrowRight className="inline"/>
                    </span>
                    </p>
                    <p className="text-[#00000099] capitalize font-fontShare text-base font-normal leading-normal">
                    cart 
                    </p>
            </div>
            <div className="w-full mx-auto mt-6">
                <h2 className="text-black text-[40px] font-bold font-googleFont leading-normal capitalize">
                    your cart
                </h2>
            </div> 

            <div className="w-full before:content-'' before:table after:content-'' after:table after:clear-both mt-6">
                <SidebarLeft/>
                <SidebarRight/>
            </div>
            </section>
        </>
    )
}