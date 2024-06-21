import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import axios from "axios";
import { useEffect } from "react";
//import InformationParInter from "./components/informationParInter";
import Projects from "../components/projects";
import internationalImg from "../assets/images/internationalImg.png";
import AIproject from "../assets/images/AIproject.png";
import Footer from "../components/Footer";
import Information from "../components/Information";
import infoPI1 from "../assets/images/infoPI1.svg";
import infoPI2 from "../assets/images/infoPI2.svg";
import infoPI3 from "../assets/images/infoPI3.svg";
import infoPI4 from "../assets/images/infoPI4.svg";
import PartnershipPresentation from "../components/PartnershipPresentation";
import Student_Voice from "../components/Student_Voice";
import azyadi_image from "../assets/images/azyadi_image.png";
//import Ideals from "../components/Ideals";
import Objectives from "../components/objectives";
import objectImg1 from "../assets/images/objectImg1.png";
import objectImg2 from "../assets/images/objectImg2.png";
import objectImg3 from "../assets/images/objectImg3.png";
import Invite from "../components/invite";

const PartnershipInterPage = () => {
  const infoData = [
    {
      number: "+580",
      description: "Companies & universities",
      imageUrl: infoPI1,
    },
    { number: "+180", description: "Projects & researchs", imageUrl: infoPI2 },
    {
      number: "+50",
      description: "Students exchanges",
      imageUrl: infoPI3,
    },
    {
      number: "3",
      description: "Scholarships",
      imageUrl: infoPI4,
    },
  ];

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/testimonials/student")
      .then((response) => {
        setTestimonials(response.data);
      })
      .catch((error) => {
        console.error("Error fetching regulations:", error);
      });
  }, []);
  const [ObjectivesItems, setObjectivesItems] = useState([
    {
      top: " Partnership with Renowned Foreign Universities ",
      description:
        "Establishment of international collaborations with prestigious universities worldwide, fostering student exchanges, co-supervision of theses, and the implementation of international research projects.",
      imageUrl: objectImg1,
    },
    {
      top: " Cooperation with Multinational Corporations ",
      description:
        "Collaboration with leading global technology companies to provide international internship opportunities, facilitate student mobility, and promote a global perspective in computer education.",
      imageUrl: objectImg2,
    },
    {
      top: " Partnership with International Organizations ",
      description:
        "Engagement with international technology organizations to participate in global initiatives, contribute to humanitarian projects, and promote knowledge exchange on an international scale.",
      imageUrl: objectImg3,
    },
  ]);

  return (
    <div className="relative bg-variant-white">
      <Header />
      <HeroSection
        Image={internationalImg}
        Titre={
          <>
            <span className="text-main-blue text-7xl">International</span>
            <span className="text-7xl"> Partnership </span>{" "}
          </>
        }
        //SousTitre={<>Exploration, Innovation, <span className="text-[#035FB0]">Collaboration</span></>}
        Phrase='"Through partnership, we connect worldwide"'
      />
      <Information Title={"PARTNERSHIP IN NUMBERS"} infoData={infoData} />
      <PartnershipPresentation
        Text="ESI fosters a spirit of international collaboration, 
                extending its partnerships beyond borders. We connect with universities, 
                institutions, and companies worldwide, fostering a vibrant global network of knowledge exchange. 
                   ESI's commitment to international cooperation positions us as a global hub for education and research.
                    Through these partnerships, we contribute to building a more interconnected and knowledge-driven world."
      />

      <Objectives
        Title="International Partnership Objectives"
        ObjectivesItems={ObjectivesItems}
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

      <Student_Voice
        data={testimonials}
        Title="Testimonials & success stories"
      />

      <Invite />
      <Footer />
    </div>
  );
};

export default PartnershipInterPage;
