import { useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import Dots from "../../../Preloader/Dots";

export default function NewArrivalProduct({info}){
    const [imageContainer,setImageContainer] = useState();
    const [imageCondition,setImageCondition] = useState(true);
    const {image,productName,regularPrice,salePrice,discount} = info;

    useEffect(()=>{
        const storage = getStorage();
        const container = image[0];

        getDownloadURL(ref(storage,`image/${container}`))
        .then((url)=>{
            setImageContainer(url)
            setImageCondition(false)
        })
    },[])
    return(
        <>
            <div onClick={()=>{navigate("/details",{state:["new arrivals","t-shirts"]})}}>
              <div className="w-full h-[298px] rounded-[20px] flex justify-center items-center">
              {
                imageCondition?
                <Dots/>:
                <img
                  src={imageContainer}
                  alt="new2"
                  className="h-full w-full object-cover rounded-[20px]"
                />
              }
              </div>
              <div className=" mt-4">
                <h4 className="text-black font-fontShare text-[20px] font-bold leading-normal capitalize">
                  {productName}
                </h4>
                <div className="my-2 flex flex-row items-center">
                  <span className="flex flex-row">
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStar className="mr-[5.31px] text-[#FFC633]" />
                    <FaStarHalf className="text-[#FFC633]" />
                  </span>
                  <span className="ml-[13px]">4.5/5</span>
                </div>
                <div className="flex flex-row items-center">
                  <h3 className="font-bold text-2xl font-fontShare text-black">
                    {salePrice?salePrice:""}
                  </h3>
                  <h3 className="text-[#00000066] font-fontShare font-bold text-2xl line-through mx-[10px]">
                    {regularPrice?regularPrice:""}
                  </h3>
                  <span className="w-[58px] h-[28px] bg-[#ff33331a] rounded-[62px] flex justify-center items-center">
                    {discount?discount:""}
                  </span>
                </div>
              </div>
            </div>
        </>
    )
}