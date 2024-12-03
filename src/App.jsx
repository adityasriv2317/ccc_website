import React from "react";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Mentor from "./components/Mentor";

const App = () => {
  return (
    <div className="text-white font-poppins overflow-x-hidden">
      <Header />
      <Landing />

      {/* <About /> */}
      <About />
      <Mentor />
    </div>
  );
};

export default App;