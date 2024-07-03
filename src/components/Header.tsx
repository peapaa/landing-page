import React from "react";
import vector from "../assets/vector.png";
const Header: React.FC = () => {
  return (
    <div className="px-20 pt-10 pb-5 flex justify-between">
      <div className="flex items-center ">
        <img src={vector} alt="logo company" />
        <h1 className="font-bold ml-3 text-2xl">Travlog</h1>
      </div>
      <div className="flex items-center ">
        <ul className="flex">
          <li className="hover:font-semibold ml-8 mr-6">
            <a href="/home" className="font-semibold">
              Home
            </a>
          </li>
          <li className="hover:font-semibold mx-6">
            <a href="/discover">Discover</a>
          </li>
          <li className="hover:font-semibold mx-6">
            <a href="/special-deals">Special Deals</a>
          </li>
          <li className="hover:font-semibold ml-6 mr-8">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <span className="font-semibold">Log In</span>
        <button className="px-5 py-2 bg-btn text-white rounded-3xl ml-8 ">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
