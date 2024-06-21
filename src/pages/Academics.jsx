import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PresentationSection from "../components/PresentationSection";
import LibrarySection from "../components/LibrarySection";
import Footer from "../components/Footer";
import Academicss from "../components/Academics";

function Academics() {
  return (
    <div className="relative">
      <Header />
      <HeroSection
        Image="/images/dan-dimmock-sNwnjxm8eTY-unsplash 1.png"
        Titre="Academics"
        SousTitre={
          <>
            Reveal your skills with our{" "}
            <span className="text-main-blue">engineering</span> curriculum
          </>
        }
        Phrase="Où toute la communauté ESI est engagée dans la création de connaissances"
      />
      <Academicss
        Title="Admission"
        Text="“ Your way to dive into an impactful journey.“"
        image="/images/element5-digital-jCIMcOpFHig-unsplash 1 (1).png"
        LinkTo="/Admission"
      />
      <PresentationSection
        Titre="Engineer's curriculum"
        Image="/images/curriculum_banner 1.png"
        Text={`
                    The school's engineering program in computer science is a five-year 
                    post-baccalaureate course. It comprises a two-year preparatory cycle, 
                    and a three-year second cycle.
                `}
        ButtonText="Learn More About"
      />
      <LibrarySection
        Title="Post-graduation"
        Subtitle="“Explore our comprehensive range of post-graduate programs designed to equip you with the knowledge, skills, and expertise needed to thrive in today's dynamic technological landscape.”"
        Image="/images/Mask group.png"
        LinkTo="/Postgrad"
      />
      <Footer />
    </div>
  );
}

export default Academics;
