import React from 'react';
import logo from '../assets/CCC.png'

const Splash = () => {

  return (
    <div
      className={'splashDiv flex-col fixed inset-0 flex justify-center items-center bg-black z-50 transition-opacity duration-500'}
    >
      <div className="img w-24 h-24 animate-spin">
          <img src={logo} alt="CCC" />
      </div>

      <div className="txt text-4xl mx:text-lg flex justify-center items-center space-x-8 mt-14">
        <span className="font-jetbrains text-white">THINK</span>
        <span className="font-jetbrains text-white">DEVELOP</span>
        <span className="font-jetbrains text-white">DEPLOY</span>
      </div>
    </div>
  );
};

export default Splash;
