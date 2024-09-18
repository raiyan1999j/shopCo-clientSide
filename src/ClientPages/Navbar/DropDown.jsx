import { useNavigate } from "react-router-dom"

export default function DropDown({menuCondition,menuOpen}){
    const navigate = useNavigate();
    return(
        <>
        <section className={`transition-all duration-300 ease-in bg-[#F0EEED] absolute left-[300px] z-30 rounded-xl py-6 ${menuCondition?"h-[400px] w-[925px] opacity-100":"h-0 w-0 opacity-0"}`}>
            <div className="h-[90%] w-[90%] mx-auto grid grid-cols-4 gap-x-5">
                <div>
                    <h2 className="capitalize font-fontShare text-black font-bold text-xl">
                        men
                    </h2>
                    <ul className="mt-6">
                        <li className="capitalize font-fontShare font-medium text-lg text-[#a09a9a] transition-all duration-200 ease-in hover:cursor-pointer hover:text-xl hover:font-bold" onClick={()=>{navigate("/details")
                        menuOpen()
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