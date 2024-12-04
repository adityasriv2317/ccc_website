import React, { useEffect, useState } from 'react';
import logo from '../assets/CCC.png'

const Splash = () => {

  return (
    <div
      className={'opacity-100 pointer-events-auto fixed inset-0 flex justify-center items-center bg-black z-50 transition-opacity duration-500'}
    >
      <div className="w-16 h-16 rounded-full animate-spin">
          <img src={logo} alt="CCC" />
      </div>
    </div>
  );
};

export default Splash;
