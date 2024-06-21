import { BiChevronRight } from "react-icons/bi";

function LibrarySection({ Title, Subtitle, Image, LinkTo }) {
  return (
    <div className="w-full h-screen  mt-8  bg-[size:50%]  items-center justify-center flex flex-col gap-y-2">
      <div className="flex w-fit items-center  lg:items-center   gap-x-2 sticky">
        <div className="h-4 w-full lg:w-32 mr-4 bg-main-blue" />
        <h1 className="text-greytitle text-5xl text-center mr-4  font-bold">
          {Title}
        </h1>
        <div className="h-4 w-full lg:w-32 mr-4 bg-main-blue" />
      </div>
      <p className="text-xl text-center py-2 w-4/5">{Subtitle}</p>
      <div className="relative w-7/12 h-3/4">
        <div className="bg-main-blue h-full w-full absolute opacity-15 z-0" />
        <img src={Image} className="h-full" alt="ESi Students" />
      </div>
      <a href={LinkTo} className="flex justify-center ">
        <button className="flex items-center gap-x-4 my-2 px-10 py-2 font-medium text-white bg-main-blue group">
          <span>Learn More About</span>
          <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
        </button>
      </a>
    </div>
  );
}

export default LibrarySection;
