import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

export default function Dashboard(){
    return(
        <>
            <header>
                <Navbar/>
            </header>

            <main className="w-[1180px] float-end bg-[#E7E7E3] before:content-'' before:table after:content-'' after:table after:clear-both">
                <Outlet/>
            </main>
            <footer>

            </footer>
        </>
    )
}