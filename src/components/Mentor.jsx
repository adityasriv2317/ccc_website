import React from "react";
import bg from "../assets/mentor/mesh.png";
import trapezium from "../assets/about/trapezium.png";

// data
import name from "../assets/mentor/name.png";
import photo from "../assets/mentor/photo.png";
import text from "../assets/mentor/text.png";

const Mentor = () => {
  return (
    <div className="about-page relative overflow-hidden bg-no-repeat">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[rgba(20,20,20,0.8)] z-10"></div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-20 text-white py-auto">
        {/* Trapezium Decoration */}
        <div className="blocks flex w-full justify-between items-center absolute z-10 mt-auto">
          <img
            src={trapezium}
            className="rotate-180 mx:w-[7vw]"
            alt="Trapezium decoration"
          />
          <img src={trapezium} className="mx:w-[7vw]" alt="Trapezium decoration" />
        </div> 

        {/* Mentor Section */}
        <div className="flex mx:flex-col md:flex-row md:mx-28 my-12 md:px-14 w-full">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-center w-1/3 mx:mx-auto mx:w-1/2">
            <img src={photo} className="px-2" alt="" />
            <img src={name} className="" alt="" />
          </div>

          {/* Right Section */}
          <div className="justify-center font-albert p-0 md:w-3/5 mx:w-full">
            {/* Image as Full-Sized Element */}
            <img
              src={text}
              className="absolute h-full object-cover z-0"
              alt=""
            />

            {/* Text Content */}
            <div className="relative flex flex-col mx:w-full mx:text-center md:w-3/5 h-full mx:pt-4 font-semibold md:ml-[4vw] z-10">
              <div className="title w-full text-[rgb(150,198,255)] mb-6 mt-[2vw] text-[4vw] mx:text-[6vw] leading-tight">
                Faculty
                Coordinator
              </div>
              <div className="content font-medium text-justify text-[1.3vw] mx:text-[3vw] mx:mx-16">
                Santosh Mishra, Assistant Professor in IT
                department, having 15 years of teaching
                and 3 years of industry experience as 
                Java software developer. Gold faculty 
                partner of Infosys. Awarded with content 
                guru award. Was mentor of Hackathon 
                winning team of 2019. Programming 
                knowledge of Java, C, C++, Python and
                PHP. Areas of research are different
                meta-heuristics Optimization algorithms
                like PSO, MFO, GSA, GA etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
