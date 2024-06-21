import Hero from "../components/Hero";
import Presentation from "../components/Presentation";
import Header from "../components/Header";
import Information from "../components/Information";
import Ideals from "../components/Ideals";
import Research from "../components/Research";
import Academics from "../components/Academics";
import News from "../components/New";
import PresentationSection from "../components/PresentationSection";
import React, { useState, useEffect } from "react";
import Student_Voice from "../components/Student_Voice";
import Fotter from "../components/Fotter";
import axios from "axios";

import EventSection from "../components/EventSection";

//Importing images
import PresentationImg from "../assets/images/presentation.png";
import ResearchImg from "../assets/images/research.png";

import partnershipImage from "../assets/images/partnership.png";
import img_esi from "../assets/images/esi-students_blue.png";
import training_image from "../assets/images/training.png";

import ideal_img1 from "../assets/images/soutnance.png";
import ideal_img2 from "../assets/images/pens.png";
import ideal_img3 from "../assets/images/lamp.png";
import ideal_icon1 from "../assets/images/brain.png";
import ideal_icon2 from "../assets/images/shapes2.png";
import ideal_icon3 from "../assets/images/puzzle.png";
import alumni from "../assets/images/alumni.jpeg";
import alumni2 from "../assets/images/alumni2.jpg";

import info_img1 from "../assets/images/Student.svg";
import info_img2 from "../assets/images/Teacher.svg";
import info_img3 from "../assets/images/Tuition-&-Aid.svg";
import info_img4 from "../assets/images/Quick-Facts.svg";

const HomePage = () => {
  const [IdealsItems, setIdealsItems] = useState([
    {
      number:
        " Striving for Excellence in Education, Research, and Innovation. ",
      description:
        "Pursuing the highest standards in academia, research, and teaching to ensure the school's reputation, the success of its students, and the advancement of knowledge and innovation.",
      imageUrl: ideal_img1,
      imageUrl2: ideal_icon1,
      icon_title: "Excellence",
    },
    {
      number:
        " Celebrating Diversity: Uniting Perspectives, Igniting Innovation. ",
      description:
        "Embracing varied perspectives, backgrounds, and experiences to create an inclusive environment that enriches learning, fosters creativity, and promotes equity and social justice within the university community.",
      imageUrl: ideal_img2,
      imageUrl2: ideal_icon2,
      icon_title: "Diversity",
    },
    {
      number: " Integrity in Action: Building Trust, Inspiring Excellence. ",
      description:
        "Upholding honesty, transparency, and ethical conduct in all endeavors, including research, teaching, administration, and community engagement, to maintain trust, credibility, and integrity within the university and broader society.",
      imageUrl: ideal_img3,
      imageUrl2: ideal_icon3,
      icon_title: "Ethics",
    },
  ]);

  const [InfoItem, setInfoItem] = useState([
    {
      number: "+1200",
      description: "Students per year",
      imageUrl: info_img1,
    },
    { number: "+120", description: "Teachers", imageUrl: info_img2 },
    {
      number: "+140",
      description: "PhD students",
      imageUrl: info_img3,
    },
    {
      number: "+8300",
      description: "Graduated",
      imageUrl: info_img4,
    },
  ]);

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
    <div className="w-full bg-variant-white">
      <Header />
      <Hero />

      <PresentationSection
        Titre="Presentation of ESI"
        Image={PresentationImg}
        Text="ESI, established in 1969 as CERI (Centre d’Etudes et de Recherche en Informatique),has been a recognized national engineering school since 2008 in Algiers. Offering a comprehensive five-year program in computer science, it includes preparatory and specialized cycles, ensuring students receive holistic training. ESI provides a modern learning environment,
         advanced research infrastructure, diverse professional opportunities, and an active student life."
        ButtonText="Learn More about"
        LinkTo="/about"
      />
      <Information Title="ESI IN NUMBERS" infoData={InfoItem} />
      <Ideals IdealsItems={IdealsItems} />
      <PresentationSection
        Titre="Research"
        Image={ResearchImg}
        Text="ESI is deeply committed to research and innovation, dedicating
        itself daily to leading the way in today's cutting-edge
        technologies. Within our research laboratories, including the
        esteemed LCSI and LMCS, we continuously push boundaries, pioneering
        innovative and revolutionary solutions across diverse fields of
        study."
        ButtonText="Learn more about"
        LinkTo="/research"
      />
      <Academics
        Title="Academics"
        Text=" “Empowering students with the knowledge and skills to excel in the
        ever-evolving landscape of computer science, innovation, impact, it's
        all what is demanded. “ "
        image={img_esi}
        LinkTo="/academics"
      />
      <News />
      <EventSection Event={EventsItem} />
      <PresentationSection
        Titre="Partnership"
        Image={partnershipImage}
        Text="  ESI cultivates partnerships with top companies in Algeria, France, Germany, and beyond, 
        offering students valuable industry connections, internships, and real-world experiences. These 
        collaborations provide students with invaluable insights, preparing them for successful careers."
        ButtonText="Learn more about"
        ButtonText2="Become a partner"
        LinkTo="/PartnershipPage"
      />
      <Academics
        Title="Continuous training"
        Text=" “ Together we make the impact through learning, training and development “"
        image={training_image}
        LinkTo="/formation-continue"
      />

      <Student_Voice data={testimonials} />
      <Fotter />
    </div>
  );
};

export default HomePage;
