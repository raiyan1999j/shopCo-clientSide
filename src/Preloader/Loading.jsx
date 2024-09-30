
export default function Loading({size}){
    return(
        <>
            <div className=" flex flex-row gap-x-2">
                <div className="h-5 w-5 rounded-full shadow-md shadow-gray-600 animate-bounce-one"></div>
                <div className="h-5 w-5 rounded-full shadow-md shadow-gray-600 animate-bounce-two"></div>
                <div className="h-5 w-5 rounded-full shadow-md shadow-gray-600 animate-bounce-three"></div>
            </div>
        </>
    )
}