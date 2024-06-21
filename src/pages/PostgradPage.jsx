import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Information from "../components/Information";
//import { BiChevronRight } from "react-icons/bi";
//import Shapes from "../assets/images/shapes.png";
import PresentationSection2 from "../components/PresentationSection2";
import PresentationSection2Inv from "../components/PresentationSection2Inv";
import infoPI4 from "../assets/images/infoPI4.svg";
import infoPI3 from "../assets/images/infoPI3.svg";
import Postgrad2 from "../assets/images/postgrad2.png";
import Postgrad3 from "../assets/images/postgrad3.jpg";
import PostgradImg from "../assets/images/postgradImg.jpg";
import Postgradregulations from "../components/Postgradregulations";
import Footer from "../components/Footer";

const PostgradPage = () => {
  const infoData = [
    {
      number: "+1000",
      description: "Doctoral Students",
      imageUrl: infoPI4,
    },

    {
      number: "+50",
      description: "Students exchanges",
      imageUrl: infoPI3,
    },
  ];

  return (
    <div className="relative bg-variant-white ">
      <Header />
      <HeroSection
        Image={PostgradImg}
        Titre={
          <>
            Post <span className="text-main-blue">Graduation</span>
          </>
        }
        //SousTitre={<>Exploration, Innovation, <span className="text-[#035FB0]">Collaboration</span></>}
        Phrase="Où toute la communauté ESI est engagée dans la création de connaissances"
      />
      <Information Title={"POSTGRADUATION IN NUMBERS"} infoData={infoData} />

      <PresentationSection2
        Titre="LMD Phd"
        Image={Postgrad2}
        Text={`  The LMD Doctorate (Bachelor-Master-Doctorate) at ESI represents a crucial step in the academic journey of students seeking excellence and specialization in the field of computer science. This postgraduate program offers two distinct paths for advanced research and contribution to the advancement of scientific knowledge.

                          Access to the LMD doctoral program is selective and reserved for holders of a Master's degree or recognized equivalent. Doctoral students benefit from rigorous supervision provided by renowned academic researchers, both from within and outside the School.`}
        ButtonText="Learn More"
      />
      <PresentationSection2Inv
        Titre="PhD in Sciences"
        Image={Postgrad3}
        Text={` To access a PhD in Sciences, candidates must hold a master's degree with distinction (very good, good, or fairly good) from the STIC Graduate School. The choice of thesis topic is crucial, requiring reflection on its originality and feasibility. Candidates must find a thesis supervisor who will be responsible for their scientific guidance. Once enrolled, they are affiliated with a research laboratory and must complete their thesis within a five-year period. Publications are essential for highlighting their work. Annual evaluations are conducted, and re-enrollment must be requested each year. The defense is the culmination, with a jury evaluating the thesis.`}
        ButtonText="Learn More"
      />
      <Postgradregulations />
      <Footer />
    </div>
  );
};

export default PostgradPage;
