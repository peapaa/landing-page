import React, { useState } from "react";
import vector from "../assets/vector.png";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="p-4 laptop:px-12 mobile:px-6 tablet:px-12 desktop:px-28 pt-10 pb-5 flex justify-between items-center">
      <div className="flex items-center">
        <img src={vector} alt="logo company" />
        <h1 className="font-bold ml-3 text-2xl">Travlog</h1>
      </div>

      <div className="hidden laptop:flex desktop:flex  items-center space-x-6">
        <ul className="flex space-x-6 ">
          <li className="hover:font-semibold">
            <a href="/home" className="font-semibold desktop:mx-4">
              Home
            </a>
          </li>
          <li className="hover:font-semibold">
            <a href="/discover" className="desktop:mx-4">
              Discover
            </a>
          </li>
          <li className="hover:font-semibold">
            <a href="/special-deals" className="desktop:mx-4">
              Special Deals
            </a>
          </li>
          <li className="hover:font-semibold">
            <a href="/contact" className="desktop:mx-4">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden laptop:flex desktop:flex items-center">
        <span className="font-semibold">Log In</span>
        <button className="px-5 py-2 bg-btn text-white rounded-3xl ml-8">
          Sign Up
        </button>
      </div>

      <div className="laptop:hidden desktop:hidden flex items-center">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`laptop:hidden desktop:hidden absolute top-0 left-0 w-full  bg-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="flex justify-center items-center">
            <img src={vector} alt="logo company" />
            <h1 className="font-bold text-2xl ml-4">Travlog</h1>
          </div>
          <button
            onClick={toggleMenu}
            className="focus:outline-none hover:cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6">
          <li className="hover:font-semibold">
            <a href="/home" className="font-semibold">
              Home
            </a>
          </li>
          <li className="hover:font-semibold">
            <a href="/discover">Discover</a>
          </li>
          <li className="hover:font-semibold">
            <a href="/special-deals">Special Deals</a>
          </li>
          <li className="hover:font-semibold">
            <a href="/contact">Contact</a>
          </li>
          <li>
            <span className="font-semibold">Log In</span>
          </li>
          <li>
            <button className="px-10 py-2 mb-20 bg-btn text-white rounded-3xl">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
