import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Navbar() {
  return (
    <>
      <section className="w-full flex flex-row">
        <Sidebar />
        <Topbar />
      </section>
    </>
  );
}
