import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { publicRoute } from "../../../AxiosBase/PublicRoute";
import Dots from "../../../Preloader/Dots";
import NewArrivalProduct from "./NewArrivalProduct";

export default function NewArrival() {
  const navigate = useNavigate();

  const {isPending,isError,data} = useQuery({
    queryKey:["newArrival"],
    queryFn:()=>{
      return publicRoute('/newArrivalsProduct')
      .then(res=>res.data[0].finalResult)
    }
  })
  return (
    <>
      <section className="w-full mx-auto mt-[72px]" id="newArrivals">
        <div className="w-[1240px] mx-auto text-center mb-[55px]">
          <h2 className="capitalize font-bold text-5xl text-black font-googleFont">
            new arrivals
          </h2>
        </div>
        <div className="w-[1240px] mx-auto">
          <div className="w-full grid grid-cols-[296px_296px_296px_296px] gap-x-[20px]">
            {
              isPending?
              <div className="h-[298px] w-full flex justify-center items-center">
                <Dots/>
              </div>:
              isError?
              <div>
                <h4>
                  something went wrong
                </h4>
              </div>:
              data.map((items,index)=>{
                return <NewArrivalProduct info={items} key={index}/>
              })
            }

          </div>
        </div>
        <div className="w-[1240px] mx-auto flex flex-col items-center justify-center mt-[36px] after:content-'' after:w-full after:h-[1px] after:bg-[#0000001a] after:mt-[64px]">
            <button className="text-black font-fontShare text-base font-medium capitalize h-[52px] w-[218px] flex justify-center items-center rounded-[62px] border border-[#0000001a] bg-[#0000001a]" onClick={()=>{
              navigate("/productCategory",{state:["new arrivals"]})
            }}>
                view all
            </button>
        </div>
      </section>
    </>
  );
}
