import React from "react";

// Information component definition
const Information = ({ infoData, Title }) => {
  return (
    <div className="w-full  bg-variant-white flex flex-col items-center justify-center gap-y-4 p-4">
      <div className="flex flex-col lg:flex-row items-center w-full gap-y-2 lg:gap-y-0 lg:justify-center">
        <div className="h-2 w-full lg:w-32 bg-main-blue mb-2 lg:mb-0 lg:mr-4" />
        <h1 className="text-greytitle text-3xl lg:text-5xl text-center font-bold">
          {Title}
        </h1>
        <div className="h-2 w-full lg:w-32 bg-main-blue mt-2 lg:mt-0 lg:ml-4" />
      </div>
      <ul className="flex flex-col lg:flex-row w-full items-center justify-center flex-wrap gap-4">
        {infoData.map((item, index) => (
          <li className="w-full sm:w-1/2 lg:w-auto px-2" key={index}>
            <InfoItems
              i={index}
              number={item.number}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

// InfoItems component definition
function InfoItems({ i, description, number, imageUrl }) {
  return (
    <div
      key={i}
      className="rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col items-center bg-white shadow-md"
    >
      {/* Image */}
      <img
        src={imageUrl}
        alt="Info Item"
        className="w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 mb-2"
      />

      {/* Text Content */}
      <div className="flex flex-col items-center justify-center">
        {/* number */}
        <p className="text-main-blue text-3xl sm:text-4xl lg:text-5xl font-bold">
          {number}
        </p>
        {/* description */}
        <h3 className="text-variant-blue1 text-center text-xl sm:text-2xl lg:text-3xl font-bold mt-4">
          {description}
        </h3>
      </div>
    </div>
  );
}

// Example usage of the Information component with input data

export default Information;
