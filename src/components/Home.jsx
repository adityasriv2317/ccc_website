import React from "react";
import { useState, useEffect } from "react";

import Landing from "./Landing";
import About from "./About";
import Mentor from "./Mentor";
import Contact from "./Contact";
import Header from "./Header";
import Splash from "./Splash";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <Splash />
      ) : (
        <>
          <Header />
          <Landing />
          <About />
          <Mentor />
          <Contact />
        </>
      )}
    </div>
  );
};

export default Home;
