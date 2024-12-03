import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// imgs
import learn from "../images/learn.jpg";
import wwe from "../assets/about/2k24.jpg";
import gow from "../assets/about/gow.jpg";
import so from "../assets/about/so.jpg";
import tod from "../assets/about/tod.jpg";

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
      name: "WWE",
      surName: "2K24",
      designation: "UI Designer",
      img: wwe,
    },
    {
      name: "God",
      surName: "of War",
      designation: "Backend Developer",
      img: gow,
    },
    {
      name: "Diablo",
      surName: "IV",
      designation: "DevOps Engineer",
      img: so,
    },
    {
      name: "Total",
      surName: "OverDose",
      designation: "Product Manager",
      img: tod,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
        },
      },
    ],
  };

  return (
    <div className="mt-10 mb-20 px-4 md:px-8 lg:px-16 relative">
      {/* Active Slide Data */}
      <div className="text-center mb-8 animate-sd">
        <h2 className="text-2xl font-bold text-white">
          {obj[activeSlide].name} {obj[activeSlide].surName}
        </h2>
        <p className="text-lg text-violet-400">
          {obj[activeSlide].designation}
        </p>
      </div>

      <div className="absolute bg-white rounded-2xl text-center bg-opacity-20 backdrop-blur-sm z-40 bottom-0 h-4/5 w-3/4 right-0">OUR TEAM</div>
      {/* Carousel */}
      <Slider {...settings}>
        {obj.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 p-4 shadow-lg rounded-lg transform transition-transform ${
              index === activeSlide ? "scale-110" : "scale-95"
            }`}
          >
            {/* Image Section */}
            <div className="img w-40 h-40 md:w-64 md:h-80 flex-shrink-0 rounded-lg overflow-hidden shadow-md">
              <img
                src={card.img}
                className="object-cover w-full h-full"
                alt={`${card.name} ${card.surName}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
