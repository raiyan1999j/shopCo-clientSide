import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

export default function Dashboard(){
    return(
        <>
            <header>
                <Navbar/>
            </header>

            <main>
                <Outlet/>
            </main>
            <footer>

            </footer>
        </>
    )
}