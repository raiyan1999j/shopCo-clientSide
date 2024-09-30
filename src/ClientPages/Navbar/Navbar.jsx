import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Search from "../../../public/search.png";
import Cart from "../../../public/cart.png";
import Profile from "../../../public/profile.png"
import { MdKeyboardArrowDown, MdOutlineAdminPanelSettings } from "react-icons/md";
import DropDown from "./DropDown";
import { useContext, useEffect, useRef, useState } from "react";
import { BiExit } from "react-icons/bi";
import { InfoContext } from "../../InfoProvider/InoProvider";
import Spin from "../../Preloader/Spin";
import { useQuery } from "@tanstack/react-query";
import { publicRoute } from "../../AxiosBase/PublicRoute";
import Loading from "../../Preloader/Loading";

export default function Navbar(){
    const navigate = useNavigate();
    const {user,logoutUser,loading} = useContext(InfoContext);
    const {isPending,isError,data} = useQuery({
        queryKey:["userInfo"],
        queryFn:()=>{
            return publicRoute(`/userInfo?email=${user.email}`)
            .then(result=>result.data.type)
        }
    })
    return(
        <>
        <section className="w-[1240px] mx-auto after:content-'' after:h-[1px] after:w-full after:bg-[#0000001a] after:table after:mt-6">
            <nav className="h-[48px]">
                <div className="grid grid-cols-[160px_321px_577px_62px] gap-x-10 items-center">
                    <div className=" hover:cursor-pointer" onClick={()=>{navigate("/shop")}}>
                        <h1 className=" uppercase text-black font-googleFont font-bold text-[32px]">
                            shop.co
                        </h1> 
                    </div>
                    <div>
                        <ul className="flex flex-row capitalize">
                            <li className="mr-6 relative group before:content-'' before:absolute before:w-full before:h-1 before:rounded-lg before:bg-rose-500 before:bottom-0 before:left-0 before:origin-right before:scale-x-0 before:transition before:duration-300 before:ease-in hover:before:origin-left hover:before:scale-x-100">
                            <NavLink to="/shop" className="flex flex-row items-center">
                            shop <MdKeyboardArrowDown className="ml-1" />
                            </NavLink>
                            <div className="absolute transition-all duration-300 ease-in-out h-0 w-0 opacity-0 group-hover:opacity-100 group-hover:ease-in z-30 group-hover:h-[400px] group-hover:w-[925px]">
                                <DropDown/>
                            </div>
                            </li>
                            <li className={`mr-6 hover:cursor-pointer relative before:content-'' before:absolute before:w-full before:h-1 before:rounded-lg before:bg-rose-500 before:bottom-0 before:left-0 ${location.pathname == "/onSale"?"":" before:origin-right before:scale-x-0 before:transition before:duration-300 before:ease-in hover:before:origin-left hover:before:scale-x-100"}`} onClick={()=>{navigate("/onSale",{state:["on sale"]})}}>
                            on sale
                            </li>
                            <li className={`mr-6 hover:cursor-pointer relative before:content-'' before:absolute before:w-full before:h-1 before:rounded-lg before:bg-rose-500 before:bottom-0 before:left-0 ${location.pathname == "/newArrivals"?"":" before:origin-right before:scale-x-0 before:transition before:duration-300 before:ease-in hover:before:origin-left hover:before:scale-x-100"}`} onClick={()=>{navigate("/newArrivals",{state:["new arrivals"]})}}>
                            new arrivals
                            </li>
                            <a href="#brands">brands</a>
                        </ul>
                    </div>
                    <div>
                        <div className="h-12 w-full bg-[#F0F0F0] rounded-[62px] flex flex-row items-center">
                            <div className="mr-3 ml-4">
                                <div>
                                    <img src={Search} alt="search" />
                                </div>
                            </div>
                            <div className="h-full w-[90%]">
                                <input type="text" className="h-full w-full capitalize font-fontShare text-black font-normal text-base bg-transparent placeholder:capitalize placeholder:font-fontShare placeholder:text-[#00000066] placeholder:font-normal placeholder:text-base" placeholder="search for products" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <span className="mr-[14px] hover:cursor-pointer">
                         <div onClick={()=>{navigate("/cart")}}>
                            <img src={Cart} alt="cart" />
                         </div>
                        </span>
                        <span className="hover:cursor-pointer relative group">
                        <div onClick={()=>{navigate("/createOrLogin")}}>
                            <img src={Profile} alt="profile" />
                        </div>
                        {
                            user?
                            <div className="absolute rounded-lg opacity-0 transition-all duration-300 ease-in group-hover:opacity-100 left-[-20px]">
                            
                            {
                                isPending?
                                <Loading/>:
                                isError?
                                <p className="text-rose-500 font-fontShare font-bold text-sm">Please reload to fetch data</p>:
                                data != "user"?
                                <button className="text-black capitalize font-fontShare font-medium text-sm flex flex-row items-center h-10 px-2 shadow-sm shadow-black rounded-lg hover:shadow-inner hover:shadow-gray-500 mb-3" onClick={()=>{navigate('/dashboard')}}>
                                {data}
                                <MdOutlineAdminPanelSettings />
                            </button>:""
                            }
                            <button className="text-black capitalize font-fontShare font-medium text-sm flex flex-row items-center h-10 px-2 shadow-sm shadow-black rounded-lg hover:shadow-inner hover:shadow-black" onClick={()=>{logoutUser()}}>
                                logout
                                <BiExit />
                            </button>
                        </div>:""
                        }
                        
                        </span>
                    </div>
                </div>
            </nav>
        </section>

        {
            loading?
            <div className="fixed top-0 left-0 h-screen w-full bg-white/50 flex justify-center items-center">
            <Spin/>
        </div>:""
        }
        </>
    )
}