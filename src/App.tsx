import React from "react";
import Header from "./components/Header";
import TravelTop from "./components/TravelTop";
import LogoCompany from "./components/LogoCompany";
import ServiceCompany from "./components/ServiceCompany";
import CardReviewTravel from "./components/CardReviewTravel";
import backgroundTop from "./assets/background-top.png";

import backgroundTravelTop from "./assets/background-travel-top.png";
import TravelPoint from "./components/TravelPoint";
import BestService from "./components/BestService";
import Testimonial from "./components/Testimonial";

const App: React.FC = () => {
  return (
    <div className="w-full font-roboto relative pb-20">
      <div
        className=" bg-no-repeat "
        style={{ backgroundImage: `url(${backgroundTop})` }}
      >
        <Header />
        <TravelTop />
      </div>

      <div className="relative">
        <LogoCompany />
        <ServiceCompany />
        <div
          className="bg-no-repeat bg-cover absolute -top-32 right-0"
          style={{
            backgroundImage: `url(${backgroundTravelTop})`,
            width: "40%",
            height: "500px",
          }}
        />
      </div>
      <CardReviewTravel />
      <TravelPoint />
      <BestService />
      <Testimonial />
    </div>
  );
};

export default App;
