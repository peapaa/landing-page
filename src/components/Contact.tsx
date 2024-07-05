import React from "react";
import email from "../assets/email.png";
import graphic from "../assets/graphic.png";
import obj from "../assets/obj.png";

const Contact: React.FC = () => {
  return (
    <div className="relative">
      <img
        src={graphic}
        alt="graphic"
        className="absolute w-36 h-32 -top-10 left-20"
      />
      <div className="mt-20 mx-28 py-12 text-center bg-[#FDF5F9] rounded-3xl">
        <div>
          <p className="mb-6 mt-10 text-roses text-xl font-bold tracking-[3px]">
            SUBSCRIBE TO OUR NEWSLETTER
          </p>
          <p className="text-5xl mb-4 font-bold ">
            Prepare yourself & lets explore the
          </p>
          <p className="text-5xl font-bold ">beauty of the world</p>
        </div>
        <div className="relative my-12 px-20 flex justify-center items-center">
          <img src={email} alt="email" className="absolute left-24" />
          <input
            type="text"
            placeholder="Your Email"
            className="h-14 flex-grow px-16 outline-none rounded-2xl"
          />
          <button className="bg-btn py-4 px-10 rounded-2xl ml-12">
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
