/* eslint-disable react/prop-types */
import React, { useState } from 'react';

function TrainingThemesSection({Title,Themes}) {
  const [lastClickedIndex, setLastClickedIndex] = useState(null);
    
  const handleCardClick = (index) => {
    setLastClickedIndex(index);
  };
  console.log(Title);

  return (
    <div
      className="w-full bg-[#F6FAFF]"
    >
      <h1 className="text-5xl text-center text-main-blue font-bold py-3">
        {Title}
      </h1>
      <div className="flex py-8 gap-4 w-10/12 mx-auto flex-wrap justify-center">
        {Themes.map((item, index) => (
          lastClickedIndex === index ? (
            <div
              key={index} 
              className="h-72 rounded-[5px] justify-between bg-white basis-[calc(52%+16px)] shadow-xl"
            >
              <div className='flex flex-col justify-between h-full'>
                <div className='flex'>
                  <div className="flex flex-col items-center w-[calc(50%-8px)]">
                    <img src={"/images/"+item.image} className="object-cover h-56"/>
                  </div>
                  <div className="flex flex-col items-center p-2">
                    <ul className="list-disc ml-4 p-2">
                      {item.content.map((T, index) => (
                        <li className="text-main-black font-bold text-sm" key={index}>
                          {T.text} <span className="text-main-blue">{T.duration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className=" text-main-blue font-bold text-xl text-center flex items-center justify-center py-2">
                  {item.title}
                </p>
              </div>
            </div>
          ):(
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className="shadow-xl h-72 rounded-[5px] flex flex-col justify-between bg-white basis-[26%]"
            >
              <img src={"/images/"+item.image} className="object-cover h-56"/>
              <p className="text-main-blue font-bold text-xl text-center flex items-center justify-center py-2">
                {item.title}
              </p>
            </div>
          )
        ))}
      </div>
    </div>
  )
}

export default TrainingThemesSection