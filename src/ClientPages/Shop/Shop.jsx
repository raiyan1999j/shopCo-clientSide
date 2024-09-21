import { useLocation } from "react-router-dom";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import CustomerReview from "./CustomerReview/CustomerReview";
import NewArrival from "./NewArrival/NewArrival";
import Sponser from "./Sponser/Sponser";
import TopSelling from "./TopSelling/TopSelling";

export default function Shop(){
    const location = useLocation();

    console.log(location)
    return(
        <>
            <Banner/>
            <Sponser/>
            <NewArrival/>
            <TopSelling/>
            <Category/>
            <CustomerReview/>
        </>
    )
}