import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Navbar() {
  return (
    <>
      <section className="w-full">
        <Sidebar />
        <Topbar />
      </section>
    </>
  );
}
