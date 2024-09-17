import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import Search from "../../../public/search.png";
import Cart from "../../../public/cart.png";
import Profile from "../../../public/profile.png"

export default function Navbar(){
    return(
        <>
        <section className="w-[1240px] mx-auto">
            <nav>
                <div className="grid grid-cols-[160px_321px_577px_62px] gap-x-10 items-center">
                    <div>
                        <h1 className=" uppercase text-black font-googleFont font-bold text-[32px]">
                            shop.co
                        </h1>
                    </div>
                    <div>
                        <ul className="flex flex-row capitalize">
                            <li className="mr-6 relative before:content-'' before:absolute before:w-full before:h-1 before:rounded-lg before:bg-rose-500 before:bottom-0 before:left-0 before:origin-right before:scale-x-0 before:transition before:duration-300 before:ease-in hover:before:origin-left hover:before:scale-x-100">
                            <NavLink to="/shop">
                            shop
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
                         <div>
                            <img src={Cart} alt="cart" />
                         </div>
                        </span>
                        <span>
                        <div>
                            <img src={Profile} alt="profile" />
                        </div>
                        </span>
                    </div>
                </div>
            </nav>
        </section>
        </>
    )
}