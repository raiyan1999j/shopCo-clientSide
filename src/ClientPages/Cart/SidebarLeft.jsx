import Delete from "../../../public/delete.png";
import Product1 from "../../../public/product1.png";
import Minus from "../../../public/minus.png";
import Plus from "../../../public/plus.png";

export default function SidebarLeft(){
    return(
        <>
            <div className="w-[715px] float-left border border-[#0000001a] rounded-[20px] py-5 px-6">
            <div className="w-full after:content-'' after:table after:h-[1px] after:w-full after:bg-[#0000001a] after:my-6">
            <div className="flex flex-row">
                    <div className="h-[124px] w-[124px] mr-4">
                        <img src={Product1} alt="product1" className="h-full w-full object-cover rounded-lg" />
                    </div>

                    <div className="w-[527px]">
                        <div className="w-full flex flex-row justify-between">
                            <h2 className="text-black text-xl font-bold font-fontShare">Gradient Graphic T-shirt</h2>
                            <span className="h-6 w-6">
                                <img src={Delete} alt="delete" className="h-full w-full object-contain" />
                            </span>
                        </div>

                    <div className="flex flex-row text-sm font-normal font-fontShare leading-normal mb-1">
                        <h2 className="text-black mr-1">Size:</h2>
                        <p className="text-[#00000099]">Large</p>
                    </div>

                    <div className="flex flex-row text-sm font-normal font-fontShare leading-normal mb-[15px]">
                        <h2 className="text-black mr-1">Color:</h2>
                        <p className="text-[#00000099]">White</p>
                    </div>

                    <div className="flex flex-row justify-between items-center">
                        <div>
                            <h2 className="text-black font-bold text-2xl font-fontShare leading-normal">$145</h2>
                        </div>
                        <div className="flex flex-row justify-center py-3 px-5 rounded-[62px] bg-[#F0F0F0]">
                            <span className="h-5 w-5 flex justify-center items-center">
                                <img src={Minus} alt="minus" />
                            </span>
                            <span className="mx-5 text-sm font-medium font-fontShare text-black">1</span>
                            <span className="h-5 w-5 flex justify-center items-center">
                                <img src={Plus} alt="plus" />
                            </span>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
            
            <div className="w-full after:content-'' after:table after:h-[1px] after:w-full after:bg-[#0000001a] after:my-6">
            <div className="flex flex-row">
                    <div className="h-[124px] w-[124px] mr-4">
                        <img src={Product1} alt="product1" className="h-full w-full object-cover rounded-lg" />
                    </div>

                    <div className="w-[527px]">
                        <div className="w-full flex flex-row justify-between">
                            <h2 className="text-black text-xl font-bold font-fontShare">Gradient Graphic T-shirt</h2>
                            <span className="h-6 w-6">
                                <img src={Delete} alt="delete" className="h-full w-full object-contain" />
                            </span>
                        </div>

                    <div className="flex flex-row text-sm font-normal font-fontShare leading-normal mb-1">
                        <h2 className="text-black mr-1">Size:</h2>
                        <p className="text-[#00000099]">Large</p>
                    </div>

                    <div className="flex flex-row text-sm font-normal font-fontShare leading-normal mb-[15px]">
                        <h2 className="text-black mr-1">Color:</h2>
                        <p className="text-[#00000099]">White</p>
                    </div>

                    <div className="flex flex-row justify-between items-center">
                        <div>
                            <h2 className="text-black font-bold text-2xl font-fontShare leading-normal">$145</h2>
                        </div>
                        <div className="flex flex-row justify-center py-3 px-5 rounded-[62px] bg-[#F0F0F0]">
                            <span className="h-5 w-5 flex justify-center items-center">
                                <img src={Minus} alt="minus" />
                            </span>
                            <span className="mx-5 text-sm font-medium font-fontShare text-black">1</span>
                            <span className="h-5 w-5 flex justify-center items-center">
                                <img src={Plus} alt="plus" />
                            </span>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>

            <div className="w-full">
            <div className="flex flex-row">
                    <div className="h-[124px] w-[124px] mr-4">
                        <img src={Product1} alt="product1" className="h-full w-full object-cover rounded-lg" />
                    </div>

                    <div className="w-[527px]">
                        <div className="w-full flex flex-row justify-between">
                            <h2 className="text-black text-xl font-bold font-fontShare">Gradient Graphic T-shirt</h2>
                            <span className="h-6 w-6">
                                <img src={Delete} alt="delete" className="h-full w-full object-contain" />
                            </span>
                        </div>

                    <div className="flex flex-row text-sm font-normal font-fontShare leading-normal mb-1">
                        <h2 className="text-black mr-1">Size:</h2>
                        <p className="text-[#00000099]">Large</p>
                    </div>

                    <div className="flex flex-row text-sm font-normal font-fontShare leading-normal mb-[15px]">
                        <h2 className="text-black mr-1">Color:</h2>
                        <p className="text-[#00000099]">White</p>
                    </div>

                    <div className="flex flex-row justify-between items-center">
                        <div>
                            <h2 className="text-black font-bold text-2xl font-fontShare leading-normal">$145</h2>
                        </div>
                        <div className="flex flex-row justify-center py-3 px-5 rounded-[62px] bg-[#F0F0F0]">
                            <span className="h-5 w-5 flex justify-center items-center">
                                <img src={Minus} alt="minus" />
                            </span>
                            <span className="mx-5 text-sm font-medium font-fontShare text-black">1</span>
                            <span className="h-5 w-5 flex justify-center items-center">
                                <img src={Plus} alt="plus" />
                            </span>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
            </div>
        </>
    )
}