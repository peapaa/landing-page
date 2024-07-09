import React from "react";
import "./styles.css";
import logoTripadvisor from "../assets/images/company/logo-tripadvisor.png";
import logoExpedia from "../assets/images/company/logo-expedia.png";
import logoBooking from "../assets/images/company/logo-booking.png";
import logoAirbnb from "../assets/images/company/logo-airbnb.png";
import logoOrbitz from "../assets/images/company/logo-orbitz.png";
import triangle from "../assets/images/company/triangle-icon.png";

const logos = [
  logoTripadvisor,
  logoExpedia,
  logoBooking,
  logoAirbnb,
  logoOrbitz,
];
const LogoCompany: React.FC = () => {
  return (
    <div className="pl-28 pr-10 pb-20 relative mobile:pl-10 mobile:pt-10">
      <div
        className=" sudo-logo flex justify-around relative flex-wrap
      desktop:flex-nowrap "
      >
        {logos.map((logo, index) => (
          <img
            src={logo}
            alt={logo}
            key={index}
            className="cursor-pointer h-7 object-cover my-2 mx-2"
          />
        ))}
      </div>
      <img
        src={triangle}
        alt="triangle-icon"
        className="absolute w-12 object-cover -top-20 left-12 mobile:w-10 mobile:hidden"
      />
    </div>
  );
};

export default LogoCompany;
