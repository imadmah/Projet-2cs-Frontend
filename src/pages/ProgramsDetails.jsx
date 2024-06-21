import HeroSection2 from "../components/HeroSection2";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import FormationCard from "../components/FormationCard";

function ProgramsDetails() {
  const [formations, setFormations] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8800/formations")
      .then((response) => {
        setFormations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching formations:", error);
      });
  }, []);
  return (
    <div className="relative bg-variant-white flex flex-col gap-12">
      <Header />
      <HeroSection2
        Image="/images/tablet-with-smartphone-devices-tech-generative-ai 133.png"
        Titre={
          <>
            Program <span className="text-main-blue">details</span>
          </>
        }
      />
      <img src="/images/Group 135013.png" className="m-auto px-20" />
      <div className="grid grid-cols-4 gap-8 gap-y-12 mx-auto">
        {formations.map((item, index) => (
          <FormationCard
            key={index}
            Image={item.Image}
            Title={item.Title}
            Description={item.Description}
            Duration={item.Duration}
          />
        ))}
        {formations.map((item, index) => (
          <FormationCard
            key={index}
            Image={item.Image}
            Title={item.Title}
            Description={item.Description}
            Duration={item.Duration}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default ProgramsDetails;
