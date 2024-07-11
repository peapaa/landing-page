import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import earth from "../assets/images/service-logo/logo-earth.png";
import booking from "../assets/images/service-logo/easy-booking.png";
import "./styles.css";
import { Link } from "react-router-dom";
import backgroundTravelTop from "../assets/images/bg-right.jpg";

interface cardServices {
  logo: string;
  title: string;
  des: string;
  href: string;
}
const cardServices: cardServices[] = [
  {
    logo: earth,
    title: "Best Tour Guide",
    des: "What looks like a small patch of purple grass above five feet",
    href: "",
  },
  {
    logo: booking,
    title: "Easy Booking",
    des: "Square, was moving across the sand in their direction",
    href: "",
  },
  {
    logo: earth,
    title: "Best Tour Guide",
    des: "What looks like a small patch of purple grass above five feet",
    href: "",
  },
  {
    logo: earth,
    title: "Best Tour Guide",
    des: "What looks like a small patch of purple grass above five feet",
    href: "",
  },
  {
    logo: earth,
    title: "Best Tour Guide",
    des: "What looks like a small patch of purple grass above five feet",
    href: "",
  },
];

const ServiceCompany: React.FC = () => {
  return (
    <div className="relative pl-28 mt-10 desktop:mt-0 flex  items-center mobile:flex-col tablet:flex-col laptop:px-0 tablet:px-6 mobile:px-6 laptop:flex-col">
      <div className="desktop:w-1/3 w-full tablet:text-center laptop:text-center mobile:text-center ">
        <p className="text-roses text-2xl mobile:text-3xl ">Services</p>
        <p className="text-4xl font-bold mt-4 tablet:mt-0 mb-6">
          Our top value categories for you
        </p>
      </div>
      <div className="w-full desktop:w-2/3 desktop:px-6 flex items-center justify-center service ">
        <Swiper
          slidesPerView={1}
          loop={true}
          className="slider-service"
          breakpoints={{
            550: {
              slidesPerView: 2,
            },

            850: {
              slidesPerView: 3,
            },
          }}
        >
          {cardServices.map((card, index) => (
            <SwiperSlide key={index} className="px-2">
              <Link to={card.href} className="flex items-center justify-center">
                <div
                  className={
                    "shadow-lg desktop:max-w-[280px] w-full h-[360px] my-4 flex flex-col flex-none mobile:px-3 mobile:py-8 tablet:px-2 items-center justify-center rounded-xl "
                  }
                >
                  <img
                    src={card.logo}
                    alt={card.title}
                    className="w-11 py-7  mobile:w-16"
                  />
                  <p className="pb-6 text-xl font-bold  mobile:text-2xl ">
                    {card.title}
                  </p>
                  <p className="text-center  mx-4 text-blur  mobile:text-xl tablet:mx-0  ">
                    {card.des}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        className="bg-no-repeat absolute -top-1/3 right-0 -z-20"
        style={{
          backgroundImage: `url(${backgroundTravelTop})`,
          width: "500px",
          height: "100%",
        }}
      />
    </div>
  );
};

export default ServiceCompany;
