import React from "react";
import Header from "./components/Header";
import TravelTop from "./components/TravelTop";
import LogoCompany from "./components/LogoCompany";
import ServiceCompany from "./components/ServiceCompany";
import CardReviewTravel from "./components/CardReviewTravel";
import backgroundTop from "./assets/images/background-top.png";

import TravelPoint from "./components/TravelPoint";
import BestService from "./components/BestService";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1440px] pb-20 font-roboto relative ">
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
        </div>
        <CardReviewTravel />
        <TravelPoint />
        <BestService />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
