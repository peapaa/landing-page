import React from "react";
import travelPoint from "../assets/images/travel-point/travel-point.png";
import setUpIcon from "../assets/images/travel-point/setup-icon.svg";
import ticket from "../assets/images/travel-point/ticket.svg";
import "./styles.css";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface TravelPointType {
  number: string;
  charater: string;
  text: string;
}
const travelPoints: TravelPointType[] = [
  {
    number: "500",
    charater: "+",
    text: "Holiday Package",
  },
  {
    number: "10",
    charater: "",
    text: "Restaurant  Package",
  },
  {
    number: "100",
    charater: "",
    text: "Vila Package",
  },
  {
    number: "20",
    charater: "+",
    text: "Holiday Package",
  },
];
const TravelPoint: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="mt-20 flex flex-col items-center justify-center desktop:flex-row"
    >
      <div className="relative w-full desktop:w-3/5">
        <img
          src={travelPoint}
          alt="travelPoint"
          className="w-full object-cover mb-10 "
        />
        <button
          className=" px-6 py-3 justify-center items-center bg-white  absolute top-40 right-10 cursor-auto hidden desktop:flex"
          style={{ borderRadius: 28 }}
        >
          <img src={setUpIcon} alt="setUpIcon" />
          <p className="ml-3 font-bold text-2xl">Discounted Price</p>
        </button>
      </div>
      <div className="desktop:w-2/5 desktop:pr-24 laptop:px-10 tablet:px-10 mobile:px-5">
        <div className="flex flex-col text-center items-center justify-center desktop:items-start desktop:justify-normal desktop:text-start">
          <p className="text-roses text-2xl font-bold mb-4 flex desktop:block ">
            TRAVEL POINT
          </p>
          <p className="font-bold text-[44px] mb-6 mobile:text-xl tablet:text-2xl">
            We helping you find your dream location
          </p>
          <p className="text-blur mb-8 text-lg ">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 relative mobile:gap-3">
          {travelPoints.length > 0 &&
            travelPoints.map((travel, index) => (
              <button
                className="cursor-auto border rounded-3xl  py-7 mobile:py-5"
                key={index}
              >
                <p className="font-bold text-orange text-3xl mobile:text-2xl">
                  {inView && (
                    <CountUp
                      start={0}
                      duration={2.75}
                      end={parseInt(travel.number)}
                    />
                  )}
                  {travel.charater}
                </p>
                <p className="pt-4 text-base font-inter">{travel.text}</p>
              </button>
            ))}

          <div className="absolute hidden -top-8 -right-6 bg-yellow-300 rounded-full desktop:block ">
            <img
              src={ticket}
              alt="ticket"
              className="w-10 h-10 object-cover mx-4 my-4 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPoint;
