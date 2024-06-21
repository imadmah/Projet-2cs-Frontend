import React from "react";
import { BiChevronRight } from "react-icons/bi";

function TrainingSection() {
  return (
    <div className="w-full h-[calc(100vh-92px)] bg-[#F6FAFF]">
      <h1 className="text-5xl text-center text-main-blue font-bold py-3">
        Tailored Training
      </h1>
      <div className="flex gap-8 py-4 justify-center">
        <img src="/images/32407 1.png" className="w-[40%] object-contain" />
        <div className="w-[40%] flex flex-col justify-between p-4 gap-6">
          <p className="text-[#050E1C] text-3xl font-bold">
            Explore and request tailored training to suit your needs.
          </p>
          <p className="text-[#000] text-xl font-light text-justify indent-12">
            Discover a wide range of professional training courses designed to
            propel your career to new heights. Explore our programs today and
            let us guide you to professional success.
          </p>
          <a href="/training-themes" className="flex justify-start">
            <button className="flex items-center gap-x-4 px-10 py-2 font-medium text-white bg-blue-600 group">
              <span>See training themes</span>
              <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrainingSection;
