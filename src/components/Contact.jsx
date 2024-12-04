import React from "react";
import invert from "../assets/invert.png";
import button from "../assets/button.png";
// import wires from "../assets/wires.png"

const Contact = () => {
  return (
    <div id="contact">
      <div className="flex justify-center items-center bg-gray-1000">
        <div className="text-[rgb(150,198,245)] flex justify-center items-center bg-[rgba(50,50,50,0.5)] flex-col w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 h-auto py-5 rounded-md m-10">
          <h1 className="text-4xl block text-center">Connect With Us</h1>
          <form action="" className="m-4 space-y-1">
            <div className="md:flex block gap-1">
              <input
                type="text"
                className="border-white rounded-md font-bolder px-3 md:w-6/12 w-full text-white py-2 mt-4 bg-[rgb(51,118,188)] placeholder:bg-transparent"
                placeholder="First Name"
              />{" "}
              <input
                className="border-white rounded-md font-bolder md:w-6/12 w-full px-3 text-white py-2 bg-[rgb(51,118,188)] mt-4 placeholder:bg-transparent"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <input
                type="text"
                className="border-white rounded-md font-bolder px-3 text-white py-2 bg-[rgb(51,118,188)] w-full mt-1 placeholder:bg-transparent"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="text"
                className="border-white rounded-md font-bolder px-3 text-white py-2 bg-[rgb(51,118,188)] w-full mt-1 placeholder:bg-transparent"
                placeholder="Phone Number"
              />
            </div>
            <input
              type="area"
              className="border-white rounded-md font-bolder px-3 text-white py-10 bg-[rgb(51,118,188)] w-full mt-1 placeholder:bg-transparent"
              placeholder="Message"
            />

            <div className="flex justify-center items-center">
              <button
                className="font-jetbrains text-base sm:text-lg md:text-xl font-semibold text-black mt-4 mx-0 py-4 px-8 animate-sr bg-no-repeat bg-center bg-contain cursor-pointer w-fit"
                style={{
                  backgroundImage: `url(${button})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div>
        <img src={invert} className="w-screen h-72" alt="" />
      </div>
    </div>
  );
};

export default Contact;
