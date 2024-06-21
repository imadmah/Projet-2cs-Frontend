import React from "react";
import Slider from "./Slider";
import bibPresentation from "../assets/images/bib_presentation.png";
const slides = [
  {
    content: (
      <div className="  flex flex-row-reverse items-center  px-48">
        <img className="w-96 " src={bibPresentation} alt="" />
        <div className="w-full h-full flex flex-col gap-4">
          <h1 className="text-6xl text-center text-main-blue  py-3">
            Presentation
          </h1>
          <p className="text-[#050E1C] text-lg font-semibold">
            The ESI Library was established with the founding of the school in
            1969. It offers users a wide range of services, primarily focusing
            on documentation. It is a specialized facility primarily dedicated
            to the field of computer science.
          </p>
          <p className="text-[#050E1C] text-lg font-semibold">
            It is arranged over three levels:
          </p>
          <ul className="list-disc ml-12">
            <li className="text-main-blue">Basement</li>
            <li className="text-main-blue">Ground floor</li>
            <li className="text-main-blue">First floor</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className="  flex flex-row-reverse items-center  px-48">
        <img className="w-96 " src={bibPresentation} alt="" />
        <div className="w-full h-full flex flex-col gap-4">
          <h1 className="text-6xl text-center text-main-blue  py-3">
            Basement
          </h1>

          <ul className="list-disc ml-12 ">
            <li className="text-[#050E1C] text-lg font-semibold">
              Contains the library Museum, which gathers resources
              (documents,materials,software) depicting the history of computing
            </li>
            <li className="text-[#050E1C] text-lg font-semibold">
              A section of the document collection (old versions and editions)
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    content: (
      <div className=" flex flex-row-reverse items-center  gap-12 px-48">
        <img className="w-96" src={bibPresentation} alt="" />
        <div className="w-full h-full flex flex-col gap-4">
          <h1 className="text-6xl text-center text-main-blue  py-3">
            Ground floor
          </h1>
          <ul className="list-disc ml-12">
            <li className="text-lg font-semibold ">
              A large reading room for students, accommodating up to 160
              students.
            </li>
            <li className="text-lg font-semibold">
              two desktop computers for document research
            </li>
            <li className="text-lg font-semibold">
              A television for display purposes
            </li>
            <li className="text-lg font-semibold">A complaints register</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    content: (
      <div className="  flex flex-row-reverse items-center  gap-12  px-48">
        <img className="w-96" src={bibPresentation} alt="" />
        <div className="w-full h-full flex flex-col gap-4">
          <h1 className="text-6xl text-center text-main-blue  py-3">
            First flour
          </h1>
          <ul className="list-disc ml-12 ">
            <li className="text-lg font-semibold">
              A reading room for teachers.
            </li>
            <li className="text-lg font-semibold">Administrative offices.</li>
            <li className="text-lg font-semibold">
              A counter dedicated to book loans and returns.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
];

function BibPresentation() {
  return (
    <div className="w-full h-[520px]  px-32 bg-[#F6FAFF]">
      <div className="flex items-center ">
        <Slider slides={slides} />
      </div>
    </div>
  );
}

export default BibPresentation;
