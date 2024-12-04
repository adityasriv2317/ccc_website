import React from 'react';
import invert from "../assets/invert.png";
// import wires from "../assets/wires.png"

const Contact = () => {
  return (
    <div id="contact" >
      
      <div className="flex justify-center items-center bg-gray-1000">
        <div className="text-[rgb(150,198,245)] flex justify-center items-center bg-[rgba(50,50,50,0.5)] flex-col w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 h-auto py-5 rounded-md m-10" >
          <h1 className="text-4xl  block text-center">Connect With Us</h1>
          <form action="" className='m-4'>
            <div className='md:flex block gap-2'>
              <input
                type="text"
                className="border-white border-2 rounded-md font-bolder px-3 md:w-6/12 w-full text-white py-2 mt-4 bg-black"
                placeholder="First Name"
              />{" "}
              <input
                className="border-white border-2 rounded-md font-bolder md:w-6/12 w-full px-3 text-white py-2 bg-black mt-4"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <input
                type="text"
                className="border-white border-2 rounded-md font-bolder px-3 text-white py-2 bg-black w-full mt-1"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="text"
                className="border-white border-2 rounded-md font-bolder px-3 text-white py-2 bg-black w-full mt-1"
                placeholder="Phone Number"
              />
            </div>
            <input
              type="area"
              className="border-white border-2 rounded-md font-bolder px-3 text-white py-10 bg-black w-full mt-1"
              placeholder="Message"
            />

            <div className="flex justify-center items-center">
              <button className="h-10 w-full md:w-96 rounded-md bg-gradient-to-r from-violet-700 to-pink-600 mt-3 text-center">
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

export default Contact;