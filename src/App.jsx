<<<<<<< HEAD
import React from 'react'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import Registration from './components/Registration'

const App = () => {
  return (
    <>
     <Carousel/>
     <Contact/>
     <Registration/>
    </>
  )
}
=======
import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";

const App = () => {
  return (
    <div className="text-white font-poppins overflow-x-hidden">
      <Header />
      <Landing />
>>>>>>> d6c3e31831ffe2a10c2d6406bb159227e1450540

      <About />

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
