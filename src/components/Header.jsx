import React from "react";
import vector from "../assets/header.png";
import Socials from "./Socials";

const Header = () => {
  return (
    <div className="text-white flex w-full font-poppins pl-8 pr-3 py-3 bg-[rgb(32,32,32)]">
      <nav className="w-4/5">
        <ul className="flex py-2 space-x-6 list-none">
          <li className="hover:text-[rgb(150,198,245)] cursor-pointer">Home</li>
          <li className="hover:text-[rgb(150,198,245)] cursor-pointer">Team</li>
          <li className="hover:text-[rgb(150,198,245)] cursor-pointer">
            Domains
          </li>
          <li className="hover:text-[rgb(150,198,245)] cursor-pointer">
            Contact
          </li>
        </ul>
      </nav>

      <img src={vector} className="z-10 absolute right-0 top-0 md:block hidden w-[45vh] h-[18vh]"/>

      <Socials className="w-2/5" />
    </div>
  );
};

export default Header;
