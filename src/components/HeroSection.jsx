function HeroSection({Image,Titre,SousTitre,Phrase}) {
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
                    <h1 className="text-white text-9xl text-center font-semibold">
                        {Titre}
                    </h1>
                    <p className="text-white text-6xl text-center font-semibold">
                        {SousTitre}
                    </p>
                    <div className="w-80 bg-white h-1 border-2 border-white mt-8"/>
                    <p className="text-white text-3xl text-center font-semibold mt-4">
                        {Phrase}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection