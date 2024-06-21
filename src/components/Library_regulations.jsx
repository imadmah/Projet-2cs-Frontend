import React from "react";
import RegulationsDocument from "./RegulationsDocument";
const Libraryregulations = () => {
  return (
    <div>
      <h1 className="text-4xl text-center text-main-blue font-bold py-8">
        Library’s regulations
      </h1>
      <div className="flex flex-col items-center justify-center gap-8">
        <p className="text-xl font-bold text-center py-2 w-4/5 text-variant-blue1">
          {`This section provides access to important regulations and documents that
        you may need..`}
        </p>
        <div className="flex flex-col w-full items-center mb-8 gap-4">
          <RegulationsDocument Title={"Réglementation Bibliothéque"} />
        </div>
      </div>
    </div>
  );
};

export default Libraryregulations;
