import { useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { useEffect } from "react";
import axios from "axios";
//import InformationParInter from "./components/informationParInter";
import Projects from "../components/projects";
import NatImg from "../assets/images/NatImg.png";
import AIproject from "../assets/images/AIproject.png";
import Footer from "../components/Footer";
import Information from "../components/Information";
import infoPN1 from "../assets/images/infoPN1.svg";
import infoPN2 from "../assets/images/infoPN2.svg";
import infoPN3 from "../assets/images/infoPN3.svg";
import infoPN4 from "../assets/images/infoPN4.svg";
import PartnershipPresentation from "../components/PartnershipPresentation";
import Student_Voice from "../components/Student_Voice";
import azyadi_image from "../assets/images/azyadi_image.png";
//import Ideals from "../components/Ideals";
import Objectives from "../components/objectives";
import objectNImg1 from "../assets/images/objectNImg1.png";
import objectNImg2 from "../assets/images/objectNImg2.png";
import objectNImg3 from "../assets/images/objectNImg3.png";
import Invite from "../components/invite";

const PartnershipNatPage = () => {
  const infoData = [
    {
      number: "+580",
      description: "Companies & universities",
      imageUrl: infoPN1,
    },
    { number: "+180", description: "Projects & researchs", imageUrl: infoPN2 },
    {
      number: "+50",
      description: "Internships",
      imageUrl: infoPN3,
    },
    {
      number: "5",
      description: "Sector",
      imageUrl: infoPN4,
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
      top: " Academic Partnership with National Universities ",
      description:
        "Establishing strategic collaborations with renowned universities across the country to foster academic exchanges, joint research, and the sharing of educational resources.",
      imageUrl: objectNImg1,
    },
    {
      top: " Collaboration with the National IT Industry ",
      description:
        "Forging partnerships with leading companies in the IT sector to offer internship opportunities, mentorship programs, and facilitate alignment of educational programs with market needs.",
      imageUrl: objectNImg2,
    },
    {
      top: " Partnership with Governmental Organizations ",
      description:
        "Cooperating with governmental institutions to contribute to national interest projects, collaborate on technological initiatives, and engage in IT development programs.",
      imageUrl: objectNImg3,
    },
  ]);

  return (
    <div className="relative bg-variant-white">
      <Header />
      <HeroSection
        Image={NatImg}
        Titre={
          <>
            <span className="text-main-blue text-7xl">National</span>
            <span className="text-7xl"> Partnership </span>{" "}
          </>
        }
        //SousTitre={<>Exploration, Innovation, <span className="text-[#035FB0]">Collaboration</span></>}
        Phrase='United We Innovate: ESI drives progress through national partnerships."'
      />
      <Information Title={"PARTNERSHIP IN NUMBERS"} infoData={infoData} />
      <PartnershipPresentation
        Text=" ESI places national collaboration at the heart of its strategy, establishing strong partnerships with institutions, businesses, and organizations across the country. 
                These strategic alliances aim to enrich the educational environment, foster innovation, and address the needs of the IT sector. 
                Our commitment to national partnerships enables us to offer unique opportunities to students, participate in relevant research projects, and contribute to the development of the IT ecosystem on a national scale."
      />

      <Objectives
        Title="National Partnership Objectives"
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

export default PartnershipNatPage;
