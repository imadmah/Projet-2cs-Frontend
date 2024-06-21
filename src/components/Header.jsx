import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import Logo2 from "../assets/images/logo-esi-black-01.png";
import { BiSearch } from "react-icons/bi";
import { MdOutlinePersonSearch } from "react-icons/md";
import SearchPopup from "./Search_popup";

const Header = () => {
  const QuickAccess = [
    { name: "E-Learning", path: "https://www.mesrs.dz" },
    { name: "Library", path: "/library" },
    { name: "Talents", path: "https://talents.esi.dz/" },
    { name: "Laboratory", path: "/laboratory" },
    { name: "Legal Portal", path: "/legal-portal" },
  ];

  const NavItems = [
    { name: "News", path: "/news" },
    { name: "Academics", path: "/academics" },
    { name: "Research", path: "/research" },
    { name: "Partnership", path: "/PartnershipPage" },
    { name: "Training", path: "/formation-continue" },
    { name: "Life at ESI", path: "/Lifeesi" },
    { name: "About", path: "/about" },
  ];

  const [transNav, setTransNav] = useState(true);
  const [hideMenu, setHideMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  const changeNavColor = () => {
    if (window.scrollY === 0) setTransNav(true);
    else setTransNav(false);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
      setHideMenu(false);
    } else if (prevScrollPos < currentScrollPos) {
      setHideMenu(true);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    changeNavColor();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", changeNavColor);
    return () => {
      window.removeEventListener("scroll", changeNavColor);
    };
  }, []);

  return (
    <div
      className={`fixed z-50 top-0 flex flex-col items-center w-full ${
        hideMenu ? "-translate-y-full" : "translate-y-0"
      } ${!transNav ? "bg-gradient-to-b from-black to-transparent" : ""}`}
    >
      <nav
        className={`flex flex-col items-center w-full ${
          !transNav ? "bg-main-blue" : ""
        }`}
      >
        <div className="py-2">
          <ul className="flex-wrap justify-center flex items-center gap-4 sm:gap-8 text-xs sm:text-sm">
            {QuickAccess.map((item, index) => (
              <li
                key={index}
                className="text-white font-medium w-fit relative cursor-pointer"
              >
                <a
                  href={item.path}
                  className="relative after:absolute after:w-full after:h-1 after:bg-white after:-bottom-1 after:left-0 hover:after:scale-x-100 after:transition after:scale-x-0"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div
        className={`flex flex-row items-center justify-between gap-4 w-full px-4 py-2 md:px-8 ${
          !transNav ? "bg-[#FFF]" : ""
        }`}
      >
        <Link to="/">
          {transNav ? (
            <img src={Logo} alt="logo" className="h-8 sm:h-10 object-contain" />
          ) : (
            <img
              src={Logo2}
              alt="logo"
              className="h-8 sm:h-10 object-contain"
            />
          )}
        </Link>
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-8 gap-y-2 text-sm md:text-base">
            {NavItems.map((item, index) => (
              <li
                key={index}
                className="font-medium w-fit relative cursor-pointer"
              >
                <Link
                  to={item.path}
                  className={`relative after:absolute after:w-full after:h-1 after:-bottom-1 after:left-0 hover:after:scale-x-100 after:transition after:scale-x-0 ${
                    !transNav
                      ? "text-[#000] after:bg-main-blue"
                      : "text-white after:bg-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <SearchPopup transNav={transNav} />
          <div className="flex items-center flex-col cursor-pointer">
            <MdOutlinePersonSearch
              className={`${
                !transNav ? "text-[#000]" : "text-white"
              } text-lg sm:text-xl`}
            />
            <span
              className={`${
                !transNav ? "text-[#000]" : "text-white"
              } text-xs font-medium text-center`}
            >
              You Are
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
