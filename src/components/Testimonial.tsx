import React from "react";
import backgroundWavy from "../assets/wavy2.svg";
import arrowLeft from "../assets/pre-left.svg";
import arrowRight from "../assets/pre-right.svg";

const Testimonial: React.FC = () => {
  return (
    <div className="flex px-28">
      <img src={arrowLeft} alt="arrowLeft" />
      <div>ấkjlkàklạl</div>
      <img src={arrowRight} alt="arrowRight" className="bg-btn" />
    </div>
  );
};

export default Testimonial;
