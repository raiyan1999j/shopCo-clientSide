import Banner from "./Banner/Banner";
import Category from "./Category/Category";
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
            <Category/>
        </>
    )
}