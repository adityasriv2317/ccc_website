import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Registration from "./components/Registration";
import Home from "./components/Home";
import Splash from "./components/Splash";
// import Carousel from './components/Carousel'

const App = () => {
  return (
    <div className="text-white font-poppins overflow-x-hidden">
      {/* <About /> */}
{/* <Splash /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
