import React from "react";

// Importing images

const Ideals = ({ IdealsItems }) => {
  return (
    <div className="w-full  bg-variant-white px-4 md:px-8 lg:px-16 items-center justify-center flex flex-col gap-y-8">
      <div className="flex flex-col lg:flex-row w-fit items-center gap-y-2">
        <div className="h-4 w-full lg:w-24 bg-main-blue" />
        <h1 className="text-3xl md:text-4xl lg:text-4xl mx-4 lg:mx-8 text-greytitle font-bold">
          Ideals
        </h1>
        <div className="h-4 w-full lg:w-24 bg-main-blue" />
      </div>
      <ul className="flex flex-col lg:flex-row divide-y-2 lg:divide-x-2 lg:divide-y-0 divide-main-blue">
        {IdealsItems.map((item, index) => (
          <li className="px-2 py-4 lg:py-0" key={index}>
            <IdealsItem
              i={index}
              number={item.number}
              description={item.description}
              imageUrl={item.imageUrl}
              icon_title={item.icon_title}
              imageUrl2={item.imageUrl2}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

function IdealsItem({
  i,
  description,
  number,
  imageUrl,
  imageUrl2,
  icon_title,
}) {
  return (
    <div className="flex flex-col items-center lg:items-start px-4">
      <div className="rounded-lg flex flex-col w-full md:w-72 items-center lg:items-start">
        <div className="w-full flex flex-col items-center mb-4 justify-center">
          <img
            src={imageUrl2}
            alt="ideal-icon"
            className="w-16 h-16 lg:w-12 lg:h-12 md:w-8 md:h-8"
          />
          <h3 className="text-center font-bold mt-1 text-main-blue">
            {icon_title}
          </h3>
        </div>
        <img
          src={imageUrl}
          alt="Ideal Item"
          className="w-full h-28 lg:h-36 lg:w-64 md:w-52 mb-2"
        />
        <div className="flex flex-col items-start justify-start">
          <p className="text-lg md:text-xl lg:text-lg font-bold">{number}</p>
          <p className="text-sm md:text-md lg:text-sm text-justify mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ideals;
