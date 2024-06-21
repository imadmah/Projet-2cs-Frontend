import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import lifeImg from "../assets/images/lifeImg.png";
import AchievementsSection from "../components/Achievement";
import ClubsSection from "../components/Clubs";
import Footer from "../components/Footer";
import EventSection from "../components/EventSection";

const LifePage = () => {
  const [EventsItem, setEventsItem] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/events")
      .then((response) => {
        setEventsItem(response.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);
  return (
    <div className="relative bg-variant-white">
      <Header />
      <HeroSection
        Image={lifeImg}
        Titre={
          <>
            <span className="text-8xl">Life At Esi</span>
          </>
        }
        Phrase='"Hello alumnis, glad to welcome you back!"'
      />
      <AchievementsSection />
      <EventSection Event={EventsItem} /> 
      <ClubsSection />
      <Footer />
    </div>
  );
};

export default LifePage;
