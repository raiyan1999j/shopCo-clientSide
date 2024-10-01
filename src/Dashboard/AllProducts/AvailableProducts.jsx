import ItemBox from "./ItemBox";

export default function AvailableProducts({allInfo}){
    return(
        <>
            <div className="w-[1108px] mx-auto mt-6 mb-[100px]">
            <div className="w-full grid grid-cols-[360px_360px_360px]  gap-x-[14px] gap-y-[14px]">
            {
                allInfo.map((items)=>{
                    const title = Object.keys(items)[1];
                    
                    return items[`${title}`].map((value,index)=>{
                        const keyOfObj = Object.keys(value);
                        const data = value[`${keyOfObj}`];

                        return <ItemBox 
                        data={data} 
                        track={items._id}
                        title={title} 
                        subTitle={keyOfObj} 
                        key={index}/>
                    })
                })
            }
            </div>
            </div>
            
        </>
    )
}