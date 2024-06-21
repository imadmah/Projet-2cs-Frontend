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
import Description from "../components/Description";
import HeroSection from "../components/HeroSection";
//----------------------------------------------------------------//
//----------------------------------------------------------------//
import PresentationImg from "../assets/images/presentation.png";
const AboutPage = () => {
  return (
    <div>
      <Header />
      <HeroSection
        Image={PresentationImg}
        Titre={"Discover our School"}
        SousTitre={"Alger, El Harrach, Oued Smar"}
        Phrase={"08:00 AM - 05:00 PM | Dim - Jeu "}
      />
      <Description />
      <Fotter />
    </div>
  );
};

export default AboutPage;
