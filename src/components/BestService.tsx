import React from "react";
import location from "../assets/images/best-service/location-bottom-icon.svg";
import coupons from "../assets/images/best-service/coupons.svg";
import schedule from "../assets/images/best-service/calender.png";
import home from "../assets/images/best-service/home.jpg";
import season from "../assets/images/best-service/season1.jpg";
import map from "../assets/images/best-service/map.svg";
import service from "../assets/images/best-service/schedule.jpg";
import "./styles.css";

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
    icon: schedule,
    title: "We offer best services",
    des: "Lorem Ipsum is not simply a random character",
    backgroundColor: "rgb(248, 94, 159)",
  },
  {
    icon: coupons,
    title: "We offer best services",
    des: "Lorem Ipsum is not simply a random character",
    backgroundColor: "rgb(250, 205, 73)",
  },
];
const BestService: React.FC = () => {
  return (
    <div
      className=" flex pt-20 pb-24 relative flex-col desktop:flex-row laptop:px-10 tablet:px-10 mobile:px-5 items-center justify-center
    desktop:items-start desktop:justify-start mobile:pb-10"
    >
      <div className="desktop:w-[46%] desktop:pl-28">
        <div className="flex flex-col items-center justify-center desktop:block">
          <p className="text-roses font-semibold mb-6 text-2xl">KEY FEATURES</p>
          <p className="font-bold text-[44px] mb-6 tablet:text-4xl mobile:text-3xl">
            We offer best services
          </p>
          <p className="text-base text-blur mb-16 mobile:mb-6">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center desktop:items-start">
          {services.map((service, index) => (
            <button
              className="border rounded-3xl
              px-8 py-4  flex items-center mt-6 mobile:px-4 "
              key={index}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="border w-20 h-20 object-contain px-5 py-5 rounded-3xl mobile:w-18 mobile:h-18"
                style={{
                  backgroundColor: `${service.backgroundColor}`,
                }}
              />
              <div className="flex flex-col items-center justify-center ml-4 ">
                <p className="my-5 font-bold text-2xl mobile:text-xl">
                  {service.title}
                </p>
                <p className="text-lg text-blur mobile:text-base">
                  {service.des}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="desktop:ml-20 mt-10 relative desktop:pr-28">
        <img
          src={home}
          alt="home"
          className="w-[440px] desktop:h-auto h-[600px] object-cover z-20 tablet:w-[500px] tablet:h-[500px] mobile:w-[400px] mobile:h-[300px] 
          desktop:rounded-[240px] laptop:rounded-3xl tablet:rounded-3xl mobile:rounded-3xl laptop:w-[700px] "
        />
        <img
          src={season}
          alt="season"
          className="absolute w-[350px] h-auto mx-4 my-4 object-cover  -bottom-24 right-0 mobile:hidden tablet:hidden laptop:hidden"
          style={{
            borderTopLeftRadius: 200,
            borderTopRightRadius: 200,
            borderBottomLeftRadius: 200,
            borderBottomRightRadius: 200,
            borderWidth: 16,
            borderColor: "white",
          }}
        />
        <button className="cursor-auto flex px-5 py-3 items-center absolute top-24 right-14 bg-white rounded-full z-20  laptop:hidden tablet:hidden mobile:hidden  ">
          <img src={map} alt="map" className="w-10 h-10 object-cover" />
          <p className="font-bold text-xl ml-4">Paradise on Earth</p>
        </button>
        <img
          src={service}
          alt="service"
          className="w-96 absolute -top-10 -right-20 -z-10 hidden desktop:block"
        />
      </div>
    </div>
  );
};

export default BestService;
