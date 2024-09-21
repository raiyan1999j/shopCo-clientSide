import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

export default function Products({ pathHistory,currentPath }) {
  return (
    <>
      <section className="w-[1240px] mx-auto mt-6">
        <div className="w-full mx-auto flex flex-row">
          <p className="text-[#00000099] capitalize font-fontShare text-base font-normal leading-normal mr-3">
            home
            <span className="ml-1">
              <MdOutlineKeyboardArrowRight className="inline" />
            </span>
          </p>
          {pathHistory.map((value, index) => {
            return (
              <p
                className="text-[#00000099] capitalize font-fontShare text-base font-normal leading-normal"
                key={index}
              >
                {value}

                {index !== pathHistory.length - 1 ? (
                  <span className="ml-1">
                    <MdOutlineKeyboardArrowRight className="inline" />
                  </span>
                ) : (
                  ""
                )}
              </p>
            );
          })}
        </div>

        <div className="w-full mx-auto mt-6">
          <div className="w-full before:content-'' before:table after:content-'' after:table after:clear-both">
            <SidebarLeft />
            <SidebarRight />
          </div>
        </div>
      </section>
    </>
  );
}
