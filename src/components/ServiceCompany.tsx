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
  {
    logo: earth,
    title: "Best Tour Guide",
    des: "What looks like a small patch of purple grass above five feet",
  },
];

const ServiceCompany: React.FC = () => {
  return (
    <div className="pl-28  flex  items-center">
      <div className="w-1/3">
        <p className="text-roses text-2xl">Services</p>
        <p className="text-4xl font-bold mt-4">Our top value</p>
        <p className="text-4xl font-bold">categories for you</p>
      </div>
      <div className="flex  overflow-x-scroll">
        {cardServices.map((card) => (
          <div className="w-72 px-16 py-12 mt-4 mb-10 ml-6 flex flex-col flex-none items-center justify-center rounded-xl shadow-shadowNew first:shadow-none">
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
