import PresentationImg from "../assets/images/presentation.png";
import { BiChevronRight } from "react-icons/bi";
import Shapes from "../assets/images/shapes.png";

const Presentation = () => {
  return (
    <div
      className="w-full h-[calc(100vh-92px)]  bg-variant-blue1 px-16 bg-[size:50%] bg-center py-8 flex flex-col gap-y-8"
      style={{
        backgroundImage: `url(${Shapes})`,
      }}
    >
      <div className="flex w-fit items-center lg:items-start flex-col gap-y-2">
        <h1 className="text-4xl text-center text-white font-bold">
          Presentation of ESI
        </h1>
        <div className="h-4 w-full lg:w-32 bg-main-blue" />
      </div>
      <div className="relative flex flex-col lg:block items-center gap-4">
        <img
          src={PresentationImg}
          alt="presentation"
          className="h-96 object-cover"
        />
        <div className="bg-main-blue bg-opacity-75 w-full lg:max-w-lg shadow p-4 lg:absolute -bottom-10  left-[30rem] z-10">
          <p className="indent-10 text-justify text-white font-medium">
            ESI is deeply committed to research and innovation, dedicating
            itself daily to leading the way in today's cutting-edge
            technologies. Within our research laboratories, including the
            esteemed LCSI and LMCS, we continuously push boundaries, pioneering
            innovative and revolutionary solutions across diverse fields of
            study.
          </p>
        </div>
      </div>
      <div className="flex justify-center lg:mt-20">
        <button className="flex items-center gap-x-4 px-10 py-2 font-medium text-white bg-main-blue group">
          <span>Learn More About</span>
          <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
        </button>
      </div>
    </div>
  );
};

export default Presentation;
