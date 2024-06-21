import { BiArrowBack } from "react-icons/bi";
//import Shapes from "../../../assets/images/shapes.png";

function PresentationSection2Inv({Titre,Image,Text,ButtonText,LinkTo}) {
  return (
    <div
                className="relative w-full h-[calc(100vh-92px)] px-16 bg-[size:50%] bg-center py-2 flex flex-col mt-6">
                <div className="flex items-center flex-col gap-y-2 mb-6 justify-center">
                    <h1 className="text-5xl text-center text-main-blue font-bold ">
                        {Titre}
                    </h1>
                </div>
                <div className="w-full flex flex-row items-between mb-3">
                <img
                        src={Image}
                        alt="presentation"
                        className="h-80 w-[50%] object-cover"
                    />
                    <div className="bg-main-blue bg-opacity-85 w-[50%] h-80 -mx-5 mt-5 shadow py-4 px-8 z-10 flex flex-col items-start justify-center min-h-80 max-h-80">
                        <p className="indent-10 text-white font-semibold text-l text-justify overflow-hidden max-h-64 text-ellipsis">
                            {Text}
                        </p>
                        <a href={LinkTo} className="flex items-start justify-start">
                            <button className="flex items-center gap-x-4 px-10 py-2 mt-4 font-medium text-main-blue bg-white group">
                            <span>{ButtonText}</span>
                            <BiArrowBack className="text-lg group-hover:translate-x-2 transition rotate-180" />
                            </button>
                        </a>
                    </div>
                   
                </div>
                <div className="flex justify-center">
        
                </div>
                <div className="absolute top-10 right-0 h-24 w-4 bg-main-blue" />
                <div className="absolute bottom-0 left-0 h-24 w-4 bg-main-blue" />
                <div className="absolute bottom-0 right-0 h-4 w-52 bg-main-blue" />
            </div>
  )
}

export default PresentationSection2Inv