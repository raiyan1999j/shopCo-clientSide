
export default function LeftSide(){
    return(
        <>
            <div className="w-[556px] mr-[47px]">
                <form>
                    <div>
                        <label htmlFor="productName" className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal">Product name</label>
                        <div className="w-full mt-4">
                            <input type="text" id="productName" placeholder="Type name here" className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal" />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="description" className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal">Description</label>
                        <div className="w-full mt-4">
                            <textarea name="" id="description" placeholder="Type description here" className="w-full h-[180px] rounded-lg border border-[#232321] px-4 py-[10px] placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal"></textarea>
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="category" className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal">Category</label>
                        <div className="w-full mt-4">
                            <input type="text" id="category" placeholder="Type category here" className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal" />
                        </div>
                    </div>

                    <div className="mt-6">
                        <label htmlFor="brandName" className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal">Brand name</label>
                        <div className="w-full mt-4">
                            <input type="text" id="brandName" placeholder="Type brand here" className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal" />
                        </div>
                    </div>

                    <div className="mt-6 flex flex-row">
                        <div className="w-[266px] mr-6">
                            <label htmlFor="sku" className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal">SKU</label>
                            <div className="w-full mt-4">
                                <input type="text" id="sku" placeholder="fox-8549" className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal" />
                            </div>
                        </div>
                        <div className="w-[266px]">
                            <label htmlFor="stockQuantity" className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal">stock quantity</label>
                            <div className="w-full mt-4">
                                <input type="text" id="stockQuantity" placeholder="1258" className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-row w-full">
                        <div className="w-[266px] mr-6">
                            <label htmlFor="regularPrice" className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal">Regular price</label>
                            <div className="w-full mt-4">
                            <input type="text" id="regularPrice" placeholder="1000BDT" className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal" />
                            </div>
                        </div>
                        <div className="w-[266px]">
                            <label htmlFor="salePrice" className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal">sale price</label>
                            <div className="w-full mt-4">
                                <input type="text" id="salePrice" placeholder="800BDT" className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                            <label htmlFor="tag" className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal">tag</label>
                            <div className="w-full mt-4">
                                <textarea name="" id="tag" className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal"></textarea>
                            </div>
                        </div>
                </form>
            </div>
        </>
    )
}