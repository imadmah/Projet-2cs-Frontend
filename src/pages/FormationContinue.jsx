import React, { useState, useEffect } from "react";
import axios from "axios";
import HeroSection2 from '../components/HeroSection2';
import Header from '../components/Header';
import Information from "../components/Information";
import info_img1 from "/images/Vector (2).png";
import info_img2 from "/images/Group 134991.png";
import info_img3 from "/images/Vector (3).png";
import info_img4 from "/images/Vector (4).png";
import PrepromotionTrainingSection from '../components/PrepromotionTrainingSection';
import TrainingSection from '../components/TrainingSection';
import LaboratoryRegulationsSection from '../components/LaboratoryRegulationsSection';
import Footer from '../components/Footer';

function FormationContinue() {
    const infoData = [
        {
          number: "+580",
          description: "Activity agreements ",
          imageUrl: info_img1,
        },
        { number: "+180", description: "Statutory training conventions", imageUrl: info_img2 },
        {
          number: "+50",
          description: "Training conventions",
          imageUrl: info_img3,
        },
        {
          number: "+5",
          description: "Expertise agreements",
          imageUrl: info_img4,
        },
      ];
      const [regulations, setRegulations] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8800/regulations/category/pretraining")
            .then(response => {
                setRegulations(response.data);
            })
            .catch(error => {
                console.error('Error fetching regulations:', error);
            });
    }, []);
  return (
    <div className="relative">
        <Header />
        <HeroSection2 
            Image="/images/element5-digital-jCIMcOpFHig-unsplash 1.png"
            Titre={<>Continuing Professional Development <span className="text-main-blue">Certification</span></>}
            Phrase={`"Employee empowerment and retention of talent are paramount for sustaining both careers and businesses."`}
        />
        <Information infoData={infoData} Title="TRAINING IN NUMBERS"/>
        <PrepromotionTrainingSection />
        <TrainingSection />
        <LaboratoryRegulationsSection 
          Title="Laboratory Regulations"
          Regulations={regulations}
        />
        <Footer />
    </div>
  )
}

export default FormationContinue