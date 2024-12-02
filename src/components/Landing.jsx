import React from "react";
import bg from "../assets/landing.png";
import button from "../assets/button.png";
import wires from "../assets/wires.png";
import logo from "../assets/CCC.png";

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
      <div className="content w-[90vw] mx-auto mt-4 flex flex-col md:flex-row items-center justify-between text-center text-white">
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

          <div
            className="font-jetbrains text-base sm:text-lg md:text-xl font-semibold text-black mt-16 py-4 px-8 bg-no-repeat bg-center bg-contain cursor-pointer"
            style={{
              backgroundImage: `url(${button})`,
            }}
          >
            REGISTER HERE
          </div>
        </div>

        {/* right */}
        <div className="w-1/4 mx-20 relative flex justify-center items-center py-20">
          <img
            src={wires}
            className="relative inset-0 w-full h-full object-cover"
          />
          <img
            src={logo}
            alt="Logo"
            className="z-10 absolute mx-auto animate-slideIn top-48 mb-4 w-36 h-36"
          />
        </div>
      </div>

      {/* other content */}
      <div className="data text-white text-center py-8">
        <p>Hello</p>
      </div>
    </div>
  );
};

export default Landing;
