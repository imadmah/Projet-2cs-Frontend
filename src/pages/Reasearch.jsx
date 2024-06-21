import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ResearchImg from "../assets/images/scott-graham-OQMZwNd3ThU-unsplash 1.png";
import PresentationImg from "../assets/images/presentation.png";
import Shapes from "../assets/images/shapes.png";
import PresentationSection from "../components/PresentationSection";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticlesSection from "../components/ArticlesSection";
import { BiChevronRight } from "react-icons/bi";
import PresentationSection2 from "../components/PresentationSection2";
import LibrarySection from "../components/LibrarySection";
import ResearchTeamsSection from "../components/ResearchTeamsSection";
import LaboratoryRegulationsSection from "../components/LaboratoryRegulationsSection";
import Footer from "../components/Footer";
import Information from "../components/Information";
import info_img1 from "/images/Vector.png";
import info_img2 from "/images/Vector (1).png";
import info_img3 from "/images/Phd.svg";
import info_img4 from "/images/Group 134994.svg";

const ResearchPage = () => {
  const [articles, setArticles] = useState([]);
  const infoData = [
    {
      number: "+20",
      description: "Research fields",
      imageUrl: info_img1,
    },
    {
      number: "+110",
      description: "Professor researcher",
      imageUrl: info_img2,
    },
    {
      number: "+140",
      description: "PhD students",
      imageUrl: info_img3,
    },
    {
      number: "+120",
      description: "Post PhD",
      imageUrl: info_img4,
    },
  ];
  const [regulations, setRegulations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/regulations/category/laboratory")
      .then((response) => {
        setRegulations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching regulations:", error);
      });
  }, []);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/testimonials/partner")
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching regulations:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8800/articles/research-articles")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);
  return (
    <div className="relative bg-variant-white">
      <Header />
      <HeroSection
        Image={ResearchImg}
        Titre="Research"
        SousTitre={
          <>
            Exploration, Innovation,{" "}
            <span className="text-main-blue">Collaboration</span>
          </>
        }
        Phrase="Où toute la communauté ESI est engagée dans la création de connaissances"
      />
      <Information infoData={infoData} Title="ESI IN NUMBERS" />
      <ArticlesSection articles={articles} />
      <PresentationSection
        Titre="Laboratory LMCS"
        Image={PresentationImg}
        Text={`The Communication in Information Systems Laboratory (LCSI) stands as a dynamic 
                research center, renowned for its diverse and innovative research domains. Spanning 
                from the design of data structures tailored for distributed and mobile environments 
                to artificial intelligence and robotics, the laboratory fosters an 
                environment conducive to knowledge formation and advancement. Furthermore, by 
                organizing seminars and courses, the LCSI contributes to disseminating expertise to a 
                wide audience, thereby reinforcing its impact in the field of computer science research.
                `}
        ButtonText="Learn More About"
        LinkTo="https://lmcs.esi.dz/"
      />
      <PresentationSection2
        Titre="Laboratory LCSI"
        Image={"/images/Bloc-pedagogique-2 1.png"}
        Text={`The Communication in Information Systems Laboratory (LCSI) stands as a dynamic 
        research center, renowned for its diverse and innovative research domains. Spanning 
        from the design of data structures tailored for distributed and mobile environments 
        to artificial intelligence and robotics, the LCSI delves into cutting-edge 
        technological themes. With active supervision of doctoral students, master's 
        students, and professional training projects (PFEs), the laboratory fosters an 
                environment conducive to knowledge formation and advancement. Furthermore, by 
                organizing seminars and courses, the LCSI contributes to disseminating expertise to a 
                wide audience, thereby reinforcing its impact in the field of computer science research.
                `}
        ButtonText="Learn More About"
        LinkTo="https://lcsi.esi.dz/"
      />
      <ResearchTeamsSection />
      <LibrarySection
        Title="Library"
        Subtitle={`"Fostering academic brilliance, our university library is a hub of research 
                    and innovation, empowering individuals to excel and drive impactful change 
                    through knowledge and exploration in the ever-evolving landscape of academia."`}
        Image={"/images/image 4.png"}
        LinkTo="/library"
      />
      <LaboratoryRegulationsSection
        Title="Laboratory Regulations"
        Description="This section provides access to important regulations and documents that you may need."
        Regulations={regulations}
      />
      <Footer />
    </div>
  );
};

export default ResearchPage;
