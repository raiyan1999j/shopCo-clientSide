import Footer from "./ClientPages/Footer/Footer";
import Navbar from "./ClientPages/Navbar/Navbar";
import Close from "../public/close.png";

export default function App(){
  return(
    <>
    <header>
    <section className="bg-black w-full h-[38px] mb-6">
      <div className="w-[1240px] h-full mx-auto flex flex-row items-center justify-center">
      <div className="flex flex-row justify-end items-center w-full">
      <div>
        <h4 className="text-white font-fontShare text-sm font-normal capitalize">
          sign up and get 20% off to your first order.
        </h4>
      </div>
      <div>
        <h4 className="text-white font-fontShare text-sm font-normal capitalize underline">sign up now</h4>
      </div>
      <div className="ml-[425px]">
        <button>
          <img src={Close} alt="close" />
        </button>
      </div>
      </div>
      </div>
    </section>
      <Navbar/>
    </header>

    <main>

    </main>

    <footer>
      <Footer/>
    </footer>
    
    </>
  )
}