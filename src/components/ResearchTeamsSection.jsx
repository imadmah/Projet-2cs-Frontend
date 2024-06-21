import React from 'react'
import Slider from './Slider'

const slides = [
    {
      content: (
        <div className="h-96 flex items-center justify-center gap-12 py-10 px-12">
          <img className='w-80' src="/images/Rectangle 1032.png" alt="" />
          <div className='w-full h-full flex flex-col gap-4'>
            <p className='text-[#050E1C] text-3xl font-bold'>Artificial intelligence research team</p>
            <div className='grid grid-cols-3 gap-4'>
              {[1,2,3,4,5,6,7].map((_, index) => (
                <div
                  key={index}
                  className="p-2 flex"
                >
                  <img src="/images/Public-Health-Research.png" className='w-16 h-16 object-cover' />
                  <p className='w-40 ml-4 text-xl font-bold flex items-center text-variant-blue1'>Dr Salime</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="h-96 flex items-center justify-center gap-12 py-10 px-12">
          <img className='w-80' src="/images/Rectangle 1032.png" alt="" />
          <div className='w-full h-full flex flex-col gap-4'>
            <p className='text-[#050E1C] text-3xl font-bold'>Artificial intelligence research team</p>
            <div className='grid grid-cols-3 gap-4'>
              {[1,2,3,4,5,6,7].map((_, index) => (
                <div
                  key={index}
                  className="p-2 flex"
                >
                  <img src="/images/Public-Health-Research.png" className='w-16 h-16 object-cover' />
                  <p className='w-40 ml-4 text-xl font-bold flex items-center text-variant-blue1'>Dr Salime</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="h-96 flex items-center justify-center gap-12 py-10 px-12">
          <img className='w-80' src="/images/Rectangle 1032.png" alt="" />
          <div className='w-full h-full flex flex-col gap-4'>
            <p className='text-[#050E1C] text-3xl font-bold'>Artificial intelligence research team</p>
            <div className='grid grid-cols-3 gap-4'>
              {[1,2,3,4,5,6,7].map((_, index) => (
                <div
                  key={index}
                  className="p-2 flex"
                >
                  <img src="/images/Public-Health-Research.png" className='w-16 h-16 object-cover' />
                  <p className='w-40 ml-4 text-xl font-bold flex items-center text-variant-blue1'>Dr Salime</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="h-96 flex items-center justify-center gap-12 py-10 px-12">
          <img className='w-80' src="/images/Rectangle 1032.png" alt="" />
          <div className='w-full h-full flex flex-col gap-4'>
            <p className='text-[#050E1C] text-3xl font-bold'>Artificial intelligence research team</p>
            <div className='grid grid-cols-3 gap-4'>
              {[1,2,3,4,5,6,7].map((_, index) => (
                <div
                  key={index}
                  className="p-2 flex"
                >
                  <img src="/images/Public-Health-Research.png" className='w-16 h-16 object-cover' />
                  <p className='w-40 ml-4 text-xl font-bold flex items-center text-variant-blue1'>Dr Salime</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="h-96 flex items-center justify-center gap-12 py-10 px-12">
          <img className='w-80' src="/images/Rectangle 1032.png" alt="" />
          <div className='w-full h-full flex flex-col gap-4'>
            <p className='text-[#050E1C] text-3xl font-bold'>Artificial intelligence research team</p>
            <div className='grid grid-cols-3 gap-4'>
              {[1,2,3,4,5,6,7].map((_, index) => (
                <div
                  key={index}
                  className="p-2 flex"
                >
                  <img src="/images/Public-Health-Research.png" className='w-16 h-16 object-cover' />
                  <p className='w-40 ml-4 text-xl font-bold flex items-center text-variant-blue1'>Dr Salime</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

function ResearchTeamsSection() {
  return (
    <div
        className="w-full h-[calc(100vh-92px)] bg-[#F6FAFF]"
    >
        <h1 className="text-5xl text-center text-main-blue font-bold py-3">
            Reasearch teams
        </h1>
        <div className="flex items-center justify-center gap-9"> 
         <Slider slides={slides} />
        </div>
    </div>
  )
}

export default ResearchTeamsSection