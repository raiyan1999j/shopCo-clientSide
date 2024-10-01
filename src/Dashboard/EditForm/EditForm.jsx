import { Formik } from "formik";
import { useLocation } from "react-router-dom"
import LeftSide from "../AddProducts/LeftSide";
import RightSide from "../AddProducts/RightSide";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function EditForm(){
    const location = useLocation();

    const primaryValue={
        productName:"productName",
        description:"description",
        category:"category",
        brandName:"brandName",
        sku:`place product`,
        stock:"stock",
        regularPrice:"price",
        salePrice:"price",
        tag:"tag",
        image:[]
    }

    const finalValue=(value)=>{
        console.log(value)
    }
    return(
        <>
        <section className="w-full">
            {/* {
                loadingCondition?<div className=" h-screen w-screen fixed top-[96px] left-[260px]">
                <span className="fixed h-screen w-screen top-1/2 left-1/2 ">
                <Spin size={200}/>
                </span> 
                </div>:""
            } */}
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
                <Formik enableReinitialize initialValues={primaryValue} onSubmit={(value, {resetForm})=>{
                finalValue(value)
                resetForm()
                }}>
                {({setFieldValue})=>(
                    <div className="flex flex-row w-full px-6 py-6">
                        <LeftSide/>
                        <RightSide 
                         setFieldValue={setFieldValue}/>
                    </div>
                )}
                </Formik>
                </div>
            </section>
        </>
    )
}