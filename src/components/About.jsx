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
      id="team"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "contain",
        backgroundPosition: "top",
      }}
    >
      <div className="blocks flex w-full justify-between absolute  mt-20">
        <img src={trapezium} className="rotate-180 mx:w-[7vw]" alt="" />
        <img src={trapezium} className="mx:w-[7vw]" alt="" />
      </div>

      <div className="mx-auto items-center mt-28">
        {/* img */}
        <img src={team} className="mx-auto w-1/2" alt="" />

        <div
          className="relative mx-auto mt-4 z-2 text-center font-albert font-semibold text-[2vw] shadow-sm text-black py-5 px-8 bg-no-repeat bg-center bg-contain w-fit"
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
