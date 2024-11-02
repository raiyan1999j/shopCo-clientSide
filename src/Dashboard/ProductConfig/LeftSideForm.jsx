import { useField, useFormikContext,Form } from "formik";
import { useEffect, useRef, useState } from "react";
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";

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
  const {setFieldValue,values} = useFormikContext();
  const [checkedValue,setCheckValue] = useState([]);
  const [colorCode,setColorCode] = useState([]);
  const colorCodeRef = useRef("");

  const checkBoxValue=(event)=>{
    setCheckValue((items)=>{
      if(!items.includes(event.target.value)){
        return [...items, event.target.value]
      }else{
        return items.filter(presentValue=> presentValue != event.target.value)
      }
    })
  }

  const getColorCode=()=>{
    const codeValue = colorCodeRef.current.value;

    setColorCode((items)=>{
      if(!items.includes(codeValue)){
        return [...items, codeValue]
      }

      return items
    })

    colorCodeRef.current.value = ""
  }

  const removeColor=(value)=>{
    setColorCode((items)=>{
      const array = items.filter(colorValue=> colorValue != value);

      return array;
    })
  }
  useEffect(()=>{
    setFieldValue('checked',checkedValue)
    setFieldValue('color',colorCode)
  },[checkedValue,colorCode]);

  useEffect(()=>{
    if(values.checked){
      setCheckValue(values.checked)
    }

    if(values.color){
      setColorCode(values.color)
    }
  },[values.checked,values.color])
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
            <input
              id="tag"
              {...tag}
              className={`w-full h-[48px] rounded-lg border border-[#232321] py-[10px] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal ${inputChange?"hover:cursor-not-allowed opacity-50":""}`}
              disabled={inputChange?true:false}
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal w-full block">
          size
          </label>

          <div className="flex flex-row gap-x-2 gap-y-2 flex-wrap">
            <label htmlFor="xx-small" className="px-5 py-[10px] rounded-[62px] text-[#00000099] font-fontShare text-sm font-normal leading-normal capitalize bg-[#F0F0F0] transition-all duration-100 ease-in hover:bg-black hover:text-white" style={{backgroundColor:checkedValue.includes("xx-small")?"black":"#F0F0F0",color:checkedValue.includes("xx-small")?"white":"#00000099"}}>
              <input type="checkbox" value="xx-small" name="checked" id="xx-small" className="hidden" onChange={(value)=>{checkBoxValue(value)}}  />
              xx-small
            </label>
            <label htmlFor="x-small" className="px-5 py-[10px] rounded-[62px] text-[#00000099] font-fontShare text-sm font-normal leading-normal capitalize bg-[#F0F0F0] transition-all duration-100 ease-in hover:bg-black hover:text-white" style={{backgroundColor:checkedValue.includes("x-small")?"black":"#F0F0F0",color:checkedValue.includes("x-small")?"white":"#00000099"}}>
              <input type="checkbox" value="x-small" name="checked" id="x-small" className="hidden" onChange={(value)=>{checkBoxValue(value)}} />
              x-small
            </label> 
            <label htmlFor="small" className="px-5 py-[10px] rounded-[62px] text-[#00000099] font-fontShare text-sm font-normal leading-normal capitalize bg-[#F0F0F0] transition-all duration-100 ease-in hover:bg-black hover:text-white" style={{backgroundColor:checkedValue.includes("small")?"black":"#F0F0F0",color:checkedValue.includes("small")?"white":"#00000099"}}>
              <input type="checkbox" value="small" name="checked" id="small" className="hidden" onChange={(value)=>{checkBoxValue(value)}} />
              small
            </label>
            <label htmlFor="medium" className="px-5 py-[10px] rounded-[62px] text-[#00000099] font-fontShare text-sm font-normal leading-normal capitalize bg-[#F0F0F0] transition-all duration-100 ease-in hover:bg-black hover:text-white" style={{backgroundColor:checkedValue.includes("medium")?"black":"#F0F0F0",color:checkedValue.includes("medium")?"white":"#00000099"}}>
              <input type="checkbox" value="medium" name="checked" id="medium" className="hidden" onChange={(value)=>{checkBoxValue(value)}} />
              medium
            </label>
            <label htmlFor="large" className="px-5 py-[10px] rounded-[62px] text-[#00000099] font-fontShare text-sm font-normal leading-normal capitalize bg-[#F0F0F0] transition-all duration-100 ease-in hover:bg-black hover:text-white" style={{backgroundColor:checkedValue.includes("large")?"black":"#F0F0F0",color:checkedValue.includes("large")?"white":"#00000099"}}>
              <input type="checkbox" value="large" name="checked" id="large" className="hidden" onChange={(value)=>{checkBoxValue(value)}} />
              large
            </label>
            <label htmlFor="x-large" className="px-5 py-[10px] rounded-[62px] text-[#00000099] font-fontShare text-sm font-normal leading-normal capitalize bg-[#F0F0F0] transition-all duration-100 ease-in hover:bg-black hover:text-white" style={{backgroundColor:checkedValue.includes("x-large")?"black":"#F0F0F0",color:checkedValue.includes("x-large")?"white":"#00000099"}}>
              <input type="checkbox" value="x-large" name="checked" id="x-large" className="hidden" onChange={(value)=>{checkBoxValue(value)}} />
              x-large
            </label>
            <label htmlFor="xx-large" className="px-5 py-[10px] rounded-[62px] text-[#00000099] font-fontShare text-sm font-normal leading-normal capitalize bg-[#F0F0F0] transition-all duration-100 ease-in hover:bg-black hover:text-white" style={{backgroundColor:checkedValue.includes("xx-large")?"black":"#F0F0F0",color:checkedValue.includes("xx-large")?"white":"#00000099"}}>
              <input type="checkbox" value="xx-large" name="checked" id="xx-large"  className="hidden" onChange={(value)=>{checkBoxValue(value)}} />
              xx-large
            </label>
            <label htmlFor="3x-large" className="px-5 py-[10px] rounded-[62px] text-[#00000099] font-fontShare text-sm font-normal leading-normal capitalize bg-[#F0F0F0] transition-all duration-100 ease-in hover:bg-black hover:text-white" style={{backgroundColor:checkedValue.includes("3x-large")?"black":"#F0F0F0",color:checkedValue.includes("3x-large")?"white":"#00000099"}}>
              <input type="checkbox" value="3x-large" name="checked" id="3x-large" className="hidden" onChange={(value)=>{checkBoxValue(value)}} />
              3x-large
            </label>
            <label htmlFor="4x-large" className="px-5 py-[10px] rounded-[62px] text-[#00000099] font-fontShare text-sm font-normal leading-normal capitalize bg-[#F0F0F0] transition-all duration-100 ease-in hover:bg-black hover:text-white" style={{backgroundColor:checkedValue.includes("4x-large")?"black":"#F0F0F0",color:checkedValue.includes("4x-large")?"white":"#00000099"}}>
              <input type="checkbox" value="4x-large" name="checked" id="4x-large" className="hidden" onChange={(value)=>{checkBoxValue(value)}}  />
              4x-large
            </label>
          </div>
        </div>

        <div className="mt-6">
        <label
            htmlFor="category"
            className="text-[#232321] font-rubik text-xl font-semibold capitalize leading-normal w-full block"
          >
            colors
          </label>
          <div className="w-full mt-4 relative">
            <input
              type="text"
              id="colors"
              ref={colorCodeRef}
              placeholder="Type hex color code"
              className="w-full h-[48px] rounded-lg border border-[#232321] px-4 placeholder:text-[#79767C] placeholder:font-inter placeholder:text-base placeholder:font-normal"
            />
            <button className="absolute h-full capitalize font-rubik font-semibold text-base right-0 px-7 rounded-r-lg bg-[#232321] text-white" type="button" onClick={()=>{getColorCode()}}>
              add color
            </button>
          </div>

          <div className="w-full mt-4">
              <div className="grid grid-cols-7 gap-y-4 justify-between">
                {
                  colorCode?.map((items,index)=>{
                    return <div className="h-[50px] w-[50px] border-[4px] border-[#232321] rounded-full relative"
                     key={index}>
                     <span className="h-full w-full rounded-full absolute" style={{backgroundColor:items}}></span>
                      <span className="absolute -right-3 -top-3 text-rose-900" onClick={()=>{removeColor(items)}}>
                      <ImCross />
                      </span>
                     </div>
                  })
                }
              </div>
          </div>
        </div>
      </div>
    </Form>
    </>
  );
}
