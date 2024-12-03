import React, { useState } from "react";
import learn from "../images/learn.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const obj = [
    {
      name: "Shivam",
      surName: "Sharma",
      designation: "React Developer",
      img: learn,
    },
    {
      name: "Shivam",
      surName: "Sharma",
      designation: "React Developer",
      img: learn,
    },
    {
      name: "Shivam",
      surName: "Sharma",
      designation: "React Developer",
      img: learn,
    },
    {
      name: "Shivam",
      surName: "Sharma",
      designation: "React Developer",
      img: learn,
    },
    {
      name: "Shivam",
      surName: "Sharma",
      designation: "React Developer",
      img: learn,
    },
    {
      name: "Shivam",
      surName: "Sharma",
      designation: "React Developer",
      img: learn,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="mt-28 px-4 md:px-8 lg:px-16 relative">
      <div className=" absolute bg-white rounded-2xl  bg-opacity-20 backdrop-blur-sm z-40 top-4 h-[330px] w-7/12 left-[635px] "></div>
      <Slider {...settings}>
        {obj.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 p-4   shadow-lg rounded-lg transform transition-transform ${
              index === activeSlide ? "scale-110" : "scale-100 "
            }`}
          >
            {/* Text Section */}
            <div className="flex justify-center items-center text-center">
              <div className="text flex-1 text-center md:text-left flex justify-center items-center flex-col">
                <div className="name text-2xl md:text-3xl  text-white font-bolder">
                  {card.name}
                </div>
                <div className="surname text-3xl md:text-2xl text-white font-bolder">
                  {card.surName}
                </div>
                <div className="designation text-2xl md:text-xl text-violet-400 mt-2 font-bolder">
                  {card.designation}
                </div>
              </div>

              {/* Image Section */}
              <div className="img w-40 h-40 md:w-64 md:h-80 flex-shrink-0 rounded-lg overflow-hidden shadow-md">
                <img
                  src={card.img}
                  className="object-cover w-full h-full"
                  alt={`${card.name} ${card.surName}`}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
