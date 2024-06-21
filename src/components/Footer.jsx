import React from "react";
import location_image from "/images/location.png";
import logo_esi from "/images/logo_blue_white.png";
import email_image from "/images/Email.svg";
import location_logo from "/images/location_logo.svg";
import phone_logo from "/images/Call.svg";
import go_image from "/images/toRightArrow.svg";
import facebook_logo from "/images/facebook_logo.png";
import linkedin_logo from "/images/linkedin.png";
import youtube_logo from "/images/youtube.png";
import twitter_logo from "/images/twitter_logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col bg-main-blue  h-fit">
      <div className="flex flex-row justify-between items-start gap-8 py-8 ">
        {/* Logo */}
        <div className="flex flex-col w-auto px-16 gap-2 ">
          <img src={logo_esi} alt="Logo" className="w-full h-auto" />
          <div className="flex gap-7">
            <a href="https://www.facebook.com/ESI.Page/" target="_blank">
              <img
                className="cursor-pointer"
                src={facebook_logo}
                alt="Facebook"
              />
            </a>
            <a href="https://twitter.com/EsiAlger" target="_blank">
              <img
                className="cursor-pointer"
                src={twitter_logo}
                alt="Twitter"
              />
            </a>

            <img
              src={linkedin_logo}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/school/ecole-superieure-informatique-alger/?originalSubdomain=dz"
                )
              }
              className="cursor-pointer"
              alt="LinkedIn"
            />
            <img
              src={youtube_logo}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCxxpMS-LIfEnlc6bkNVlQFQ"
                )
              }
              className="cursor-pointer"
              alt="YouTube"
            />
          </div>
        </div>
        {/* Contact */}
        <div className="flex flex-col items-start text-white">
          <div className="text-xl font-bold mb-4">Contact</div>
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-4">
              <img
                src={location_logo}
                className="w-5 h-5 mr-2"
                alt="Location Icon"
              />
              <div>
                Ecole nationale Supérieure d’Informatique
                <br /> ESI, Oued Smar Alger, 16309
              </div>
            </div>
            <div className="flex items-center mb-4">
              <img
                src={email_image}
                className="w-5 h-5 mr-2"
                alt="Email Icon"
              />
              <div>contact@esi.dz</div>
            </div>
            <div className="flex items-center">
              <img src={phone_logo} className="w-5 h-5 mr-2" alt="Phone Icon" />
              <div>+213 23 93 91 32</div>
            </div>
          </div>
        </div>
        {/* Useful Links */}
        <div className="flex-grow flex-col ml-8 items-start text-white">
          <div className="text-xl font-bold mb-4 ">Useful links</div>
          <div className="flex flex-col gap-3 items-start">
            <div
              onClick={() => window.open("https://talents.esi.dz")}
              className="flex items-center cursor-pointer"
            >
              <img src={go_image} className="w-5 h-5  mr-2" alt="Go Icon" />
              <div>Talent</div>
            </div>
            <div
              onClick={() => window.open("https://www.mesrs.dz")}
              className="flex items-center cursor-pointer"
            >
              <img src={go_image} className="w-5 h-5  mr-2" alt="Go Icon" />
              <div>E-Learning</div>
            </div>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => window.open("https://lmcs.esi.dz")}
            >
              <img src={go_image} className="w-5 h-5  mr-2" alt="Go Icon" />
              <div>LMCS</div>
            </div>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => window.open("https://lcsi.esi.dz")}
            >
              <img src={go_image} className="w-5 h-5  mr-2" alt="Go Icon" />
              <div>LCSI</div>
            </div>
            <div
              className="flex items-center cursor-pointer"
              onClick={() => window.open("https://www.facebook.com/ESI.Page/")}
            >
              <img src={go_image} className="w-5 h-5  mr-2" alt="Go Icon" />
              <div>Signalment</div>
            </div>
          </div>
        </div>
        {/* Location */}
        <div className="flex-grow flex-col ml-16  text-white">
          <div className="text-xl font-bold mb-4 ">Location</div>
          <img
            src={location_image}
            className="h-48 w-80 cursor-pointer"
            alt="Location"
            onClick={() =>
              window.open("https://maps.app.goo.gl/m1rwFrn5GvQoKe9X7")
            }
          />
        </div>
      </div>
      {/* Copyright */}
      <div className="text-white text-center ">
        <hr className="border-white border-t mb-4" />
        <div className="flex justify-center items-center">
          <div className="text-white text-center mb-4">
            Copyright © ESI all right reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;