import React from "react";
import logoTravlog from "../assets/images/logo/vector.png";
import facebook from "../assets/images/footer/facebook.png";
import tiwtter from "../assets/images/footer/twitter.png";
import linkIn from "../assets/images/footer/linkIn.png";
import "./styles.css";
const Footer: React.FC = () => {
  return (
    <div className="desktop:px-28 laptop:px-10 tablet:px-10 mobile:px-6 mt-28 flex justify-between tablet:flex-wrap mobile:flex-wrap laptop:flex-wrap">
      <div className="desktop:w-2/5 desktop:min-w-[540px] desktop:mb-8 desktop:mr-4">
        <span className="flex items-center mb-8">
          <img src={logoTravlog} alt="logoTravlog" className="w-10" />
          <p className="pl-4 text-2xl font-bold">Travlog</p>
        </span>
        <div className="text-gray-400 text-xl desktop:text-2xl  ">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
        </div>
        <div className="mt-12 mb-6 flex items-center">
          <a href="#">
            <img src={facebook} alt="facebook" className="" />
          </a>
          <a href="#">
            <img src={tiwtter} alt="tiwtter" className="mx-6" />
          </a>

          <a href="#">
            <img src={linkIn} alt="linkIn" className="" />
          </a>
        </div>
      </div>

      <div className="desktop:w-1/5 mb-8 px-3">
        <p className="text-2xl font-bold mb-4 min-w-[150px]">Company</p>
        <div className="text-blur text-lg">
          <p className="hover:text-black my-3">About</p>
          <p className="hover:text-black my-3">Career</p>
          <p className="hover:text-black my-3">Moblie</p>
        </div>
      </div>
      <div className="desktop:w-1/5 mb-8 px-3">
        <p className="text-2xl font-bold mb-4 min-w-[150px]">Contact</p>
        <div className="text-blur text-lg">
          <p className="hover:text-black my-3">Why Travlog?</p>
          <p className="hover:text-black my-3">partner with us</p>
          <p className="hover:text-black my-3">FAQ</p>
          <p className="hover:text-black my-3">Blog</p>
        </div>
      </div>
      <div className="desktop:w-1/5 mb-8 px-3 ">
        <p className="text-2xl font-bold mb-4">Meet Us</p>
        <div className="text-blur text-lg min-w-[150px]">
          <p className="hover:text-black my-3 ">+00 92 1234 56789</p>
          <p className="hover:text-black my-3">info@travlog.com</p>
          <p className="hover:text-black my-3">205. R Street, New York</p>
          <p className="hover:text-black my-3">BD23200</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
