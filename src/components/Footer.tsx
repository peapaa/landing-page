import React from "react";
import logoTravlog from "../assets/vector.png";
import facebook from "../assets/facebook.png";
import tiwtter from "../assets/twitter.png";
import linkIn from "../assets/linkIn.png";

const Footer: React.FC = () => {
  return (
    <div className="desktop:px-28 laptop:px-10 tablet:px-10 mobile:px-6 mt-28 flex justify-between tablet:flex-wrap mobile:flex-wrap">
      <div className="desktop:w-2/5 mb-8">
        <span className="flex items-center mb-8 px-3">
          <img src={logoTravlog} alt="logoTravlog" className="w-10" />
          <p className="pl-4 text-2xl font-bold">Travlog</p>
        </span>
        <div className="text-gray-400 ">
          <p>Contrary to popular belief,</p>
          <p>Lorem Ipsum is not simply</p>
          <p>random text. It has roots</p>
          <p>in a piece of classical Latin</p>
          <p> literature from 45 BC.</p>
        </div>
        <div className="mt-12 flex items-center">
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
        <p className="text-2xl font-bold mb-4">Company</p>
        <div className="text-gray-400 ">
          <p className="hover:text-black my-3">About</p>
          <p className="hover:text-black my-3">Career</p>
          <p className="hover:text-black my-3">Moblie</p>
        </div>
      </div>
      <div className="desktop:w-1/5 mb-8 px-3">
        <p className="text-2xl font-bold mb-4">Contact</p>
        <div className="text-gray-400">
          <p className="hover:text-black my-3">Why Travlog?</p>
          <p className="hover:text-black my-3">partner with us</p>
          <p className="hover:text-black my-3">FAQ</p>
          <p className="hover:text-black my-3">Blog</p>
        </div>
      </div>
      <div className="desktop:w-1/5 mb-8 px-3 ">
        <p className="text-2xl font-bold mb-4">Meet Us</p>
        <div className="text-gray-400">
          <p className="hover:text-black my-3">+00 92 1234 56789</p>
          <p className="hover:text-black my-3">info@travlog.com</p>
          <p className="hover:text-black my-3">205. R Street, New York</p>
          <p className="hover:text-black my-3">BD23200</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
