import { CiMenuKebab } from "react-icons/ci";
import { FaArrowUpLong, FaBangladeshiTakaSign } from "react-icons/fa6";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Preloader/Loading";

export default function ItemBox({ data }) {
  const {isPending,isError,data:image} = useQuery({
    queryKey:['firebaseImag',data.image[0]],
    queryFn:()=>{
        const storage = getStorage();
        const imageRef= ref(storage,`image/${data.image[0]}`);

        return getDownloadURL(imageRef).then(url=>url)
    }
  })
  return (
    <>
      <div className="w-full bg-white rounded-2xl p-4">
        <div className="flex flex-row justify-start">
          <div className="h-[84px] w-[84px] rounded-lg">
          {
            isPending?
            <div className="w-full h-full flex justify-center items-center">
            <Loading/>
            </div>:
            <img
              src={image}
              className="h-full w-full object-cover rounded-lg"
            />
          }
            
          </div>
          <div className="mx-4 w-[180px]">
            <h2 className="text-[#232321] text-base font-sans font-semibold capitalize leading-normal text-ellipsis whitespace-nowrap overflow-hidden">
              {data.productName}
            </h2>
            <h4 className="font-sans text-black/60 text-sm font-semibold leading-normal">
              {data.category}
            </h4>
            <div className="mt-4 flex flex-row justify-between">
              <span className="text-[#232321] font-rubik text-sm font-semibold line-through flex flex-row">
                {data.regularPrice} 
                <FaBangladeshiTakaSign className="text-sm font-semibold text-[#232321] ml-1"/>
              </span>
              <span className="text-[#232321] font-rubik text-sm font-semibold flex flex-row">{data.salePrice}
              <FaBangladeshiTakaSign className="text-sm font-semibold text-[#232321] ml-1"/>
              </span>
            </div>
          </div>
          <div>
            <button className="h-8 w-[27.2px] bg-[#2323210d] flex justify-center items-center rounded-[4px]">
              <CiMenuKebab className="text-base text-gray-500/50 rotate-[90deg]" />
            </button>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-base font-semibold leading-normal font-sans text-[#232321] capitalize">
            description
          </h2>
          <p className="text-sm font-normal font-sans leading-normal text-[#232321]/60 capitalize mt-4 h-[38px] w-full two-line-clamp overflow-hidden text-ellipsis whitespace-normal">
            {data.description}
          </p>
        </div>

        <div className="w-full border border-[#2323214d] rounded-lg p-4 flex flex-col justify-center items-center text-sm font-semibold font-sans text-[#232321] capitalize leading-normal mt-4">
          <div className="flex flex-row justify-between w-full items-center border border-[#232321] border-t-transparent border-r-transparent border-l-transparent pb-2">
            <div>
              <h4>sales</h4>
            </div>

            <div className="flex flex-row">
              <span className="mr-2">
                <FaArrowUpLong className="text-base text-[#FFA52F] " />
              </span>
              <span>0</span>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full pt-2">
            <div>
              <h4>remaining products</h4>
            </div>
            <div className="flex flex-row items-center">
              <span className="relative h-1 w-[52px] bg-[#E7E7E3] rounded-xl mr-2">
                <span className="absolute top-0 left-0 h-full w-[80%] bg-[#FFA52F] rounded-xl"></span>
              </span>
              <span>{data.stock}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
