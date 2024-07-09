import React from "react";
import graphic from "../assets/images/concact/graphic.png";
import obj from "../assets/images/concact/obj.png";
import { MdEmail } from "react-icons/md";

const Contact: React.FC = () => {
  return (
    <div className="relative  desktop:px-28 laptop:px-10 tablet:px-10 mobile:px-5">
      <img
        src={graphic}
        alt="graphic"
        className="absolute w-36 h-32 -top-10 left-20 mobile:hidden tablet:hidden laptop:w-24 laptop:h-20 
        laptop:-top-6 laptop:left-6"
      />
      <div className="mt-20 py-6 text-center bg-[#FDF5F9] rounded-3xl ">
        <div>
          <p className="mb-6 mt-10 text-roses text-xl font-bold tracking-[3px] tablet:text-lg mobile:text-base">
            SUBSCRIBE TO OUR NEWSLETTER
          </p>
          <p className="text-5xl mb-4 font-bold laptop:text-4xl tablet:text-3xl mobile:text-2xl px-20 mobile:px-4 tablet:px-8">
            Prepare yourself & lets explore the beauty of the world
          </p>
        </div>
        <div className="relative my-12 px-20 flex justify-center items-center tablet:flex-col mobile:flex-col mobile:px-4 tablet:px-8">
          <div className="flex relative w-full ">
            <MdEmail className="absolute text-[40px] text-gray-400 left-4 top-1/4 desktop:top-7 tablet:top-5 mobile:top-5 mobile:text-[28px]" />
            <input
              type="text"
              placeholder="Your Email"
              className="h-20 text-2xl flex-grow px-16 tablet:mb-8 mobile:mb-8 outline-none rounded-2xl tablet:w-full mobile:w-full
              desktop:h-24 mobile:h-16 mobile:text-xl"
            />
          </div>
          <button
            className="bg-btn  py-8 text-3xl text-white tablet:w-full mobile:w-full desktop:ml-12 laptop:ml-12 rounded-[36px] desktop:px-10 laptop:px-10
          laptop:py-6 tablet:py-5 mobile:py-4 mobile:text-xl  "
          >
            Subcribe
          </button>
        </div>
      </div>
      <img
        src={obj}
        alt="obj"
        className="absolute h-[260px] -bottom-28 right-0"
      />
    </div>
  );
};

export default Contact;
