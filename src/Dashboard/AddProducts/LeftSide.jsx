import { Form, useField } from "formik";

export default function LeftSide({inputChange}) {
  const [productName] = useField("productName");
  const [description] = useField("description");
  const [category] = useField("category");
  const [brandName] = useField("brandName");
  const [sku] = useField("sku");
  const [stock] = useField("stock");
  const [regularPrice] = useField("regularPrice");
  const [salePrice] = useField("salePrice");
  const [tag] = useField("tag");

  return (
    <>
      <div className="w-[556px] mr-[47px]">
        <Form>
          <div>
            <label
              htmlFor="productName"
              className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal w-full block"
            >
              Product name
            </label>
            <div className="w-full mt-4">
              <input
                type="text"
                id="productName"
                placeholder="Type name here"
                className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal"
                {...productName}
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="description"
              className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal w-full block"
            >
              Description
            </label>
            <div className="w-full mt-4">
              <textarea
                name=""
                id="description"
                placeholder="Type description here"
                className="w-full h-[180px] rounded-lg border border-[#232321] px-4 py-[10px] placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal"
                {...description}
              ></textarea>
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="category"
              className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal w-full block"
            >
              Category
            </label>
            <div className="w-full mt-4">
              <input
                type="text"
                id="category"
                placeholder="Type category here"
                className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal"
                {...category}
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="brandName"
              className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal w-full block"
            >
              Brand name
            </label>
            <div className="w-full mt-4">
              <input
                type="text"
                id="brandName"
                placeholder="Type brand here"
                className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal"
                {...brandName}
              />
            </div>
          </div>

          <div className="mt-6 flex flex-row">
            <div className="w-[266px] mr-6">
              <label
                htmlFor="sku"
                className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal w-full block"
              >
                SKU
              </label>
              <div className="w-full mt-4">
                <input
                  type="text"
                  id="sku"
                  placeholder="fox-8549"
                  className={`w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal ${inputChange?"disabled:opacity-60 hover:cursor-not-allowed":""}`}
                  {...sku}
                  disabled={inputChange?true:false}
                />
              </div>
            </div>
            <div className="w-[266px]">
              <label
                htmlFor="stockQuantity"
                className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal w-full block"
              >
                stock quantity
              </label>
              <div className="w-full mt-4">
                <input
                  type="text"
                  id="stockQuantity"
                  placeholder="1258"
                  className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal"
                  {...stock}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-row w-full">
            <div className="w-[266px] mr-6">
              <label
                htmlFor="regularPrice"
                className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal w-full block"
              >
                Regular price
              </label>
              <div className="w-full mt-4">
                <input
                  type="text"
                  id="regularPrice"
                  placeholder="1000BDT"
                  className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal"
                  {...regularPrice}
                />
              </div>
            </div>
            <div className="w-[266px]">
              <label
                htmlFor="salePrice"
                className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal w-full block"
              >
                sale price
              </label>
              <div className="w-full mt-4">
                <input
                  type="text"
                  id="salePrice"
                  placeholder="800BDT"
                  className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal"
                  {...salePrice}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="tag"
              className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal w-full block"
            >
              tag
            </label>
            <div className="w-full mt-4">
              <textarea
                name=""
                id="tag"
                className={`w-full h-[48px] rounded-lg border border-[#232321] py-[10px] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal ${inputChange?"disabled:opacity-60 hover:cursor-not-allowed":""}`}
                disabled={inputChange?true:false}
                {...tag}
              ></textarea>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
