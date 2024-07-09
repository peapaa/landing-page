import React from "react";
import earth from "../assets/images/service-logo/logo-earth.png";
import booking from "../assets/images/service-logo/easy-booking.png";
import "./styles.css";

interface cardServices {
  logo: string;
  title: string;
  des: string;
}
const cardServices: cardServices[] = [
  {
    logo: earth,
    title: "Best Tour Guide",
    des: "What looks like a small patch of purple grass above five feet",
  },
  {
    logo: booking,
    title: "Easy Booking",
    des: "Square, was moving across the sand in their direction",
  },
  {
    logo: earth,
    title: "Best Tour Guide",
    des: "What looks like a small patch of purple grass above five feet",
  },
  // {
  //   logo: earth,
  //   title: "Best Tour Guide",
  //   des: "What looks like a small patch of purple grass above five feet",
  // },
];

const ServiceCompany: React.FC = () => {
  return (
    <div className="pl-28  flex  items-center mobile:flex-col tablet:flex-col laptop:px-10 tablet:px-10 mobile:px-6 laptop:flex-col">
      <div className="desktop:w-1/3 w-full tablet:text-center laptop:text-center mobile:text-center ">
        <p className="text-roses text-2xl mobile:text-3xl ">Services</p>
        <p className="text-4xl font-bold mt-4 tablet:mt-0 mb-6">
          Our top value categories for you
        </p>
      </div>
      <div
        className="flex overflow-x-scroll  mobile:flex-col tablet:px-10  laptop:flex-wrap laptop:items-center laptop:justify-center
      tablet:flex-col tablet:overflow-y-scroll mobile:justify-center mobile:items-center mobile:m-0"
      >
        {cardServices.map((card, index) => (
          <div
            className="w-72 px-16 py-12 m-6 flex flex-col flex-none mobile:px-3 mobile:py-8 tablet:px-10 tablet:py-8
          items-center justify-center rounded-xl shadow-shadowNew desktop:first:shadow-none mobile:w-[86%]  "
            key={index}
          >
            <img
              src={card.logo}
              alt={card.title}
              className="w-11 py-7 tablet:w-24 mobile:w-20"
            />
            <p className="pb-6 text-xl font-bold tablet:text-2xl mobile:text-2xl">
              {card.title}
            </p>
            <p className="text-center pb-5 text-blur tablet:text-xl mobile:text-xl">
              {card.des}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCompany;
