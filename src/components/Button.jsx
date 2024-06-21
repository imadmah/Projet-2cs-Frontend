import React, { useState } from 'react';
import { BiChevronRight } from 'react-icons/bi';

function Button() {
    const [isClicked, setIsClicked] = useState(false);
      
        const handleClick = () => {
          setIsClicked(true);
          setTimeout(() => setIsClicked(false), 200); // Reset after 200ms
        };
  return (
    <button
      onClick={handleClick}
      className={`relative flex items-center gap-x-4 my-2 px-10 py-2 font-medium text-white bg-main-blue group overflow-hidden transition-transform ${
        isClicked ? 'scale-105' : 'hover:-translate-y-1'
      }`}
    >
      <span className="relative z-10">Learn More About</span>
      <BiChevronRight className="text-lg relative z-10 group-hover:translate-x-2 transition-transform" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></div>
    </button>
  )
}

export default Button