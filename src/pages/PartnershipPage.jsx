import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PartnershipImg from "../assets/images/PartnershipImg.png";
import PartnershipPresImg from "../assets/images/PartnershipPresImg.png";
import internationalImg from "../assets/images/internationalImg.png";
import nationalImg from "../assets/images/nationalImg.png";
import PresentationSection from "../components/PresentationSection";
import PresentationSection2 from "../components/PresentationSection2";
import PresentationSection2Inv from "../components/PresentationSection2Inv";
import Projects from "../components/projects";
import AIproject from "../assets/images/AIproject.png";
import OurPartners from "../components/ourPartners";
import Footer from "../components/Footer";

const PartnershipPage = () => {
  return (
    <div className="relative">
      <Header />
      <HeroSection
        Image={PartnershipImg}
        Titre={
          <>
            <span className="text-8xl">Partnership/</span>
            <span className="text-8xl text-[#035FB0]">Cooperation</span>
          </>
        }
        Phrase='"Together we can unlock a wealth of potential and achieve remarkable things."'
      />
      <PresentationSection
        Titre="Partnership"
        Image={PartnershipPresImg}
        Text={`In a context of increasing competition,
                partnership becomes a key to success,
                with the strength of the educational
                network
                organizations playing a fundamental
                role in the formation of quality
                graduates. This collaboration is part of
                the development policy of the Higher
                School of Computer Science (ESI),
                aiming to make the school a hub of
                scientific and economic excellence.`}
        ButtonText="Become a Partner"
      />
      <Projects
        Titre="Projects"
        Image={AIproject}
        Text={
          <>
            <span className="font-bold">
              Artificial intelligence research project
            </span>

            <p>
              Collaboration to conduct joint research on advancements in
              artificial intelligence, explore new applications, and promote
              knowledge sharing among institutions.
            </p>
            <p>Parteners : </p>
            <br />
            <ul className="ml-12 list-disc">
              <li>Tokyo Institute of Technology</li>
              <li>Massachusetts Institute of Technology (MIT)</li>
              <li>Cambridge university</li>
            </ul>
          </>
        }
      />
      <PresentationSection2
        Titre="International Partnership"
        Image={internationalImg}
        Text={`ESI fosters a spirit of international collaboration, extending its partnerships beyond borders.
                 We connect with universities, institutions, and companies worldwide, fostering a vibrant global network
                  of knowledge exchange.        
                  ESI's commitment to international cooperation positions us as a global hub for education and research. 
                  Through these partnerships, we contribute to building a more interconnected and knowledge-driven world.`}
        ButtonText="See more"
        LinkTo="/PartnershipInterPage"
      />
      <PresentationSection2Inv
        Titre="National Partnership"
        Image={nationalImg}
        Text={`ESI places national collaboration at the heart of its strategy, establishing strong partnerships with institutions, 
                businesses, and organizations across the country. These strategic alliances aim to enrich the educational environment, foster innovation, 
                and address the needs of the `}
        ButtonText="See More"
        LinkTo="/PartnershipNatPage"
      />
      <OurPartners />
      <Footer />
    </div>
  );
};

export default PartnershipPage;
