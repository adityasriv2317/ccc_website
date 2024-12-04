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
      <Contact />
      <Registration/>
    </div>
  );
};

export default App;