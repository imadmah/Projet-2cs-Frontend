/* eslint-disable react/prop-types */
import { BiChevronRight } from "react-icons/bi";
import Shapes from "../assets/images/shapes.png";
import { Link } from "react-router-dom";

function PresentationSection2({ Titre, Image, Text, ButtonText, LinkTo }) {
  return (
    <div className="relative w-full h-[calc(100vh-92px)] px-16 bg-[size:50%] bg-center py-2 flex flex-col">
      <div className="flex items-center lg:items-start flex-col gap-y-2 mb-6">
        <h1 className="text-5xl text-center text-main-blue font-bold">
          {Titre}
        </h1>
        <div className="h-4 w-24 bg-[#035FB0]" />
      </div>
      <div className="w-full flex flex-row-reverse items-between mb-3">
        <img src={Image} alt="presentation" className="h-80 object-cover" />
        <div className="bg-[#035FB0] bg-opacity-85 w-[50%] h-80 -mx-5 mt-5 shadow py-4 px-8 z-10 flex items-center justify-center min-h-80 max-h-80">
          <p className="indent-10 text-white font-semibold text-xl text-justify overflow-hidden max-h-64 text-ellipsis">
            {Text}
          </p>
        </div>
      </div>
      <a href={LinkTo} className="flex justify-center">
        <button className="flex items-center gap-x-4 px-10 py-2 font-medium text-white bg-[#035FB0] group">
          <span>{ButtonText}</span>
          <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
        </button>
      </a>
      <div className="absolute top-10 right-0 h-24 w-4 bg-[#035FB0]" />
      <div className="absolute bottom-0 left-0 h-24 w-4 bg-[#035FB0]" />
      <div className="absolute bottom-0 right-0 h-4 w-52 bg-[#035FB0]" />
    </div>
  );
}

export default PresentationSection2;
