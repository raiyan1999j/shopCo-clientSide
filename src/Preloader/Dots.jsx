
export default function Dots({size}){
    return(
        <>
            <div className="aspect-square rounded-[50%] animate-DotLoader" style={{width:`${size?size:15}px`}}>
            </div>
        </>
    )
}