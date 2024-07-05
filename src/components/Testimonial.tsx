import React from "react";
import arrowLeft from "../assets/pre-left.svg";
import arrowRight from "../assets/pre-right.svg";
import userIcon from "../assets/user-icon2.png";
import star from "../assets/star2.png";
import cricle from "../assets/cricle.svg";
import cricleRose from "../assets/cricleRose.png";

const Testimonial: React.FC = () => {
  return (
    <div className="flex px-28 pt-6 w-full items-center justify-around">
      <button className="border rounded-full px-5 py-5">
        <img src={arrowLeft} alt="arrowLeft" className="w-6 " />
      </button>

      <div className="text-center ">
        <p className="text-roses font-bold text-xl tracking-[.25em] mb-4">
          TESTIMANIAL
        </p>
        <p className="font-bold text-4xl">Trust our clients</p>
        <div className="flex justify-center">
          <img src={userIcon} alt="userIcon" className="mt-14 mb-12" />
        </div>
        <p className="font-semibold text-gray-600 ">
          <span className="text-orange text-xl">Mark Smith</span> / Travel
          Enthusiast
        </p>
        <div className="flex items-center justify-center my-6">
          <img src={star} alt="star" className="w-7 h-7 object-cover mx-1" />
          <img src={star} alt="star" className="w-7 h-7 object-cover mx-1" />
          <img src={star} alt="star" className="w-7 h-7 object-cover mx-1" />
          <img src={star} alt="star" className="w-7 h-7 object-cover mx-1" />
          <img src={star} alt="star" className="w-7 h-7 object-cover mx-1" />
        </div>

        <p className="text-base  mb-3 text-gray-500">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots
        </p>
        <p className="text-base  mb-10 text-gray-500">
          in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="flex items-center justify-center">
          <img
            src={cricle}
            alt="cricle"
            className="w-5 h-5 object-cover mx-2"
          />
          <img
            src={cricleRose}
            alt="cricle"
            className="w-5 h-5 object-cover mx-2 "
          />
          <img
            src={cricle}
            alt="cricle"
            className="w-5 h-5 object-cover mx-2"
          />
        </div>
      </div>
      <button className="border rounded-full px-5 py-5 bg-btn shadow-shadowIcon">
        <img src={arrowRight} alt="arrowRight" className=" w-6" />
      </button>
    </div>
  );
};

export default Testimonial;
