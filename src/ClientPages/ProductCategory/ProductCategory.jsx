import { useLocation } from "react-router-dom";
import Products from "./Products";

export default function ProductCategory(){
    const location = useLocation();

    return(
        <>
            <Products pathHistory={location.state}/>
        </>
    )
}