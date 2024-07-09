import React from "react";
import beach from "../assets/images/card-review/beach.jpg";
import ocean from "../assets/images/card-review/fish.jpg";
import moutain from "../assets/images/card-review/moutain.jpg";
import star from "../assets/images/card-review/star.svg";
import xLogo from "../assets/images/card-review/x-logo.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import "./styles.css";

interface cardReview {
  image: string;
  title: string;
  price: string;
  address: string;
  star: string;
}
const cardReviews: cardReview[] = [
  {
    image: beach,
    title: "Paradise Beach, Bantayan Island",
    price: "550.16",
    address: "Rmoe, Italy",
    star: "4.8",
  },
  {
    image: ocean,
    title: "Ocean with full of Colors",
    price: "20.16",
    address: "Maldives",
    star: "4.8",
  },
  {
    image: moutain,
    title: "Mountains view, Above the cloud",
    price: "150.16",
    address: "United States",
    star: "4.8",
  },
];
const CardReviewTravel: React.FC = () => {
  return (
    <div className="px-10 mt-10 flex flex-col desktop:px-28">
      <div
        className="pt-10 pb-8 w-full flex justify-center desktop:justify-between items-center  
      tablet:flex-col mobile:flex-col"
      >
        <div className="flex flex-col items-center justify-center desktop:items-start desktop:justify-start">
          <p className="text-roses text-2xl font-bold mb-3 laptop:text-xl mobile:text-lg">
            TOP DESTINATION
          </p>
          <p className="font-bold text-4xl laptop:text-3xl mobile:text-2xl">
            Explore top destination
          </p>
        </div>
        <div className="flex items-center justify-around tablet:w-full mobile:w-full tablet:mt-6 mobile:mt-4">
          <button>
            <IoIosArrowRoundBack className="hidden desktop:block w-20 h-20 border px-5 py-5 rounded-full text-black hover:text-white hover:bg-btn mr-6" />
          </button>
          <button>
            <IoIosArrowRoundForward className="hidden desktop:block w-20 h-20 border px-5 py-5 rounded-full text-black hover:text-white hover:bg-btn" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-9 mt-6 relative ">
        {cardReviews.map((review, index) => (
          <div
            className="w-full shadow-shadowCardReview hover:cursor-pointer my-6 "
            style={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}
            key={index}
          >
            <img
              src={review.image}
              alt={review.title}
              className="w-full  h-[360px]  object-cover"
              style={{ borderTopLeftRadius: 32, borderTopRightRadius: 32 }}
            />
            <div className="px-6 py-6 flex">
              <div className="">
                <p className="font-bold text-2xl line-clamp-2">
                  {review.title}
                </p>
                <p className="text-blur text-lg my-6 text-gray-500 line-clamp-1">
                  {review.address}
                </p>
                <p className="text-orange flex items-center ">
                  <span className="text-2xl">{review.star}</span>
                  <img
                    src={star}
                    alt="star"
                    className="w-5 h-5 object-cover ml-1"
                  />
                </p>
              </div>
              <div>
                <p className="text-roses font-semibold text-2xl">
                  ${parseFloat(review.price).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
        <img
          src={xLogo}
          alt="xLogo"
          className="hidden desktop:block w-20 h-20 object-cover absolute top-0 -right-24"
        />
      </div>
    </div>
  );
};

export default CardReviewTravel;
