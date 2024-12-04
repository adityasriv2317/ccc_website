import React from "react";
import bg from "../assets/about/invert.png";
import button from "../assets/about/hex.png";
import team from "../assets/about/team.png";
import trapezium from "../assets/about/trapezium.png";
import Carousel from "./Carousel";

const About = () => {
  return (
    <div
      className="about-page overflow-hidden bg-[rgba(20,20,20,0.8)] bg-no-repeat md:min-h-[900px]"
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
          className="relative mt-0 hover:animate-pulse cursor-default mx-auto my-auto z-2 text-center items-center justify-center font-albert font-semibold text-[3vw] shadow-sm text-black py-2 px-6 bg-no-repeat bg-center bg-contain w-[30vw]"
          style={{
            backgroundImage: `url(${button})`,
          }}
        >Explore</div>
      </div>

      <Carousel />
    </div>
  );
};

export default About;
