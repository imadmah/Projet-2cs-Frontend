import React, { useState } from "react";
import seclogo from "../assets/images/seclogo.png";
import gdglogo from "../assets/images/gdglogo.png";
import eticlogo from "../assets/images/eticlogo.png";
import cselogo from "../assets/images/cselogo.png";
import sourirelogo from "../assets/images/sourirelogo.png";
import soailogo from "../assets/images/soailogo.png";
import shellmateslogo from "../assets/images/shellmateslogo.png";
import ecotechlogo from "../assets/images/ecotechlogo.png";
import cacelogo from "../assets/images/cacelogo.png";
import astrotechlogo from "../assets/images/astrotechlogo.png";
import wtmlogo from "../assets/images/wtmlogo.png";
import facebook_logo from "../assets/images/facebook_logo.png";
import instagram_logo from "../assets/images/instagram_logo.png";

const clubs = [
  {
    src: seclogo,
    alt: "SEC",
    name: "SEC",
    description:
      "The Sport and Entertainment Club (SEC ESI)-2022 at ESI Algiers enhances students mental and physical well-being through a diverse range of sports and entertainment events.",
    social: {
      website: "#",
      facebook: facebook_logo,
      instagram: "#",
    },
  },
  {
    src: gdglogo,
    alt: "GDG",
    name: "GDG",
    description:
      "GDG Algiers-2011 is a leading developer community in the MENA region, offering events to keep developers updated with the latest technologies.",
    social: {
      website: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    src: eticlogo,
    alt: "ETIC",
    name: "ETIC",
    description:
      "ETIC-2009 at ESI fosters creativity and professional integration through ICT-focused activities. It offers students new experiences to bridge the academic and entrepreneurial worlds.",
    social: {
      website: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    src: cselogo,
    alt: "CSE",
    name: "CSE",
    description:
      "The Scientific Club of ESI (CSE) enhances the school atmosphere by facilitating idea exchange, professional networking, and organizing events and training sessions.",
    social: {
      website: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    src: sourirelogo,
    alt: "Sourire à l’innocence",
    name: "Sourire à l’innocence",
    description:
      "Sourire à l'Innocence is an ESI student association that brings smiles to needy children through charity events, aiding orphanages and hospitals, and fostering compassion and solidarity.",
    social: {
      website: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    src: soailogo,
    alt: "SOAI",
    name: "SOAI",
    description:
      "School of AI Algiers is a leading local community of AI enthusiasts, developers, and students. Its mission is to unite and grow Algeria's AI community through shared learning and a passion for the field.",
    social: {
      website: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    src: shellmateslogo,
    alt: "Shellmates",
    name: "Shellmates",
    description:
      "Shellmates-2011 is a pioneering infosec community in Algeria, promoting knowledge exchange and motivation in cybersecurity. It is the first cybersecurity club in Algeria.",
    social: {
      website: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    src: ecotechlogo,
    alt: "EcoTech",
    name: "EcoTech",
    description:
      "EcoTech (formerly known as Club Vert de l'ESI) is a student club dedicated to preserving the environment.",
    social: {
      website: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    src: cacelogo,
    alt: "CACE",
    name: "CACE",
    description:
      "The C.A.C.E-2016, organized by student artists from ESI, offers events and workshops to explore various arts and cultures.",
    social: {
      website: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    src: astrotechlogo,
    alt: "AstroTech",
    name: "AstroTech",
    description:
      "Astrotech-2022 is the astronomy club at ESI, with the primary mission of uniting computer enthusiasts passionate about astronomy and space.",
    social: {
      website: "#",
      facebook: "#",
      instagram: "#",
    },
  },
  {
    src: wtmlogo,
    alt: "WTM",
    name: "WTM",
    description:
      "WTM Algiers empowers tech impact makers in Algiers by fostering borderless connections and promoting diversity and equality in STEM fields.",
    social: {
      website: "#",
      facebook: "#",
      instagram: "#",
    },
  },
];

const ClubsSection = () => {
  const [selectedLogo, setSelectedLogo] = useState(null);

  const handleLogoClick = (index) => {
    setSelectedLogo(index === selectedLogo ? null : index);
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".logo-card")) {
      setSelectedLogo(null);
    }
  };

  return (
    <div className="py-12">
      <h1 className="text-5xl text-center text-main-blue font-bold py-8">
        ESI Clubs
      </h1>
      <div className="py-12" onClick={handleClickOutside}>
        <div className="max-w-4xl mx-auto w-10/12 lg:w-7/12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clubs.map((logo, index) => (
              <div
                key={index}
                className={`logo-card p-2 bg-gray-50 rounded shadow-lg cursor-pointer ${
                  selectedLogo === index ? "col-span-2" : ""
                }`}
                onClick={() => handleLogoClick(index)}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-16 h-16 object-contain mb-2"
                  />
                  <p className="text-main-blue font-bold text-center">
                    {logo.name}
                  </p>
                  {selectedLogo === index && (
                    <div className="mt-2 text-center">
                      <p className="text-main-black text-sm">
                        {logo.description}
                      </p>
                      <div className="flex justify-center space-x-2 mt-2">
                        <a href={logo.social.website} className="text-gray-500">
                          <i className="fas fa-globe"></i>
                        </a>
                        <a
                          href={logo.social.facebook}
                          className="text-gray-500"
                        >
                          <i className="fab fa-facebook"></i>
                        </a>
                        <a
                          href={logo.social.instagram}
                          className="text-gray-500"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubsSection;
