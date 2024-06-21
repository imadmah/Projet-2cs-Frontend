import React, { useState } from "react";

const MiniCard = ({ imageUrl, initialText, secondText }) => {
  const [text, setText] = useState(initialText);

  const handleMouseEnter = () => {
    setText(secondText);
  };

  const handleMouseLeave = () => {
    setText(initialText);
  };

  return (
    <div
      className="flex gap-x-4 items-center bg-white group transition-shadow duration-300 hover:shadow-lg relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-[90px] h-[90px] flex items-center justify-center bg-main-blue z-10">
        <img className="w-[54px] h-[54px] z-10" src={imageUrl} alt="" />
      </div>
      <p
        className={`text-center font-bold ${
          text === initialText ? "text-xl" : "text-base"
        } text-main-blue leading-loose group-hover:text-white transition-colors duration-300 relative z-20`}
      >
        {text}
      </p>
      <div
        className="absolute inset-0 bg-gradient-to-r from-main-blue
       to-main-blue group-hover:from-main-blue group-hover:to-main-blue transition-transform
        duration-1000 transform scale-x-0 group-hover:scale-x-100 origin-left z-0"
      />
    </div>
  );
};

export default MiniCard;
