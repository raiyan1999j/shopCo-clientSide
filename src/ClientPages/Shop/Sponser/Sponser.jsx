import Sponser1 from "../../../../public/sponser1.png";
import Sponser2 from "../../../../public/sponser2.png";
import Sponser3 from "../../../../public/sponser3.png";
import Sponser4 from "../../../../public/sponser4.png";
import Sponser5 from "../../../../public/sponser5.png";

export default function Sponser(){
    return(
        <>
            <section className="w-full bg-black h-[122px]" id="brands">
                <div className="h-full w-[1240px] mx-auto flex flex-row justify-between items-center">
                    <div className="w-[165px] h-[33px]">
                        <img src={Sponser1} alt="Sponser1" className="h-full w-full object-cover" />
                    </div>
                    <div className="w-[91px] h-[38px]">
                        <img src={Sponser2} alt="Sponser2" className="h-full w-full object-cover" />
                    </div>
                    <div className="w-[156px] h-[36px]">
                        <img src={Sponser3} alt="Sponser3" className="h-full w-full object-cover" />
                    </div>
                    <div className="w-[194px] h-[32px]">
                        <img src={Sponser4} alt="Sponser4" className="h-full w-full object-cover" />
                    </div>
                    <div className="w-[207px] h-[33px]">
                        <img src={Sponser5} alt="Sponser5" className="h-full w-full object-cover" />
                    </div>
                </div>
            </section>
        </>
    )
}