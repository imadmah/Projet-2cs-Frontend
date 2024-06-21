import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import Image1 from "../assets/images/AI_Hack.png"; 
import Image2 from "../assets/images/Huawei.png";

const AchievementsSection = () => {
  return (
    <div className="flex flex-col gap-y-8 py-12 items-center justify-center">
        <div className="flex w-fit items-center  lg:items-center gap-y-2">
        <div className="h-4 w-full lg:w-24  bg-main-blue" />
        <h1 className="text-4xl  mr-8 ml-8 text-greytitle font-bold">Performance & Success</h1>
        <div className="h-4 w-full lg:w-24  bg-main-blue" />
      </div>
      
      <div className="w-[70%] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center md:items-center text-center md:text-left justify-center">
            <img src={Image1} alt="AI Hackathon" className="w-[80%] h-auto object-cover" />
            <h2 className="mt-4 text-2xl font-bold text-main-blue text-center">
             Huawei ICT Competition, a student from ESI was part of the Cloud team that secured 1st place 
            </h2>
            <p className="mt-2 text-gray-700">
            Two teams of Algerian students won first place for the second consecutive year at the global finals of the "Huawei ICT Competition". The first team, specializing in networking, won the Grand Prize, while the second team, specializing in Cloud, won first place. In total, there were six students, accompanied by two tutors.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-center text-center md:text-left">
            <h2 className="text-2xl font-bold text-main-blue text-center">
              2nd place in the largest AI hackathon in MENA region
            </h2>
            <p className="mt-2 text-gray-700 mb-8">
              Two students from the school, Yousra FARHANI and Abla HAGANI, won second place in the largest artificial intelligence hackathon in the MENA region during their participation in "Hack AI" which took place in August in Tunisia.
            </p>
            <img src={Image2} alt="Huawei ICT Competition" className="mt-4 w-[80%] h-auto object-cover" />
          </div>
        </div>
        <div className="flex justify-center mt-8">
         <button className="flex items-center gap-x-4 px-10 py-2 mt-4 font-medium text-white bg-main-blue group">
            <span>See more</span>
            <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
         </button>
        </div>
      </div>
    </div>
  );
};

export default AchievementsSection;
