/* eslint-disable react/prop-types */
import React from 'react'
import RegulationsDocument from './RegulationsDocument'

function LaboratoryRegulationsSection({Title,Description,Regulations}) {
  return (
    <div
        className="w-full h-full pb-10 bg-[#F6FAFF]"
    >
        <h1 className="text-5xl text-center text-main-blue font-bold py-3">
            {Title}
        </h1>
        <div className="flex flex-col items-center justify-center gap-8"> 
            <p className="text-xl font-bold text-center py-2 w-4/5 text-variant-blue1">
                {Description}
            </p>
            <div className='flex flex-col w-full items-center gap-4'>
                {Regulations.map((item, index) => (
                    <RegulationsDocument key={index} Title={item.title} Link={item.link}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default LaboratoryRegulationsSection