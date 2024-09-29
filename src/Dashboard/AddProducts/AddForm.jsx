import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { publicRoute } from "../../AxiosBase/PublicRoute";
import { useEffect, useState } from "react";

export default function AddForm(){
    const [uniqueValue,setUnique] = useState();
    const productData = useMutation({
        mutationFn:(value)=>{
            return publicRoute.post(`/addNewProduct?title=${value.title}&&subTitle=${value.subTitle}`,value.obj)
        }
    })

    const primaryValue={
        productName:"",
        description:"",
        category:"",
        brandName:"",
        sku:`place product name-${uniqueValue}`,
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
    },[])
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
                <Formik enableReinitialize initialValues={primaryValue} onSubmit={(value)=>{finalValue(value)}}>
                {({setFieldValue})=>(
                    <div className="flex flex-row w-full px-6 py-6">
                        <LeftSide/>
                        <RightSide setFieldValue={setFieldValue}/>
                    </div>
                )}
                {/* <div className="flex flex-row w-full px-6 py-6">
                        <LeftSide/>
                        <RightSide/>
                    </div> */}
                </Formik>
                </div>
            </section>
        </>
    )
}