import React from "react";
import { BiChevronRight } from "react-icons/bi";

const Academics = (props) => {
  return (
    <div className="w-full bg-variant-white mt-8 bg-[size:50%] items-center justify-center flex flex-col gap-y-4 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row w-full items-center gap-y-2 lg:gap-x-2 lg:justify-center">
        <div className="h-4 w-full lg:w-32 mb-2 lg:mb-0 bg-main-blue" />
        <h1 className="text-greytitle text-3xl lg:text-4xl text-center font-bold">
          {props.Title}
        </h1>
        <div className="h-4 w-full lg:w-32 mb-2 lg:mb-0 bg-main-blue" />
      </div>
      <p className="text-base lg:text-lg text-center px-2">{props.Text}</p>
      <img
        src={props.image}
        className="w-full lg:w-7/12 h-auto mt-4 lg:mt-6"
        alt="ESi Students"
      />
      <a href={props.LinkTo} className="flex justify-center mt-4 lg:mt-6">
        <button className="flex items-center gap-2 px-6 py-2 font-medium mb-8 text-white bg-main-blue group">
          <span>Learn More About</span>
          <BiChevronRight className="text-lg group-hover:translate-x-2 transition-transform" />
        </button>
      </a>
    </div>
  );
};

export default Academics;
