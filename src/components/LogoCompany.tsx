import React from "react";
import "./styles.css";
import logoTripadvisor from "../assets/logo-tripadvisor.png";
import logoExpedia from "../assets/logo-expedia.png";
import logoBooking from "../assets/logo-booking.png";
import logoAirbnb from "../assets/logo-airbnb.png";
import logoOrbitz from "../assets/logo-orbitz.png";
import triangle from "../assets/triangle-icon.png";

const logos = [
  logoTripadvisor,
  logoExpedia,
  logoBooking,
  logoAirbnb,
  logoOrbitz,
];
const LogoCompany: React.FC = () => {
  return (
    <div className="px-28 pb-20 relative">
      <div className="  sudo-logo flex justify-around relative">
        {logos.map((logo) => (
          <img
            src={logo}
            alt={logo}
            className="cursor-pointer h-7 object-cover"
          />
        ))}
      </div>
      <img
        src={triangle}
        alt="triangle-icon"
        className="absolute w-12 object-cover -top-20 left-12"
      />
    </div>
  );
};

export default LogoCompany;
