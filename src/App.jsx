import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
<<<<<<< HEAD
// import Carousel from './components/Carousel'

=======
import Mentor from "./components/Mentor";
>>>>>>> 286606c2bfce9977e97750a2abb382970c8c64d1

const App = () => {
  return (
    <div className="text-white font-poppins overflow-x-hidden">
      <Header />
      <Landing />

      {/* <About /> */}
<<<<<<< HEAD
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
=======
      <About />
      <Mentor />
>>>>>>> 286606c2bfce9977e97750a2abb382970c8c64d1
    </div>
  );
};

export default App;