import React from "react";
import { useState } from "react";
import Hero from "../components/Hero";
import Presentation from "../components/Presentation";
import Header from "../components/Header";
import Information from "../components/Information";
import Ideals from "../components/Ideals";
import Research from "../components/Research";
import Academics from "../components/Academics";
import News from "../components/New";
import PresentationSection from "../components/PresentationSection";
import Card from "../components/Card";
import LongCard from "../components/LongCard";
import Student_Voice from "../components/Student_Voice";
import Fotter from "../components/Fotter";
import Search from "../components/Search";
import EventSection from "../components/EventSection";
import HeroSection from "../components/HeroSection";
import SheetsBrochures from "../components/Sheets&Brochures";
import WhyEsi from "../components/WhyEsi";
//Importing Images
import background from "../assets/images/Admission_Bg.png";
import mat_icon from "../assets/images/matelem_icon.png";
import tm_icon from "../assets/images/tm_icon.png";
import exam_img from "../assets/images/exam.png";
import scientifique_icon from "../assets/images/scientifique_icon.png";

const Admission = () => {
  const [InfoItem, setInfoItem] = useState([
    {
      number: "18,64/20",
      description: "Experimental Sciences",
      imageUrl: scientifique_icon,
    },

    {
      number: "18,11/20",
      description: "Elementary Mathematics",
      imageUrl: mat_icon,
    },
    {
      number: "19.04/20",
      description: "Technical  Mathematics",
      imageUrl: tm_icon,
    },
  ]);
  return (
    <div className="bg-variant-white">
      <Header />
      <HeroSection
        Image={background}
        Titre={"Admission"}
        SousTitre={
          "Discover student achievements, envision your future at ESI."
        }
        Phrase={""}
      />
      <Information infoData={InfoItem} Title="Access averages" />
      <WhyEsi />
      <PresentationSection
        Titre="Competitive exam"
        Image={exam_img}
        Text="The entrance exam for the second cycle at the National School of Computer Science (ESI-Alger) is a
         competitive examination designed to select candidates for advanced academic or professional programs. This rigorous assessment evaluates a range of skills and knowledge relevant to the field of study or career path in question. Candidates typically undergo a series of written tests, oral examinations, and sometimes practical evaluations. Success in this exam opens doors to higher education opportunities or prestigious positions within various industries, reflecting the candidate's dedication, expertise, and potential for future contributions."
        ButtonText="Learn More about"
      />
      <SheetsBrochures />
      <Fotter />
    </div>
  );
};

export default Admission;
