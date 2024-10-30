import { Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useMutation, useQuery } from "@tanstack/react-query";
import { publicRoute } from "../../AxiosBase/PublicRoute";
import Spin from "../../Preloader/Spin";
import { useEffect, useState } from "react";
import LeftSideForm from "../ProductConfig/LeftSideForm";
import RightSideForm from "../ProductConfig/RightSideForm";
import ModalBox from "../../ModalBox/ModalBox";
import ConfirmationRemove from "./ConfimationRemove";

export default function EditForm(){
    const {state} = useLocation();
    const navigate = useNavigate();
    const [modalCall,setModalCall] = useState();
    const [removeAlert,setRemoveAlert] = useState(false);

    const {isPending,isError,data} = useQuery({
        queryKey:['specificProduct'],
        queryFn:()=>{
            return publicRoute(`/specificProduct?trackId=${state?.track}&&title=${state?.title}&&sku=${state.sku}`)
            .then(res=>res.data[0])
        }
    })
    
    const updateValue = useMutation({
        mutationFn:(value)=>{
            return publicRoute.put(`/updateProductsInfo?title=${value.title}&&sku=${value.sku}&&trackId=${state.track}`,value.obj).then((res)=>{
                if(res.status == 200){
                    setModalCall({activity:"updateItem",message:"Your product has updated",clearTimer:2000})

                    setTimeout(()=>{
                        setModalCall();
                        navigate("/dashboard/allProducts")
                    },2000)
                }
            })
        }
    })

    const removeDocs= useMutation({
        mutationFn:(value)=>{
            return publicRoute.put(`/removeProductsInfo?title=${value.title}&&trackId=${value.trackId}&&sku=${value.sku}`).then((res)=>{
                if(res.status == 200){
                    setModalCall({activity:"removeItem",message:"your product has removed",clearTimer:2500});

                    setTimeout(()=>{
                        setModalCall()
                        navigate("/dashboard/allProducts")
                    },2500)
                }
            }) 
        }
    })

    const finalValue=(value)=>{
        const copy ={...value};
        delete copy.tag;

        updateValue.mutate({title:value.tag,sku:value.sku,obj:copy})
    }

    const removeItems=(value)=>{
        const wrap = {
            trackId : state.track,
            title: state.title,
            sku: state.sku
        }

        if(value == "click"){
            removeDocs.mutate(wrap)
        }
    }
    const primaryValue={
        productName:data?.productName,
        description:data?.description,
        category:data?.category,
        brandName:data?.brandName,
        sku:data?.sku,
        stock:data?.stock,
        regularPrice:data?.regularPrice,
        salePrice:data?.salePrice,
        tag:state.title,
        image:data?.image
    }
    return(
        <>
        <section className="w-full">
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

                        <h4  className="font-sans text-black text-base font-semibold leading-normal capitalize">
                           Product Details
                        </h4>
                    </div>
                </div>

                <div className="w-[1108px] mx-auto bg-white rounded-2xl">
                {
                    isPending?
                    <div className="flex justify-center items-center h-screen w-full">
                        <Spin/>
                    </div>:
                    isError?
                    <div>
                        <p>
                            something went wrong
                        </p>
                    </div>:
                    <Formik enableReinitialize initialValues={primaryValue} onSubmit={(value)=>{
                finalValue(value)
                }}>
                    <div className="flex flex-row w-full px-6 py-6">
                        <LeftSideForm inputChange={true}/>
                        <RightSideForm 
                         inputChange={true}
                         alertRemove={(value)=>{setRemoveAlert(value)}}
                         />
                    </div>
                </Formik>
                }
                </div>
            </section>
            <ModalBox modalInfo={modalCall}/>
            {
                removeAlert?
                <ConfirmationRemove 
                alertRemove={(value)=>{setRemoveAlert(value)}}
                itemsRemove={(value)=>{removeItems(value)}}
                />:""
            }
        </>
    )
}