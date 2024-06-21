/* eslint-disable react/prop-types */
import React from "react";

function FormationCard({ Image, Title, Description, Duration }) {
  return (
    <div className="h-80 w-56 bg-white shadow-xl">
      <img src={`/images/${Image}`} className="h-[60%] w-full object-cover" />
      <div className="flex flex-col justify-between p-4">
        <p className="text-[#444] font-semibold text-base text-center max-h-[36%] overflow-hidden">
          {Title}
        </p>

        <div className="flex justify-center items-center gap-2 place-self-end justify-self-end max-w-max max-h-[20%]">
          <img src="/images/Group 134983.svg" />
          <p className="text-[#35DF65] text-xl font-semibold">{Duration}</p>
        </div>
      </div>
    </div>
  );
}

export default FormationCard;
