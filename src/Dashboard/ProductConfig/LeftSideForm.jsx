import { useField, useFormikContext,Form } from "formik";

export default function LeftSideForm({inputChange}) {
  const [productName,productNameMeta] = useField("productName");
  const [description,descriptionMeta] = useField("description");
  const [category,categoryMeta] = useField("category");
  const [brandName,brandNameMeta] = useField("brandName");
  const [sku,skuMeta] = useField("sku");
  const [stock,stockMeta] = useField("stock");
  const [regularPrice,regularPriceMeta] = useField("regularPrice");
  const [salePrice,salePriceMeta] = useField("salePrice");
  const [tag,tagMeta] = useField("tag");

  return (
    <>
    <Form>
      <div className="w-[556px] mr-[47px]">
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
              {...productName}
              placeholder="Type name here"
              className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal"
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
              id="description"
              {...description}
              placeholder="Type description here"
              className="w-full h-[180px] rounded-lg border border-[#232321] px-4 py-[10px] placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal"
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
              {...category}
              placeholder="Type category here"
              className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal"
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
              {...brandName}
              placeholder="Type brand here"
              className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal"
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
                {...sku}
                placeholder="fox-8549"
                className={`w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal ${inputChange?" hover:cursor-not-allowed opacity-50":"hover:cursor-pointer"}`}
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
                {...stock}
                placeholder="1258"
                className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal"
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
                {...regularPrice}
                placeholder="1000BDT"
                className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal"
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
                {...salePrice}
                placeholder="800BDT"
                className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal"
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
              id="tag"
              {...tag}
              className={`w-full h-[48px] rounded-lg border border-[#232321] py-[10px] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal ${inputChange?"hover:cursor-not-allowed opacity-50":""}`}
              disabled={inputChange?true:false}
            ></textarea>
          </div>
        </div>
      </div>
    </Form>
    </>
  );
}
