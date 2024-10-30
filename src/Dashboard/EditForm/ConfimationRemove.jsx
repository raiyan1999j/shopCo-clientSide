import { useEffect, useState } from "react";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { CiTrash } from "react-icons/ci";
import { FaC, FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

export default function ConfirmationRemove({alertRemove}){
    const [condition,setCondition] = useState(true);
    const [confirmation,setConfirmation] = useState(false);
    const [modalCondition,setModalCondition] = useState(true);

    const closeModal=()=>{
        setModalCondition(false);
    }

    const confirmRemove=()=>{
        setConfirmation(true)

        setTimeout(()=>{
            setModalCondition(false)
        },1000)
    }
    const cancelRemove=()=>{
        setCondition(false);
        
        setTimeout(()=>{
            setModalCondition(false)
        },1000)
    }

    useEffect(()=>{
        if(!modalCondition){
            setTimeout(()=>{
                alertRemove(false)
            },500)
        }
    },[modalCondition])
    return(
        <>
            <section className="h-screen w-full bg-white/70 fixed top-0 flex justify-center items-center transition-all duration-0 ease-in">
                <div className={`w-[545px] py-[36px] px-10 bg-white shadow-sm rounded-lg shadow-black/30 relative translate-x-[-30%] ${modalCondition?"animate-FadeIn":"animate-FadeOutSmall"}`}>
                <div className="absolute h-6 w-6 rounded-full flex justify-center items-center bg-[#E5E5E5] top-[10px] right-[9px]" onClick={()=>{closeModal()}}>
                <RxCross2 className="text-[10px] text-[#4F4F4F]"/>
                </div>
                    <div className="flex flex-row items-center gap-x-6">
                    
                        <div className="h-[56px] w-[56px] bg-[#F5F5F5] flex justify-center items-center">
                        {
                            confirmation?
                            <CiTrash />:
                            condition?
                            <FaCheck/>:
                            <AiOutlineSafetyCertificate/>
                        }
                        </div>
                        <div>
                            <h3 className="text-[#54595E] capitalize font-inter text-xl font-semibold leading-normal">
                                {
                                    confirmation?"remove confirm!":condition?"sure want to remove":"remove cancel"
                                }
                            </h3>
                            <p className="text-[#54595E99] capitalize text-sm font-normal font-inter leading-[22px]">
                                {
                                    confirmation?"your data is going to remove":condition?"be concern! after removing it will not exist":"your docs are safe now"
                                }
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between mt-[26px]">
                        <div className="w-[220.5px]">
                            <button className="py-[14px] border border-[#4F4F4F] rounded-lg w-full text-[#4F4F4F] text-sm font-medium leading-normal font-inter capitalize transition-all ease-linear duration-150 hover:text-[#F5F5F5] hover:bg-[#4F4F4F]" onClick={()=>{cancelRemove()}}>
                                No,Cancel
                            </button>
                        </div>
                        <div className="w-[220.5px]">
                            <button className="py-[14px] border border-[#4F4F4F] rounded-lg w-full text-[#4F4F4F] text-sm font-medium leading-normal font-inter capitalize transition-all ease-linear duration-150 hover:text-[#F5F5F5] hover:bg-[#4F4F4F]" onClick={()=>{confirmRemove()}}>
                                Yes,confirm
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}