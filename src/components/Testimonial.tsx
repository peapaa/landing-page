import React from "react";
import userIcon from "../assets/images/customer-review/user-icon2.png";
import star from "../assets/images/customer-review/star2.png";
import backgroundWavy from "../assets/images/customer-review/wavy3.png";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./styles.css";

interface User {
  avatar: string;
  name: string;
  desc: string;
  address: string;
  star: string;
  point: string;
}

const users: User[] = [
  {
    avatar: userIcon,
    name: "Mark Smith",
    desc: "What looks like a small patch of purple grass above five feet",
    address: "Travel Enthusiast",
    star: star,
    point: "3.6",
  },
  {
    avatar: userIcon,
    name: "Thomas Adrew",
    desc: "What looks like a small patch of purple grass above five feet",
    address: "Travel Enthusiast",
    star: star,
    point: "4.6",
  },
  {
    avatar: userIcon,
    name: "Thiendola",
    desc: "What looks like a small patch of purple grass above five feet",
    address: "Travel Enthusiast",
    star: star,
    point: "5",
  },
];
const Testimonial: React.FC = () => {
  return (
    <div className="flex desktop:px-28 pt-0 w-full max-w-[1440px] items-center justify-around relative laptop:px-10 tablet:px-10 mobile:px-5 ">
      <button className="btn-prev-testimanial">
        <IoIosArrowRoundBack className="hidden desktop:block w-20 h-20 border px-5 py-5 rounded-full text-black hover:text-white hover:bg-btn mr-6 bg-white" />
      </button>

      <div className="text-center min-w-[300px] w-full">
        <p className="text-roses font-bold text-2xl tracking-[.25em] mb-16 mobile:text-sm tablet:text-xl laptop:mb-4 mobile:mb-3">
          TESTIMANIAL
        </p>
        <p className="font-bold text-[44px] mb-8 mobile:text-2xl tablet:text-3xl">
          Trust our clients
        </p>
        <div className="swiper-pagination-customer">
          <Swiper
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            }}
            navigation={{
              prevEl: ".btn-prev-testimanial",
              nextEl: ".btn-next-testimanial",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            style={{}}
          >
            {users.length > 0 &&
              users.map((user, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center">
                    <img
                      src={user.avatar}
                      alt="userIcon"
                      className=" mb-12 mobile:w-20 tablet:w-28"
                    />
                  </div>
                  <p className="font-semibold text-gray-600 ">
                    <span className="text-orange text-xl">{user.name} </span> /{" "}
                    {user.address}
                  </p>
                  <div className="flex items-center justify-center my-6">
                    {[...Array(parseInt(user.point))].map((_, index) => (
                      <img
                        key={index}
                        src={star}
                        alt="star"
                        className="w-7 h-7 object-cover mx-1"
                      />
                    ))}
                  </div>
                  <p className="text-base text-blur pb-6 mb-6 text-gray-500 ">
                    {user.desc}
                  </p>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <button className="btn-next-testimanial">
        <IoIosArrowRoundForward className="hidden border desktop:block w-20 h-20  px-5 py-5 rounded-full text-black hover:text-white hover:bg-btn bg-white" />
      </button>
      <div
        className=" bg-no-repeat absolute -top-[90px] -z-10 w-full laptop:-top-[180px] tablet:-top-1/3 mobile:-top-2/3"
        style={{
          backgroundImage: `url(${backgroundWavy})`,
          width: "100%",
          height: "1000px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Testimonial;
