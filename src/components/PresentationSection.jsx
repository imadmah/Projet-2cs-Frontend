import { BiChevronRight } from "react-icons/bi";
import Shapes from "../assets/images/shapes.png";
import { Link } from "react-router-dom";

function PresentationSection({
  Titre,
  Image,
  Text,
  ButtonText,
  ButtonText2,
  LinkTo,
}) {
  return (
    <div
      className="relative w-full h-fit bg-[#0F2E3E] px-4 md:px-8  md:py-2 bg-center flex flex-col"
      style={{
        backgroundImage: `url(${Shapes})`,
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center lg:items-start flex-col gap-y-2 mb-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-white font-bold">
          {Titre}
        </h1>
        <div className="h-2 md:h-3 w-16 md:w-24 bg-main-blue" />
      </div>
      <div className="w-full flex flex-col md:flex-row items-center md:items-between pb-4 gap-4">
        <img
          src={Image}
          alt="presentation"
          className="w-full md:w-1/2 h-auto md:h-96 object-cover"
        />
        <div className="bg-main-blue bg-opacity-85 w-full md:w-[50%] h-auto md:h-80 mt-5 shadow py-4 px-6 md:px-8 flex items-center justify-center">
          <p className="indent-6 md:indent-10 text-white font-semibold text-lg  lg:text-lg xl:text-xl md:text-base  text-justify">
            {Text}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 items-center justify-end">
        <a href={LinkTo}>
          <button className="flex items-center gap-x-4 px-6 md:px-10 py-2 font-medium text-white bg-main-blue group">
            <span>{ButtonText}</span>
            <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
          </button>
        </a>
        {ButtonText2 && (
          <a href={LinkTo}>
            <button className="flex items-center gap-x-4 px-6 md:px-10 py-2 font-medium text-white bg-main-blue group">
              <span>{ButtonText2}</span>
              <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
            </button>
          </a>
        )}
      </div>
      {/* Additional styling for the blue bars */}
      <div className="absolute top-10 right-0 h-16 md:h-24 w-2 md:w-4 bg-main-blue" />
      <div className="absolute bottom-0 left-0 h-16 md:h-24 w-2 md:w-4 bg-main-blue" />
    </div>
  );
}

export default PresentationSection;
