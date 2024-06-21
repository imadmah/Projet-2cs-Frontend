/* eslint-disable react/prop-types */
import React from 'react'

function HeroSection2({Image,Titre,Phrase}) {
  return (
    <div className="min-h-screen relative">
            <img
                className="w-full h-full object-cover absolute top-0"
                src={Image}
                alt="Recherche"
            />
            <div className="bg-[#0F2E3E] h-full w-full absolute opacity-50 z-0"/>
            <div className="z-10 h-full relative w-full">
                <div className="flex flex-col items-center justify-center h-screen gap-y-9 pt-24 font-sans">
                    <p className="text-white text-6xl text-center font-semibold w-3/5 leading-relaxed">
                        {Titre}
                    </p>
                    <p className="text-white text-3xl text-center font-semibold mt-4 w-4/5">
                        {Phrase}
                    </p>
                </div>
            </div>
        </div>
  )
}

export default HeroSection2