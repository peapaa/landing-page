import React from "react";
import email from "../assets/email.png";
import graphic from "../assets/graphic.png";
import obj from "../assets/obj.png";

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
          <p className="mb-6 mt-10 text-roses text-xl font-bold tracking-[3px] tablet:text-lg mobile:text-sm">
            SUBSCRIBE TO OUR NEWSLETTER
          </p>
          <p className="text-5xl mb-4 font-bold laptop:text-3xl tablet:text-2xl mobile:text-xl">
            Prepare yourself & lets explore the
          </p>
          <p className="text-5xl font-bold laptop:text-3xl tablet:text-2xl mobile:text-xl">
            beauty of the world
          </p>
        </div>
        <div className="relative my-12 px-20 flex justify-center items-center tablet:flex-col mobile:flex-col mobile:px-4">
          <img
            src={email}
            alt="email"
            className="absolute  left-24 mobile:hidden tablet:hidden"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="h-14 flex-grow px-16 tablet:mb-8 mobile:mb-8 outline-none rounded-2xl tablet:w-full mobile:w-full "
          />
          <button className="bg-btn py-4 tablet:w-full mobile:w-full desktop:ml-12 laptop:ml-12 rounded-2xl desktop:px-10 laptop:px-10 ">
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
