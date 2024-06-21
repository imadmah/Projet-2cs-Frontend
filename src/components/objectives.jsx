

const Objectives = ({ ObjectivesItems, Title }) => {
    return (
      <div className="w-full h-[calc(100vh-92px)]  px-16 bg-[size:50%] items-center justify-center  flex flex-col gap-y-8 mt-6">
            <div className="flex items-center flex-col gap-y-2 mb-6 justify-center">
                <h1 className="text-3xl text-center text-main-blue font-bold ">
                     {Title}
                </h1>
                </div>
        <ul className="flex divide-x-2 divide-main-blue ">
          {ObjectivesItems.map((item, index) => (
            <li className="px-2" key={index}>
              <ObjectivesItem
                i={index}
                top ={item.top}
                description={item.description}
                imageUrl={item.imageUrl}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  function ObjectivesItem({
    i,
    description,
    top,
    imageUrl,
  }) {
    return (
      <div className="flex items-center px-16">
        <div className={` rounded-lg  flex flex-col w-72 items-start`}>
  
          {/* Image */}
          <img src={imageUrl} alt="Ideal Item" className="w-72 h-36 mb-2" />
          {/* Text Content */}
          <div className="flex flex-col  items-start justify-start ">
            {/* top */}
            <p className=" text-xl  font-bold">{top}</p>
            {/* description */}
            <p className=" text-md text-justify mt-2">{description}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Objectives;