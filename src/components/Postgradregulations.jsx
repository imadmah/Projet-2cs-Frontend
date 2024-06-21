import React from "react";
import RegulationsDocument from "./RegulationsDocument";


const Postgradregulations = () => {
  return (
    <div>
      <h1 className="text-4xl text-center text-main-blue font-bold py-8">
      Doctoral Re-enrollment Procedure
      </h1>
      <div className="flex flex-col items-center justify-center gap-8">
        <p className="text-xl font-bold text-center py-2 w-4/5 text-variant-blue1">
          {`This section provides access to important regulations and documents that
        you may need..`}
        </p>
        <div className="flex flex-col w-full items-center mb-8 gap-4">
          <RegulationsDocument Title={"Guide de procédure de réinscription en doctorat via la plateforme PROGRES"} />
          <RegulationsDocument Title={"Guide d’utilisation PROGRES pour soutenance"} />
          <RegulationsDocument Title= {"Situation formation doctorale"} />
        </div>
      </div>
    </div>
  );
};

export default Postgradregulations;
