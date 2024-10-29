import { CiCirclePlus } from "react-icons/ci";
import { LuPlusCircle } from "react-icons/lu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AvailableProducts from "./AvailableProducts";
import { useQuery } from "@tanstack/react-query";
import { publicRoute } from "../../AxiosBase/PublicRoute";
import Spin from "../../Preloader/Spin";
import { useEffect } from "react";

export default function AllProducts(){
    const navigate = useNavigate();

    const {isPending,isError,data} = useQuery({
        queryKey:["allProductsInfo"],
        queryFn:()=>{
            return publicRoute("/allProductsInfo")
            .then(res=>res.data)
        }
    })
    return(
        <>
            <section className="w-full">
                <div className="w-[1108px] mx-auto mt-6">
                    <div className="flex flex-row justify-between items-center w-full">
                        <div>
                            <h2 className="text-[#232321] font-rubik text-2xl font-semibold leading-normal capitalize">
                                all products
                            </h2>
                            <div className="flex flex-row items-center">
                                <h4 className="text-base text-black font-semibold font-sans leading-normal capitalize">
                                    home 
                                </h4>
                                <span className="ml-1">
                                    <MdOutlineKeyboardArrowRight className="text-black"/>
                                </span>
                                <h4 className="text-base text-black font-semibold font-sans leading-normal capitalize">
                                    all products
                                </h4>
                            </div>
                        </div>
                        
                        <div>
                            <button className="flex flex-row items-center bg-[#232321] rounded-lg font-rubik text-sm font-medium leading-normal tracking-tight uppercase text-white px-4 h-[48px]" onClick={()=>{navigate('/dashboard/addProducts')}}>
                                <LuPlusCircle className="text-white mr-2 text-base"/>
                                add new products
                            </button>
                        </div>
                    </div>
                </div>
                
                {
                    isPending?
                    <div className="h-full w-full flex justify-center items-center">
                        <Spin/>
                    </div>:
                    isError?
                    <div className="flex h-full w-full justify-center items-center">
                        <p className="text-rose-500 font-fontShare font-bold text-sm">
                        Please reload to fetch data
                        </p>
                    </div>:
                    <AvailableProducts allInfo={data}/>
                }
                
            </section>
        </>
    )
}