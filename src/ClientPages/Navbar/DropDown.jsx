import { useNavigate } from "react-router-dom"

export default function DropDown(){
    const navigate = useNavigate();
    return(
        <>
        <section className="bg-[#F0EEED] rounded-xl py-6 h-full w-full">
            <div className="h-[90%] w-[90%] mx-auto grid grid-cols-4 gap-x-5">
                <div>
                    <h2 className="capitalize font-fontShare text-black font-bold text-xl">
                        men
                    </h2>
                    <ul className="mt-6">
                        <li className="capitalize font-fontShare font-medium text-lg text-[#a09a9a] transition-all duration-200 ease-in hover:cursor-pointer hover:text-xl hover:font-bold" onClick={()=>{
                        navigate("/productCategory",{state:["men","t-shirts"]})
                        }}>
                            t-shirts
                        </li>
                    </ul>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
        </>
    )
}