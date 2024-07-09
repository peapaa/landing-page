import React from "react";
import userIcon from "../assets/images/customer-review/user-icon2.png";
import star from "../assets/images/customer-review/star2.png";
import cricle from "../assets/images/customer-review/cricle.svg";
import cricleRose from "../assets/images/customer-review/cricleRose.png";
import backgroundWavy from "../assets/images/customer-review/wavy3.png";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

interface User {
  avatar: string;
  name: string;
  desc: string;
  address: string;
  star: string;
}

const users: User[] = [
  {
    avatar: userIcon,
    name: "Mark Smith",
    desc: "What looks like a small patch of purple grass above five feet",
    address: "Travel Enthusiast",
    star: star,
  },
];
const Testimonial: React.FC = () => {
  return (
    <div className="flex desktop:px-28 pt-0 w-full items-center justify-around relative laptop:px-10 tablet:px-10 mobile:px-5 ">
      <button>
        <IoIosArrowRoundBack className="hidden desktop:block w-20 h-20 border px-5 py-5 rounded-full text-black hover:text-white hover:bg-btn mr-6" />
      </button>

      <div className="text-center ">
        <p className="text-roses font-bold text-2xl tracking-[.25em] mb-4 mobile:text-sm tablet:text-xl">
          TESTIMANIAL
        </p>
        <p className="font-bold text-[44px] mb-8 mobile:text-2xl tablet:text-3xl">
          Trust our clients
        </p>
        {users.length > 0 &&
          users.map((user) => (
            <>
              {" "}
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
                <img
                  src={star}
                  alt="star"
                  className="w-7 h-7 object-cover mx-1"
                />
                <img
                  src={star}
                  alt="star"
                  className="w-7 h-7 object-cover mx-1"
                />
                <img
                  src={star}
                  alt="star"
                  className="w-7 h-7 object-cover mx-1"
                />
                <img
                  src={star}
                  alt="star"
                  className="w-7 h-7 object-cover mx-1"
                />
                <img
                  src={star}
                  alt="star"
                  className="w-7 h-7 object-cover mx-1"
                />
              </div>
              <p className="text-base  mb-6 text-gray-500">{user.desc}</p>
            </>
          ))}

        <div className="flex items-center justify-center">
          <img
            src={cricle}
            alt="cricle"
            className="w-5 h-5 object-cover mx-2"
          />
          <img
            src={cricleRose}
            alt="cricle"
            className="w-5 h-5 object-cover mx-2 "
          />
          <img
            src={cricle}
            alt="cricle"
            className="w-5 h-5 object-cover mx-2"
          />
        </div>
      </div>
      <button>
        <IoIosArrowRoundForward className="hidden border desktop:block w-20 h-20  px-5 py-5 rounded-full text-black hover:text-white hover:bg-btn" />
      </button>
      <div
        className=" bg-no-repeat absolute desktop:-top-1/3 -z-10 w-full"
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
