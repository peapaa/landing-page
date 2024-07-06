import React from "react";
import travelPoint from "../assets/travel-point.svg";
import setUpIcon from "../assets/setup-icon.svg";
import ticket from "../assets/ticket.svg";

const TravelPoint: React.FC = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center desktop:flex-row">
      <div className="relative w-full desktop:w-3/5">
        <img
          src={travelPoint}
          alt={travelPoint}
          className="w-full object-cover mb-10"
        />
        <button
          className="flex px-6 py-3 justify-center items-center bg-white  absolute top-40 right-10 cursor-auto"
          style={{ borderRadius: 28 }}
        >
          <img src={setUpIcon} alt={setUpIcon} />
          <p className="ml-3 font-bold text-2xl">Discounted Price</p>
        </button>
      </div>
      <div className="desktop:w-2/5 pl-3 desktop:pr-24 laptop:px-10 tablet:px-10 mobile:px-5">
        <div>
          <p className="text-roses font-bold mb-4 flex desktop:block">
            TRAVEL POINT
          </p>
          <p className="font-bold text-4xl mb-6 mobile:text-xl">
            We helping you find your dream location
          </p>
          <p className="font-thin mb-8 text-gray-400">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center relative">
          <button className="cursor-auto border rounded-3xl px-7 py-7 mx-2 my-2">
            <p className="font-bold text-orange text-2xl">500+</p>
            <p className="pt-4">Holiday Package</p>
          </button>
          <button className="cursor-auto border rounded-3xl px-7 py-7 mx-2 my-2">
            <p className="font-bold text-orange text-2xl">500+</p>
            <p className="pt-4">Holiday Package</p>
          </button>
          <button className="cursor-auto border rounded-3xl px-7  py-7 mx-2 my-2">
            <p className="font-bold text-orange text-2xl">500+</p>
            <p className="pt-4">Holiday Package</p>
          </button>
          <button className="cursor-auto border rounded-3xl px-7  py-7 mx-2 my-2">
            <p className="font-bold text-orange text-2xl">500+</p>
            <p className="pt-4">Holiday Package</p>
          </button>
          <div className="absolute hidden -top-8 -right-0 bg-yellow-300 rounded-full desktop:block ">
            <img
              src={ticket}
              alt={ticket}
              className="w-10 h-10 object-cover mx-4 my-4 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPoint;
