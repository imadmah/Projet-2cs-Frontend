import React from "react";

import { BiChevronRight } from "react-icons/bi";

// Importing images

import img_esi from "../assets/images/esi-students_blue.png";

const Academics = (props) => {
  return (
    <div className="w-full h-[calc(100vh-92px)] bg-white   bg-[size:50%]  items-center justify-center flex flex-col gap-y-2">
      <div className="flex w-fit items-center  lg:items-center   gap-y-2">
        <div className="h-4 w-full lg:w-32 mr-4 bg-main-blue" />
        <h1 className="text-greytitle text-5xl text-center mr-4  font-bold">
          Academics
        </h1>
        <div className="h-4 w-full lg:w-32 mr-4 bg-main-blue" />
      </div>
      <p className="text-xl text-center  w-3/5">{props.text}</p>

      <img src={img_esi} className="w-7/12 h-3/4" alt="ESi Students" />
      <div className="flex justify-center ">
        <button className="flex items-center gap-x-4 my-2 px-10 py-2 font-medium text-white bg-main-blue group">
          <span>Learn More About</span>
          <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
        </button>
      </div>
    </div>
  );
};

export default Academics;
