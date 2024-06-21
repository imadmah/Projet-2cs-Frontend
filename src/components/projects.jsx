import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiArrowBack } from "react-icons/bi";


function Projects({Titre,Image,Text,settings}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode : true,
  };
  const customSettings = {
    ...settings,
    dots: true,
    appendDots: dots => (
      <ul className="flex justify-center space-x-2 p-2">{dots}</ul>
    ),
    customPaging: i => (
      <button className="w-3 h-3 bg-main-blue rounded-full focus:outline-none"></button>
    ),
    dotsClass: "slick-dots custom-slick-dots"
  };
  return (
    <div className=" items-center w-full h-[calc(100vh-150px)]  bg-[size:50%] bg-center py-2 flex flex-col mt-6">
       <div className=" flex-col gap-y-6 mb-6 justify-center items-center ">
                    <h1 className="text-3xl text-center text-main-blue font-bold ">
                        {Titre}
                    </h1>
       </div> 
    <Slider className='w-[95%] h-[calc(100vh-150px)] mt-6' {...settings}{...customSettings}>
      <div className="focus:outline-none">
        <div className=' flex items-center justify-center'>
          <div className="w-[70%] flex flex-row mb-3 shadow-lg rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <img
              src={Image}
              alt="presentation"
              className="h-80 w-1/3 object-cover"
            />
            <div className="h-80 w-2/3 p-8 flex flex-col items-start">
              < p className="text-main-black font-semibold">
                {Text}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='h-full focus:outline-none'>
        <div className=' flex items-center justify-center'>
          <div className="w-[70%] flex flex-row mb-3 shadow-lg rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <img
              src={Image}
              alt="presentation"
              className="h-80 w-1/3 object-cover"
            />
            <div className="h-80 w-2/3 p-8 flex flex-col items-start">
              < p className="text-main-black font-semibold">
                {Text}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="focus:outline-none">
        <div className=' flex items-center justify-center'>
          <div className="w-[70%] flex flex-row mb-3 shadow-lg rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <img
              src={Image}
              alt="presentation"
              className="h-80 w-1/3 object-cover"
            />
            <div className="h-80 w-2/3 p-8 flex flex-col items-start">
              <p className="text-main-black font-semibold">
                {Text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slider>
    <style jsx>{`
        .custom-slick-dots li button:before {
          content: '';
          display: block;
          width: 12px;
          height: 12px;
          background-color: #D9D9D9;
          border-radius: 50%;
        }
        .custom-slick-dots li.slick-active button:before {
          background-color: #0075C9; 
        }
      `}</style>

<div className="flex items-start justify-start mt-4 mb-10">
  <button className="flex items-center gap-x-4 px-10 py-2 mt-4 font-medium text-white bg-main-blue group">
    <span>See more</span>
    <BiArrowBack className="text-lg group-hover:translate-x-2 transition rotate-180" />
    </button>
</div>
</div>

  );
}

export default Projects;