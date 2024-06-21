import React from "react";
import location_image from "../assets/images/location.png";
import logo_esi from "../assets/images/logo_blue_white.png";
import email_image from "../assets/images/Email.svg";
import location_logo from "../assets/images/location_logo.svg";
import phone_logo from "../assets/images/Call.svg";
import go_image from "../assets/images/toRightArrow.svg";
import facebook_logo from "../assets/images/facebook_logo.png";
import linkedin_logo from "../assets/images/linkedin.png";
import youtube_logo from "../assets/images/youtube.png";
import twitter_logo from "../assets/images/twitter_logo.png";

const Footer = () => {
  return (
    <div className="bg-main-blue text-white py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between lg:items-start">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center">
            <img src={logo_esi} alt="Logo" className="w-24 h-16" />
            <div className="flex gap-7 mt-4">
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
              <a
                href="https://www.linkedin.com/school/ecole-superieure-informatique-alger/?originalSubdomain=dz"
                target="_blank"
              >
                <img
                  src={linkedin_logo}
                  className="cursor-pointer"
                  alt="LinkedIn"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCxxpMS-LIfEnlc6bkNVlQFQ"
                target="_blank"
              >
                <img
                  src={youtube_logo}
                  className="cursor-pointer"
                  alt="YouTube"
                />
              </a>
            </div>
          </div>
          {/* Contact */}
          <div className="flex flex-col items-center mt-8 lg:mt-0">
            <div className="text-xl font-bold mb-4">Contact</div>
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <div className="flex items-center text-center lg:text-left">
                <img
                  src={location_logo}
                  className="w-5 h-5 mr-2"
                  alt="Location Icon"
                />
                <div className="text-center lg:text-left">
                  Ecole nationale Supérieure d’Informatique
                  <br /> ESI, Oued Smar Alger, 16309
                </div>
              </div>
              <div className="flex items-center text-center lg:text-left">
                <img
                  src={email_image}
                  className="w-5 h-5 mr-2"
                  alt="Email Icon"
                />
                <div>contact@esi.dz</div>
              </div>
              <div className="flex items-center text-center lg:text-left">
                <img
                  src={phone_logo}
                  className="w-5 h-5 mr-2"
                  alt="Phone Icon"
                />
                <div>+213 23 93 91 32</div>
              </div>
            </div>
          </div>
          {/* Useful Links */}
          <div className="flex flex-col items-center mt-8 lg:mt-0">
            <div className="text-xl font-bold mb-4">Useful links</div>
            <div className="flex flex-col gap-3 items-center lg:items-start">
              <a href="https://talents.esi.dz" target="_blank">
                <div className="flex items-center cursor-pointer">
                  <img src={go_image} className="w-5 h-5 mr-2" alt="Go Icon" />
                  <div>Talent</div>
                </div>
              </a>
              <a href="https://www.mesrs.dz" target="_blank">
                <div className="flex items-center cursor-pointer">
                  <img src={go_image} className="w-5 h-5 mr-2" alt="Go Icon" />
                  <div>E-Learning</div>
                </div>
              </a>
              <a href="https://lmcs.esi.dz" target="_blank">
                <div className="flex items-center cursor-pointer">
                  <img src={go_image} className="w-5 h-5 mr-2" alt="Go Icon" />
                  <div>LMCS</div>
                </div>
              </a>
              <a href="http://lcsi.esi.dz/" target="_blank">
                <div className="flex items-center cursor-pointer">
                  <img src={go_image} className="w-5 h-5 mr-2" alt="Go Icon" />
                  <div>LCSI</div>
                </div>
              </a>
              <a href="/SignalementPage">
                <div className="flex items-center cursor-pointer">
                  <img src={go_image} className="w-5 h-5 mr-2" alt="Go Icon" />
                  <div>Signalment</div>
                </div>
              </a>
            </div>
          </div>
          {/* Location */}
          <div className="flex flex-col items-center mt-8 lg:mt-0">
            <a
              href="https://maps.app.goo.gl/m1rwFrn5GvQoKe9X7"
              target="_blank"
              className="mb-4 lg:mb-0"
            >
              <div className="text-xl font-bold mb-4">Location</div>
              <img
                src={location_image}
                className="h-48 w-80 cursor-pointer"
                alt="Location"
              />
            </a>
          </div>
        </div>
        {/* Copyright */}
        <hr className="border-white border-t my-8" />
        <div className="text-center text-sm">
          &copy; ESI all rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
