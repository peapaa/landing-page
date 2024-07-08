import React from "react";
import location from "../assets/location-bottom-icon.svg";
import coupons from "../assets/coupons.svg";
import schedule from "../assets/schedule.svg";
import home from "../assets/home.svg";
import season from "../assets/season2.svg";
import map from "../assets/map.svg";
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
    <div
      className=" flex pt-20 pb-32 relative flex-col desktop:flex-row laptop:px-10 tablet:px-10 mobile:px-5 items-center justify-center
    desktop:items-start desktop:justify-start"
    >
      <div className="desktop:w-2/5 desktop:pl-28">
        <div className="flex flex-col items-center justify-center desktop:block">
          <p className="text-roses font-semibold mb-6">KEY FEATURES</p>
          <p className="font-bold text-3xl mb-6">We offer best services</p>
          <p className="text-base font-thin mb-16 text-gray-400">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <div className="desktop:ml-10 flex flex-col items-center justify-center">
          {services.map((service, index) => (
            <button
              className="tablet:border laptop:border mobile:border  tablet:rounded-3xl mobile:rounded-3xl laptop:rounded-3xl
             desktop:even:border px-8 py-4 desktop:even:rounded-3xl flex items-center mt-6 mobile:px-4 "
              key={index}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="border w-20 h-20 object-contain px-5 py-5 rounded-3xl "
                style={{
                  backgroundColor: `${service.backgroundColor}`,
                }}
              />
              <div className="flex flex-col items-center justify-center ml-8 mobile:ml-2">
                <p className="my-5 font-bold text-xl">{service.title}</p>
                <p className="font-thin text-sm text-gray-400">{service.des}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="desktop:ml-32 mt-10 relative desktop:pr-28">
        <img
          src={home}
          alt={home}
          className="w-96 h-auto object-cover z-20 tablet:w-80 mobile:w-60"
        />
        <img
          src={season}
          alt={season}
          className="absolute w-80 h-auto mx-4 my-4 object-cover  -bottom-24 -right-32 mobile:hidden tablet:w-60"
          style={{
            borderTopLeftRadius: 200,
            borderTopRightRadius: 200,
            borderBottomLeftRadius: 200,
            borderBottomRightRadius: 200,
            borderWidth: 16,
            borderColor: "white",
          }}
        />
        <button className="cursor-auto flex px-5 py-3 items-center absolute top-24 right-8 bg-white rounded-full z-20  laptop:hidden tablet:hidden mobile:hidden  ">
          <img src={map} alt="map" className="w-8 h-8 object-cover" />
          <p className="font-bold text-xl ml-4">Paradise on Earth</p>
        </button>
        <img
          src={service}
          alt="service"
          className="w-80 absolute -top-10 -right-20 -z-10 hidden desktop:block"
        />
      </div>
    </div>
  );
};

export default BestService;
