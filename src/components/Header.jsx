import React from "react";
import Socials from "./Socials";

const Header = () => {
  return (
    <div className="text-white fixed z-40 flex justify-between w-screen px-10 py-3 bg-[rgba(32,32,32,0.38)]">
      <nav className="w-full my-2 md:w-3/5">
        <ul className="flex justify-center md:justify-start space-x-4 list-none">
          <li>
            <a
              href="#"
              className="hover:bg-[rgb(150,198,245)] py-2 px-3 hover:text-black hover:underline-offset-4 hover:underline cursor-pointer transition-all duration-300 ease-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#team"
              className="hover:bg-[rgb(150,198,245)] py-2 px-3 hover:text-black hover:underline-offset-4 hover:underline cursor-pointer transition-all duration-300 ease-out"
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="#domain"
              className="hover:bg-[rgb(150,198,245)] py-2 px-3 hover:text-black hover:underline-offset-4 hover:underline cursor-pointer transition-all duration-300 ease-out"
            >
              Domain
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:bg-[rgb(150,198,245)] py-2 px-3 hover:text-black hover:underline-offset-4 hover:underline cursor-pointer transition-all duration-300 ease-out"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <Socials className="hidden md:block md:w-2/5" />
    </div>
  );
};

export default Header;
