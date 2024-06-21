import EsiStudentsImage from "../assets/images/esi-students.png";
import Header from "./Header";
import { BiChevronDown } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="w-full relative">
      <img
        className="w-full h-full object-cover absolute top-0"
        src={EsiStudentsImage}
        alt="Esi students"
      />
      <div className="bg-[#0F2E3E] h-full w-full absolute opacity-70 mix-blend-multiply z-0" />
      <div className="z-10 h-full relative w-full">
        <div className="flex flex-col items-center justify-center min-h-screen gap-y-9 pt-24 font-sans">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-semibold">
            Welcome to
          </h1>
          <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-semibold">
            Higher National School of Computer Science
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
