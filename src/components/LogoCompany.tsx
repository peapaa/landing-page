import React from "react";
import "./styles.css";
import logoTripadvisor from "../assets/images/company/logo-tripadvisor.png";
import logoExpedia from "../assets/images/company/logo-expedia.png";
import logoBooking from "../assets/images/company/logo-booking.png";
import logoAirbnb from "../assets/images/company/logo-airbnb.png";
import logoOrbitz from "../assets/images/company/logo-orbitz.png";
import triangle from "../assets/images/company/triangle-icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const logos = [
  logoTripadvisor,
  logoExpedia,
  logoBooking,
  logoAirbnb,
  logoOrbitz,
  logoBooking,
];
const LogoCompany: React.FC = () => {
  return (
    <>
      <div className="desktop:px-28  desktop:pb-20 pb-10 relative mobile:px-6 mobile:pt-10 laptop:px-20 tablet:px-10 ">
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5, // màn 6 thì p để preview là 5
              spaceBetween: 50,
            },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className=" flex justify-center items-center">
                <img
                  src={logo}
                  alt={logo}
                  className="cursor-pointer h-7 object-contain "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <img
          src={triangle}
          alt="triangle-icon"
          className="absolute w-12 object-cover -top-20 left-12 laptop:left-6 mobile:w-10 mobile:hidden tablet:hidden"
        />
      </div>
    </>
  );
};

export default LogoCompany;
