import React, { useEffect, useRef, useState } from "react";

import { IoIosPeople } from "react-icons/io";
import { BiSearch } from "react-icons/bi";

const SearchPopup = ({ transNav }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopUp = () => {
    setIsOpen(true);
  };

  const ref = useRef();

  return (
    <div>
      <button onClick={openPopUp}>
        <BiSearch
          className={`${
            !transNav ? "text-[#000]" : "text-white"
          } text-xl cursor-pointer`}
        />
      </button>

      {isOpen && (
        <div
          onClick={(event) => {
            if (ref.current && !ref.current.contains(event.target)) {
              setIsOpen(false);
            }
          }}
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
        >
          <div ref={ref} className=" rounded-lg  w-full max-w-3xl">
            <button className="text-gray-500 hover:text-gray-700 float-right">
              &times;
            </button>
            <div className="mt-4">
              <div className="mt-4 flex">
                <label className="block text-white mr-4 text-xl font-bold">
                  Search ESI:
                </label>
                <label className="inline-flex text-white items-center mr-4">
                  <input
                    type="radio"
                    name="searchType"
                    className="form-radio"
                    value="people"
                    defaultChecked
                  />
                  <span className="ml-2 text-xl ">People</span>
                </label>
                <label className="inline-flex text-white items-center">
                  <input
                    type="radio"
                    name="searchType"
                    className="form-radio"
                    value="news"
                  />
                  <span className="ml-2 text-xl ">News</span>
                </label>
              </div>
              <div className="flex w-full mt-8">
                <div className="flex flex-row w-2/3  items-center bg-white">
                  <BiSearch className="text-black text-xl ml-4" />
                  <input
                    type="text"
                    placeholder="Search by name, email..."
                    className="p-4 bg-transparent w-full outline-none "
                  />
                </div>

                <button className="flex w-1/3 items-center gap-x-4 ml-12 font-medium text-white bg-main-blue  ">
                  <IoIosPeople className="text-2xl ml-4" />
                  <span>Search People</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPopup;
