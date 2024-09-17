import Banner from "./Banner/Banner";
import NewArrival from "./NewArrival/NewArrival";
import Sponser from "./Sponser/Sponser";
import TopSelling from "./TopSelling/TopSelling";

export default function Shop(){
    return(
        <>
            <Banner/>
            <Sponser/>
            <NewArrival/>
            <TopSelling/>
        </>
    )
}