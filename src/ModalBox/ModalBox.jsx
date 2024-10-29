import { useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { IoCheckmarkSharp } from "react-icons/io5";

const selectModal = [
    {
        title:"Success",
        color:"#00CC99",
        icon:<IoCheckmarkSharp />
    },
    {
        title:"Update",
        color:"#5458F7",
        icon:<GrUpdate />
    }
]

export default function ModalBox({modalInfo}){
    const [modalCondition,setModalCondition] = useState(false);
    const [container,setContainer] = useState();

    useEffect(()=>{
        if(modalInfo?.activity == "addItem"){
            setContainer(selectModal[0])
            setModalCondition(true);
        }

        if(modalInfo?.activity == "updateItem"){
            setContainer(selectModal[1])
            setModalCondition(true)
        }
    },[modalInfo])

    useEffect(()=>{
        if(modalCondition){
            setTimeout(()=>{
                setModalCondition(false)
            },modalInfo?.clearTimer - 500)
        }
    },[modalCondition])
    return(
        <> 
        {modalInfo?
            <section className={`w-full fixed top-0 translate-x-[17.5%] ${modalCondition?"animate-FadeIn":"animate-SlideOutRight"}`}>
                <div className="w-[923px] h-[221px] bg-white">
                    <div className={`flex flex-row items-center w-full h-full bg-[${container?.color}]/10 rounded-lg before:content-'' before:table before:w-[10px] before:h-full before:bg-[#00CC99] before:rounded-[10px] before:mr-[63px]`}>
                        <div className="mr-[50px]">
                            <div className="h-[134px] w-[134px] rounded-full bg-[#00CC99] flex justify-center items-center text-white text-5xl">
                            {/* <IoCheckmarkSharp /> */}
                            {container?.icon}
                            </div>
                        </div>
                        <div>
                            <h2 className="capitalize text-[#2F3032] font-medium font-googleFont text-[36px] leading-normal">
                                {container?.title}
                            </h2>
                            <p className="capitalize font-fontShare text-[#2F3032] font-normal leading-normal text-2xl">
                                {modalInfo?.message}
                            </p>
                        </div>
                    </div>
                </div>
            </section>:""
        }
        </>
    )
}