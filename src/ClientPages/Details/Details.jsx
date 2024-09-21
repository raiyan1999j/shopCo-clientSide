import { useLocation } from "react-router-dom";
import Opinion from "./Opinion";
import RelatedProducts from "./RelatedProducts";
import SelectedItems from "./SelectedItems";

export default function Details(){
    const location = useLocation();
    return(
        <>
            <SelectedItems pathHistory={location.state}/>
            <Opinion/>
            <RelatedProducts/>
        </>
    )
}