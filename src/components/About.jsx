import React from "react";
import bg from "../assets/about/invert.png";
import button from "../assets/about/hex.png";
import team from "../assets/about/team.png";
import trapezium from "../assets/about/trapezium.png";
import Carousel from "./Carousel";

const About = () => {
  return (
    <div
      className="landing-page overflow-hidden bg-no-repeat h-[100vh] md:h-[875px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="blocks flex w-full justify-between absolute z-10 mt-20">
        <img src={trapezium} className="rotate-180" alt="" />
        <img src={trapezium} alt="" />
      </div>

      <div className="mx-auto items-center mt-28">
        {/* img */}
        <img src={team} className="mx-auto" alt="" />

        <div
          className="relative bottom-16 left-6 z-2 text-center font-albert font-semibold text-base sm:text-2lg md:text-4xl shadow-sm text-black py-4 px-8 bg-no-repeat bg-center bg-contain cursor-pointer w-fit"
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
