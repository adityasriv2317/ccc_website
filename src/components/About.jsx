import React from "react";
import bg from "../assets/about/invert.png";
import button from "../assets/about/hex.png";
import team from "../assets/about/team.png";
import trapezium from "../assets/about/trapezium.png";
import Carousel from "./Carousel";

const About = () => {
  return (
    <div
      className="about-page overflow-hidden bg-[rgb(8,8,8)] bg-no-repeat min-h-[100vh] md:min-h-[900px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "contain",
        backgroundPosition: "top",
      }}
    >
      <div className="blocks flex w-full justify-between absolute z-10 mt-20">
        <img src={trapezium} className="rotate-180" alt="" />
        <img src={trapezium} alt="" />
      </div>

      <div className="mx-auto items-center mt-28">
        {/* img */}
        <img src={team} className="mx-auto w-1/2" alt="" />

        <div
          className="relative mx-auto mt-4 z-2 text-center font-albert font-semibold text-sm sm:text-md md:text-[4vw] shadow-sm text-black py-6 px-10 bg-no-repeat bg-center bg-cover w-fit"
          style={{
            backgroundImage: `url(${button})`,
          }}
        >
          About Us
        </div>
      </div>

      <Carousel />
    </div>
  );
};

export default About;
