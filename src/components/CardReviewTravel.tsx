import React from "react";
import arrowLeft from "../assets/pre-left.svg";
import arrowRight from "../assets/pre-right.svg";
import beach from "../assets/beach1.svg";
import ocean from "../assets/ocean.svg";
import moutain from "../assets/moutain2.svg";
import star from "../assets/star.svg";
import xLogo from "../assets/x-logo.png";

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
    price: "$550.16",
    address: "Rmoe, Italy",
    star: "4.8",
  },
  {
    image: ocean,
    title: "Ocean with full of Colors",
    price: "$20.16",
    address: "Maldives",
    star: "4.8",
  },
  {
    image: moutain,
    title: "Mountains view, Above the cloud",
    price: "$150.16",
    address: "United States",
    star: "4.8",
  },
];
const CardReviewTravel: React.FC = () => {
  return (
    <div className="px-10  mt-10 flex flex-col desktop:px-28">
      <div
        className="pt-10 pb-8 w-full flex justify-between items-center 
      tablet:flex-col mobile:flex-col"
      >
        <div className="flex flex-col justify-center items-center">
          <p className="text-roses text-2xl font-bold mb-3 laptop:text-xl mobile:text-lg">
            TOP DESTINATION
          </p>
          <p className="font-bold text-4xl laptop:text-3xl mobile:text-2xl">
            Explore top destination
          </p>
        </div>
        <div className="flex items-center justify-around tablet:w-full mobile:w-full tablet:mt-6 mobile:mt-4">
          <button>
            <img
              src={arrowLeft}
              alt={arrowLeft}
              className="border px-5 py-5 rounded-full mr-6"
            />
          </button>
          <button>
            <img
              src={arrowRight}
              alt={arrowRight}
              className="bg-btn border px-5 py-5 rounded-full "
            />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-6 relative flex-wrap ">
        {cardReviews.map((review, index) => (
          <div
            className="w-60 shadow-shadowCardReview even:mx-10 hover:cursor-pointer my-6 mobile:even:mx-0"
            style={{ borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}
            key={index}
          >
            <img
              src={review.image}
              alt={review.title}
              className="w-full h-60 object-cover"
              style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
            />
            <div className="px-6 py-6 flex">
              <div>
                <p className="font-bold">{review.title}</p>
                <p className="font-thin text-sm my-2 text-gray-500">
                  {review.address}
                </p>
                <p className="text-orange flex items-center">
                  <span>{review.star}</span>
                  <img
                    src={star}
                    alt={star}
                    className="w-5 h-5 object-cover ml-1"
                  />
                </p>
              </div>
              <div>
                <p className="text-roses font-semibold">{review.price}</p>
              </div>
            </div>
          </div>
        ))}
        <img
          src={xLogo}
          alt="xLogo"
          className="hidden desktop:block w-20 h-20 object-cover absolute top-0 right-0"
        />
      </div>
    </div>
  );
};

export default CardReviewTravel;
