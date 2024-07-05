import React from "react";
import location from "../assets/location-bottom-icon.svg";
import coupons from "../assets/coupons.svg";
import schedule from "../assets/schedule.svg";
import home from "../assets/home.svg";
import season from "../assets/season2.svg";
import map from "../assets/map.svg";
import backgroundWavy from "../assets/wavy2.svg";
import service from "../assets/background-service.jpg";

interface Service {
  icon: string;
  title: string;
  des: string;
  backgroundColor: string;
}
const services: Service[] = [
  {
    icon: location,
    title: "We offer best services",
    des: "Lorem Ipsum is not simply a random character",
    backgroundColor: "rgb(255, 87, 34)",
  },
  {
    icon: coupons,
    title: "We offer best services",
    des: "Lorem Ipsum is not simply a random character",
    backgroundColor: "rgb(250, 205, 73)",
  },
  {
    icon: schedule,
    title: "We offer best services",
    des: "Lorem Ipsum is not simply a random character",
    backgroundColor: "rgb(248, 94, 159)",
  },
];
const BestService: React.FC = () => {
  return (
    <div className=" flex py-20 relative">
      <div className="w-2/5 pl-28">
        <p className="text-roses font-semibold mb-6">KEY FEATURES</p>
        <p className="font-bold text-3xl mb-6">We offer best services</p>
        <p className="text-base font-thin mb-16 text-gray-400">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="ml-10">
          {services.map((service) => (
            <div className="even:border px-8 py-4 even:rounded-3xl flex mt-6">
              <img
                src={service.icon}
                alt={service.title}
                className="border w-20 h-20 object-contain px-5 py-5 rounded-3xl "
                style={{
                  backgroundColor: `${service.backgroundColor}`,
                }}
              />
              <div className="flex flex-col  justify-center ml-8">
                <p className="my-5 font-bold text-xl">{service.title}</p>
                <p className="font-thin text-sm text-gray-400">{service.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ml-32 mt-10 relative pr-28">
        <img src={home} alt={home} className="w-96 h-auto object-cover z-20" />
        <img
          src={season}
          alt={season}
          className="absolute w-80 h-auto mx-4 my-4 object-cover  -bottom-24 -right-32 "
          style={{
            borderTopLeftRadius: 200,
            borderTopRightRadius: 200,
            borderBottomLeftRadius: 200,
            borderBottomRightRadius: 200,
            borderWidth: 16,
            borderColor: "white",
          }}
        />
        <button className="cursor-auto flex px-5 py-3 items-center absolute top-24 right-8 bg-white rounded-full z-20">
          <img src={map} alt="map" className="w-8 h-8 object-cover" />
          <p className="font-bold text-xl ml-4">Paradise on Earth</p>
        </button>
        <img
          src={service}
          alt="service"
          className="w-80 absolute -top-10 -right-20 -z-10 "
        />
      </div>
      <div
        className=" bg-no-repeat absolute top-2/3 -z-10"
        style={{
          backgroundImage: `url(${backgroundWavy})`,
          width: "100%",
          height: "1000px",
          backgroundPosition: "top right",
        }}
      ></div>
    </div>
  );
};

export default BestService;
