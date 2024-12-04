import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Mentor from "./components/Mentor";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import About from "./components/About";
// import Carousel from './components/Carousel'


const App = () => {
  return (
    <div className="text-white font-poppins overflow-x-hidden">
      <Header />
      <Landing />
      <About />
      <Mentor />

      {/* <About /> */}
      <Contact></Contact>
      <Registration/>
      {/* <Carousel></Carousel> */}
      {/* Additional Sections */}
      <div className="about-section w-[100vw] h-screen bg-gray-600 flex items-center justify-center">
        <h1 className="text-4xl">Team Section</h1>
      </div>
      <div className="services-section w-[100vw] h-screen bg-gray-700 flex items-center justify-center">
        <h1 className="text-4xl">Mentor Section</h1>
      </div>
    </div>
  );
};

export default App;