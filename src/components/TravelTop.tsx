import React from "react";
import bag from "../assets/bag-icon.png";
import playIcon from "../assets/play-icon.png";
import layer from "../assets/layer1.jpg";
import tourism1 from "../assets/tourism1.png";
import tourism2 from "../assets/tourism2.png";
import tourism4 from "../assets/tourism4.png";
import frame1 from "../assets/frame1.png";
import user from "../assets/user-icon.png";
import location from "../assets/location-icon.png";

const TravelTop: React.FC = () => {
  return (
    <div className="desktop:pl-28 desktop:pr-10 flex desktop:flex-row mobile,tablet,laptop: flex-col laptop:px-28 tablet:px-10 mobile:px-5 mobile,tablet,laptop: items-center">
      <div className="flex desktop:w-6/12 tablet,mobile: w-full, laptop:w-9/12 flex-col mt-24 ">
        <span className="flex px-3 py-2 w-52 text-center rounded-2xl bg-white ">
          <p className="ml-2 mr-3 font-medium text-roses">Explore the world!</p>
          <img src={bag} alt="bag-icon" className="ml-1" />
        </span>
        <div className="font-bold text-6xl my-6 ">
          <p className="mt-4 ">
            Travel <span className="text-roses"> top </span>
          </p>
          <p className="mt-4 text-roses"> destination </p>
          <p className="mt-4"> of the world </p>
        </div>
        <div>
          <p className="font-thin text-gray-400">
            We always make our customer happy by providing as many choices as
            possible
          </p>
        </div>
        <div className="flex mt-8 ">
          <button className="px-6 py-3 mr-7 rounded-3xl bg-btn text-white shadow-custom-blue">
            Get Started
          </button>
          <button className="flex px-6 py-3 rounded-3xl border-solid border">
            <img src={playIcon} alt="Play icon" />
            <p>Watch Demo</p>
          </button>
        </div>
      </div>

      <div
        className="w-full bg-[length:700px_300px] desktop:bg-[length:700px_300px] desktop:overflow-hidden  bg-no-repeat bg-clip-border desktop:ml-20 my-20 flex desktop:flex-row laptop:flex-row px-10 pt-20 items-center tablet: flex-col mobile:flex-col "
        style={{
          backgroundImage: `url(${layer})`,
          objectFit: "cover",
        }}
      >
        <div className="flex flex-col ml-14 pr-8">
          <div className="relative">
            <img
              src={tourism1}
              alt="tourism1"
              className="w-52 h-64 object-cover rounded-2xl mb-8 "
            />
            <div className="absolute object-cover px-2 py-2 rounded-full bg-roses bottom-1 -left-6">
              <img src={frame1} alt="frame icon" />
            </div>
          </div>
          <img
            src={tourism2}
            alt="tourism2"
            className="w-52 h-64 object-cover rounded-2xl tablet: mb-6 mobile:mb-6  "
          />
        </div>
        <div>
          <div className="relative">
            <img
              src={tourism4}
              alt="tourism3"
              className="w-52 h-80 object-cover rounded-2xl tablet:ml-6 mobile:ml-6"
            />
            <div className="absolute object-cover px-2 py-2 rounded-full bg-orange-500 -bottom-24 left-20">
              <img src={user} alt="user icon" />
            </div>
            <div className="absolute object-cover px-3 py-2  bottom-10 -right-12 rounded-3xl bg-white text-xs flex items-center">
              <img src={location} alt="location icon" className="" />
              <span>Top Places</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelTop;
