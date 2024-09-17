import MessageIcon from "../../../../public/messageIcon.png";

export default function FirstPart() {
  return (
    <>
      <section className="w-[1240px] mx-auto bg-black rounded-[20px] mt-[80.42px] translate-y-[95px]">
        <div className="flex flex-row px-[64px] py-9">
          <div className="w-[551px] mr-[212px]">
            <h2 className="text-white font-googleFont text-[40px] font-bold leading-[45px]">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h2>
          </div>
          <div className="w-[349px]">
            <div className="w-full h-12 relative">
              <input
                type="text"
                className="w-full h-full rounded-[62px] bg-white absolute top-0 left-0 placeholder:text-[#00000066] placeholder:pl-[52px]"
                placeholder="Enter your email address"
              />
              <span className="h-6 w-6 absolute top-[14px] left-4">
                <img
                  src={MessageIcon}
                  alt="message"
                  className="h-full w-full object-cover"
                />
              </span>
            </div>
            <div className="mt-[14px]">
              <button className="bg-white h-[46px] w-[349px] rounded-[62px] flex justify-center items-center text-black font-fontShare text-base font-medium leading-normal">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
