import React from "react";

import Header from "../components/Header";
import Information from "../components/Information";

import Fotter from "../components/Fotter";

import { useState } from "react";
import HeroSection from "../components/HeroSection";
import Recent_acquisition from "../components/Recent_acquisition";
import EventBib from "../components/Event_bib";
import BibPresentation from "../components/BibPresentation";
import Libraryregulations from "../components/Library_regulations";
//Importing images
import backgroundImage from "../assets/images/library_bg.png";
import info_img1 from "../assets/images/books.png";
import info_img2 from "../assets/images/books2.png";
import info_img3 from "../assets/images/book_graduated.png";
import info_img4 from "../assets/images/theses_paper.png";

const LibraryPage = () => {
  const [InfoItem, setInfoItem] = useState([
    {
      number: "+7100",
      description: "Titles",
      imageUrl: info_img1,
    },
    { number: "+22k", description: "Copies of books", imageUrl: info_img2 },
    {
      number: "+1200",
      description: "Dissertations",
      imageUrl: info_img3,
    },
    {
      number: "+120",
      description: "Theses",
      imageUrl: info_img4,
    },
  ]);

  return (
    <div className="relative bg-variant-white">
      <Header />
      <HeroSection
        Image={backgroundImage}
        Titre={
          <>
            ESI <span className=" text-main-blue"> Library</span>{" "}
          </>
        }
        SousTitre={
          <>
            Discovery, Knowledge,{" "}
            <span className=" text-main-blue">Community</span>
          </>
        }
        Phrase={
          <>
            Opening hours
            <br />
            <span className=" text-main-blue">Sunday-Thursday</span> : 08:30
            <span className=" text-main-blue">AM</span>-10:00
            <span className=" text-main-blue">PM</span>
            <br />
            <span className=" text-main-blue">Saturday</span> : 08:30
            <span className=" text-main-blue">AM</span>
            -04:00
            <span className=" text-main-blue">PM</span>
          </>
        }
      />
      <Information Title="Stats" infoData={InfoItem} />
      <BibPresentation />
      <Recent_acquisition />
      <EventBib />
      <Libraryregulations />
      <Fotter />
    </div>
  );
};

export default LibraryPage;
