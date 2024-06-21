
import React from "react";
import bibPresentation from "../assets/images/bib_presentation.png";

const PartnershipPresentation = ({Text}) => {
        return (
            <div className="h-90  flex flex-row-reverse items-center justify-center gap-12 px-48 mt-0">
                <img className="w-90 h-80" src={bibPresentation} alt="" />
                <div className="w-full h-full flex justify-center flex-col gap-4">
                    <h1 className="text-3xl text-center text-main-blue font-bold py-3">
                        Presentation
                    </h1>
                    <p className="text-[#050E1C] text-lg font-bold text-center">
                        {Text}
                    </p>
                   
                </div>
            </div>
        );
};

export default PartnershipPresentation;