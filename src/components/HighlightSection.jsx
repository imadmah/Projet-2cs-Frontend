import Button from './Button';

function HighlightSection({Title,Subtitle,Image}) {
  return (
    <div className="container mx-auto w-full mt-8  items-center justify-center flex flex-col gap-y-8 py-8">
      <div className="flex items-center gap-x-6">
        <div className="h-4 w-32 bg-main-blue transition-transform hover:scale-x-150" />
        <h1 className="text-greytitle text-5xl text-center font-bold">
          {Title}
        </h1>
        <div className="h-4 w-32 bg-main-blue" />
      </div>
      <div className="relative w-7/12 ">
        <img src={Image} className="w-full" alt="ESi Students" />
        <div className="bg-variant-blue1 h-full w-full absolute top-0 opacity-75 z-0"/>
        <p className="text-xl font-bold p-20 text-center leading-loose text-variant-blue2 absolute top-0 left-0">
            {Subtitle}
        </p>
      </div>
      <Button/>
    </div>
  )
}

export default HighlightSection