import React from "react";
import bag from "../assets/images/travel-top/bag.svg";
import playIcon from "../assets/images/travel-top/playIcon.svg";
import layer from "../assets/images/travel-top/layer1.jpg";
import tourism1 from "../assets/images/travel-top/season.jpg";
import tourism2 from "../assets/images/travel-top/moutain.jpg";
import tourism4 from "../assets/images/travel-top/city.jpg";
import frame1 from "../assets/images/travel-top/frame1.png";
import user from "../assets/images/travel-top/user-icon.png";
import location from "../assets/images/travel-top/location-icon.png";
import "./styles.css";
const TravelTop: React.FC = () => {
  return (
    <div
      className="desktop:pl-28 desktop:pr-10 desktop:grid desktop:grid-cols-12 flex laptop:flex-col laptop:px-0 
      tablet:px-0 mobile:px-5 items-center justify-center tablet:flex-col mobile:flex-col "
    >
      <div className="flex desktop:col-span-5 desktop:items-start desktop:justify-start tablet,mobile: w-full items-center justify-center flex-col laptop:mt-10 ">
        <span className="flex px-3 py-2  laptop:px-8 laptop:py-3  text-center rounded-3xl bg-white ">
          <p className="ml-2 mr-3 font-medium laptop:text-2xl text-roses desktop:text-xl">
            Explore the world!
          </p>
          <img
            src={bag}
            alt="bag-icon"
            className="pl-1 laptop: w-8 shake-animation"
          />
        </span>
        <div className="font-bold text-6xl my-6 mobile:text-4xl laptop:flex laptop:flex-wrap laptop:px-12 laptop:justify-center">
          <p className="mt-4 ">
            Travel <span className="text-roses laptop:mr-3"> top </span>
          </p>
          <p className="mt-4 text-roses"> destination </p>
          <p className="mt-4 laptop:ml-3"> of the world </p>
        </div>
        <div className="laptop:w-3/5">
          <p className=" text-blur text-center  desktop:text-start">
            We always make our customer happy by providing as many choices as
            possible
          </p>
        </div>
        <div className="flex mt-8 mobile:flex-col">
          <button className="px-6 py-3 mr-7 rounded-3xl bg-btn text-white shadow-custom-blue mobile:mb-6 mobile:w-full">
            Get Started
          </button>
          <button className="flex px-6 py-3 rounded-3xl border-solid border relative mobile:w-full">
            {/* <div className="absolute right-[131px] top-[15px] h-[18px] w-[18px] animate-ping rounded-full border-[4px] border-btn"></div> */}
            <img src={playIcon} alt="Play icon" />
            <p className="ml-3">Watch Demo</p>
          </button>
        </div>
      </div>

      <div
        className="w-full bg-contain overflow-hidden  bg-no-repeat bg-clip-border laptop:col-span-12  my-20 flex desktop:flex-row laptop:flex-row px-10 pt-20 laptop:px-0 items-center justify-center
         mobile:gap-4 mobile:pt-0 mobile:pb-10 mobile:grid mobile:grid-cols-2 mobile:px-6 mobile:mb-0 desktop:col-span-7 laptop:justify-center tablet:px-0"
        style={{
          backgroundImage: `url(${layer})`,
        }}
      >
        <div className="flex flex-col  pr-8 mobile:ml-0 mobile:mr-0 mobile:pr-0 mobile:grid-cols-1 mobile:w-full tablet:ml-0 ">
          <div className="relative">
            <img
              src={tourism1}
              alt="tourism1"
              className="w-56 h-64 object-cover rounded-2xl mb-8 tablet:w-52 tablet:h-56  mobile:h-44"
            />
            <div className="icon-shakes absolute object-cover px-2 py-2 rounded-full bg-roses bottom-1 -left-6">
              <img src={frame1} alt="frame icon" />
            </div>
          </div>
          <img
            src={tourism2}
            alt="tourism2"
            className="w-56 h-64 object-cover rounded-2xl tablet: mb-6 mobile:mb-6 tablet:w-52 tablet:h-56 mobile:h-44 "
          />
        </div>
        <div className="mobile:grid-cols-1">
          <div className="relative ">
            <img
              src={tourism4}
              alt="tourism3"
              className="w-56 h-80  object-cover rounded-2xl mobile:mb-10 tablet:w-52 tablet:h-72 mobile:w-full mobile:h-52"
            />
            <div
              className=" absolute  object-cover px-2 py-2 rounded-full -bottom-24 left-20 mobile:left-12"
              style={{ backgroundColor: "rgb(255, 87, 34)" }}
            >
              <div className="absolute right-[5px] top-[5px] h-[39px] w-[39px] animate-ping rounded-full border-[6px] border-orange "></div>
              <img src={user} alt="user icon" className=" user-icon " />
            </div>
            <div
              className="icon-shakes absolute object-cover px-3 py-2  bottom-10 -right-12 rounded-3xl bg-white text-xs flex items-center
            mobile:-right-4"
            >
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
