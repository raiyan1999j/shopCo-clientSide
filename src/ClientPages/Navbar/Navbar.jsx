import { NavLink, useNavigate } from "react-router-dom";
import Search from "../../../public/search.png";
import Cart from "../../../public/cart.png";
import Profile from "../../../public/profile.png"
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDown from "./DropDown";
import { useState } from "react";

export default function Navbar(){
    const [menu,setMenu] = useState(false);
    const navigate = useNavigate();
    const openMenu=(value)=>{
        setMenu(!menu)
    }
    return(
        <>
        <section className="w-[1240px] mx-auto after:content-'' after:h-[1px] after:w-full after:bg-[#0000001a] after:table after:mt-6">
            <nav className="h-[48px]">
                <div className="grid grid-cols-[160px_321px_577px_62px] gap-x-10 items-center">
                    <div>
                        <h1 className=" uppercase text-black font-googleFont font-bold text-[32px]">
                            shop.co
                        </h1>
                    </div>
                    <div>
                        <ul className="flex flex-row capitalize">
                            <li className="mr-6 relative before:content-'' before:absolute before:w-full before:h-1 before:rounded-lg before:bg-rose-500 before:bottom-0 before:left-0 before:origin-right before:scale-x-0 before:transition before:duration-300 before:ease-in hover:before:origin-left hover:before:scale-x-100" onClick={openMenu}>
                            <NavLink to="/shop" className="flex flex-row items-center">
                            shop <MdKeyboardArrowDown className="ml-1" />
                            </NavLink>
                            </li>
                            <a className="mr-6" href="#topSelling">
                            on sale
                            </a>
                            <a className="mr-6" href="#newArrivals">
                            new arrivals
                            </a>
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
                        <span className="mr-[14px]">
                         <div onClick={()=>{navigate("/cart")}}>
                            <img src={Cart} alt="cart" />
                         </div>
                        </span>
                        <span>
                        <div onClick={()=>{navigate("/createOrLogin")}}>
                            <img src={Profile} alt="profile" />
                        </div>
                        </span>
                    </div>
                </div>
            </nav>
        </section>
        <DropDown menuCondition={menu} menuOpen={()=>{openMenu()}}/>
        </>
    )
}