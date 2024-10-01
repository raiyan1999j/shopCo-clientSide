import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { publicRoute } from "../../AxiosBase/PublicRoute";
import { useEffect, useState } from "react";
import Spin from "../../Preloader/Spin";
import Loading from "../../Preloader/Loading";

export default function AddForm(){
    const [uniqueValue,setUnique] = useState();
    const [loadingCondition,setLoadingCondition] = useState(false);
    const productData = useMutation({
        mutationFn:(value)=>{
            return publicRoute.post(`/addNewProduct?title=${value.title}&&subTitle=${value.subTitle}`,value.obj)
            .then((response)=>{
                if(response.status === 200){
                    setLoadingCondition(false)
                }
            })
        }
    })

    const primaryValue={
        productName:"",
        description:"",
        category:"",
        brandName:"",
        sku:`place product name_${uniqueValue}`,
        stock:"",
        regularPrice:"",
        salePrice:"",
        tag:"",
        image:[]
    }
    const finalValue=(value)=>{
        const copy = {...value};
        delete copy.tag;
        delete copy.sku;

        const difference = parseInt(value.regularPrice) - parseInt(value.salePrice);

        const discountRate = (difference/parseInt(value.regularPrice)) * 100;

        const finalDiscount = discountRate.toFixed(2);

        const wrap = {...copy,discount:`${finalDiscount}%`}

        setLoadingCondition(true)
        productData.mutate({title:value.tag,subTitle:value.sku,obj:wrap});
    }

    useEffect(()=>{
        function createCode(){
            const requireLength = 6;
            const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#";
            let finalCode ="";

            for(let repeat=0; repeat<requireLength; repeat++){
                const takeValue = Math.floor(Math.random() * character.length);

                finalCode += character[takeValue]
            }

            setUnique(finalCode)
        }

        createCode();
    },[loadingCondition])
    return(
        <>
            <section className="w-full">
            {
                loadingCondition?<div className=" h-screen w-screen fixed top-[96px] left-[260px]">
                <span className="fixed h-screen w-screen top-1/2 left-1/2 ">
                <Spin size={200}/>
                </span> 
                </div>:""
            }
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
                           Add Products
                        </h4>
                    </div>
                </div>

                <div className="w-[1108px] mx-auto bg-white rounded-2xl">
                <Formik enableReinitialize initialValues={primaryValue} onSubmit={(value, {resetForm})=>{
                finalValue(value)
                resetForm()
                }}>
                {({setFieldValue})=>(
                    <div className="flex flex-row w-full px-6 py-6">
                        <LeftSide/>
                        <RightSide 
                        conditionLoading={loadingCondition} setFieldValue={setFieldValue}/>
                    </div>
                )}
                </Formik>
                </div>
            </section>
        </>
    )
}