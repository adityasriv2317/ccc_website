import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import bg from "../assets/landing.png";
import button from "../assets/button.png";
import wires from "../assets/wires.png";
import logo from "../assets/CCC.png";

// bar function
const ProgressBar = ({ label }) => {
  let segmentCount = 40;

  // state
  const [animatedSegments, setAnimatedSegments] = useState([]);

  // generate block opacity
  useEffect(() => {
    const generateAnimationStyles = () => {
      return Array(segmentCount)
        .fill(null)
        .map(() => ({
          animation: `pulsate ${Math.random() * 2 + 1}s infinite`,
        }));
    };

    // 10 sec timer
    const interval = setInterval(() => {
      // set array of bars via random generation function
      setAnimatedSegments(generateAnimationStyles());
    }, 10000);
    setAnimatedSegments(generateAnimationStyles());
    return () => clearInterval(interval);
  }, [segmentCount]);

  // render bars
  return (
    <div className="mt-6 flex justify-between">
      <div className="text-white font-jetbrains text-xl mr-6 font-semibold">
        {label}
      </div>
      <div className="flex">
        {animatedSegments.map((style, index) => (
          <div
            key={index}
            className="w-1 h-8 mr-1 bg-[rgb(0,100,194)]"
            style={style}
          ></div>
        ))}
      </div>
    </div>
  );
};

const Landing = () => {
  return (
    <div
      className="landing-page overflow-hidden bg-no-repeat h-[100vh] md:h-[875px]"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* hero */}
      <div className="content w-[90vw] mx-auto mt-24 md:mt-6 flex flex-col md:flex-row items-center justify-between text-center text-white">
        {/* left */}
        <div className="left w-full md:w-1/2 flex flex-col items-center font-albert">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            CLOUD COMPUTING CELL
          </p>
          <div className="flex text-sm sm:text-base md:text-lg lg:text-xl items-center justify-center font-jetbrains font-light space-x-6 mt-4">
            <p>THINK</p>
            <p>DEVELOP</p>
            <p>DEPLOY</p>
          </div>

          <Link to="/register"
            className="font-jetbrains animate-pulse hover:animate-zoom text-base sm:text-lg md:text-xl font-semibold text-black mt-12 md:mt-16 py-4 px-8 bg-no-repeat bg-center bg-contain cursor-pointer w-fit mx-auto"
            style={{
              backgroundImage: `url(${button})`,
            }}
          >
            REGISTER HERE
          </Link>
        </div>

        {/* right */}
        <div className="w-full md:w-1/4 mx-auto relative flex justify-center items-center py-12 md:py-20">
          <img
            src={wires}
            className="relative inset-0 w-full h-full object-cover"
          />
          <img
            src={logo}
            alt="Logo"
            className="z-[5] absolute mx-auto animate-slideIn md:top-[14vw] mb-4 w-36 h-36"
          />
        </div>
      </div>

      {/* about page content */}
      <div className="text-white mx:bg-[rgba(75,85,99,0.2)] z-20 text-left absolute left-1 md:left-20 mx:top-25 top-[65vh] mx-4 mx:px-2 mx:py-2 md:mx-0">
        <h1 className="font-poppins mb-5 shadow-sm text-[rgb(150,198,245)] [text-shadow:0_0_5px_blue] animate-sd text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          ABOUT US
        </h1>
        <p className="font-jetbrains [text-shadow:0_0_5px_black] text-wrap text-justify overflow-y-auto mx:max-h-[18vh] md:max-w-[35vw] animate-sr text-sm sm:text-base md:text-lg">
          Founded in February 2016, the Cloud Computing Cell at AKGEC empowers
          students with expertise across diverse domains like Web Development,
          Machine Learning, UI/UX Design, Backend Development, Cybersecurity,
          and Cloud Technologies.
        </p>

        <a href="#team">
          <button
            className="font-jetbrains text-base sm:text-lg md:text-xl font-semibold text-black mt-4 mx-0 py-4 px-8 animate-sr bg-no-repeat bg-center bg-contain cursor-pointer w-fit"
            style={{
              backgroundImage: `url(${button})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            Explore
          </button>
        </a>
      </div>

      {/* progress barr animation */}
      <div className="h-40 hidden md:block absolute bottom-20 right-10 p-10">
        <ProgressBar label="THINK" />
        <ProgressBar label="DEVELOP" />
        <ProgressBar label="DEPLOY" />
      </div>
    </div>
  );
};

export default Landing;
