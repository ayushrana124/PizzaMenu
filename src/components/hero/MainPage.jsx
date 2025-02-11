import React from 'react'
import { useState } from "react";

const MainPage = () => {

  const handleClick = () => {
    window.location.href = "#full-menu"; // Change to your desired URL
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-white to-yellow-400 overflow-hidden relative">
      {/* Welcome Text */}
      <div className='absolute top-[18%] flex items-center justify-center flex-col p-3'>
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 max-w-[85%]">
        Welcome to <span className='font-light'>Diamond Pizza & Restaurant</span>  
      </h1>

      {/* Description */}
      <p className="text-lg md:text-xl text-gray-600 max-w-lg mb-6">
        Gather your friends and family and enjoy the best pizza in town. 
        Freshly made and delivered hot!
      </p>

      {/* CTA Button */}
      <button onClick={()=> handleClick()} className="bg-primary  hover:text-gray-800 font-semibold px-6 p-2 rounded-full text-lg shadow-lg hover:bg-white text-white transition-all outline-1 outline-amber-400">
        View Our Menu
      </button>
      </div>

      {/* Half Pizza Image */}
      <div className="absolute top-[60%] md:top-[60%] w-[70%] md:w-[50%]">
        <img
          src="../Pizza1.png"
          alt="Half Pizza"
          className="w-full mx-auto overflow-hidden animate-[spin_10s_ease-in-out_infinite]"
        />
      </div>
    </div>
  );
}

export default MainPage;
