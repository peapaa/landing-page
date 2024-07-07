import React from "react";
import earth from "../assets/logo-earth.png";
import booking from "../assets/easy-booking.png";

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
    <div className="pl-28  flex  items-center mobile:flex-col tablet:flex-col laptop:px-10 tablet:px-10 mobile:px-6 ">
      <div className="desktop:w-1/3 mobile:text-center ">
        <p className="text-roses text-2xl mr-10 ">Services</p>
        <p className="text-4xl font-bold mt-4 tablet:mt-0 mb-6">
          Our top value categories for you
        </p>
      </div>
      <div
        className="flex overflow-x-scroll laptop:overflow-x-auto mobile:flex-col tablet:px-10 
      tablet:flex-col tablet:overflow-y-scroll "
      >
        {cardServices.map((card, index) => (
          <div
            className="w-72 px-16 py-12 mt-4 mb-10 ml-6 flex flex-col flex-none 
          items-center justify-center rounded-xl shadow-shadowNew desktop:first:shadow-none mobile:w-full mobile:px-14 mobile:ml-0  "
            key={index}
          >
            <img src={card.logo} alt={card.title} className="w-11 py-7" />
            <p className="pb-6 text-xl font-bold">{card.title}</p>
            <p className="text-center pb-5 text-gray-400">{card.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCompany;
