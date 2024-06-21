/* eslint-disable react/prop-types */
import React from "react";
import EventCard from "./EventCard";
import { BiChevronRight } from "react-icons/bi";

function EventSection({ Event }) {
  return (
    <div className="w-full h-full p-16 bg-[#F6FAFF]">
      <h1 className="text-5xl text-center text-main-blue font-bold py-3">
        Events
      </h1>
      <div className="flex items-center mt-8 justify-center gap-9">
        {Event.map((item, index) => (
          <EventCard
            key={index}
            Image={item.image}
            Title={item.title}
            Description={item.description}
          />
        ))}
      </div>
      <div className="flex justify-center mt-7">
        <a href="/Events">
          <button className="flex items-center gap-x-4 px-10 py-2 font-medium text-white bg-main-blue group">
            <span>View more</span>
            <BiChevronRight className="text-lg group-hover:translate-x-2 transition" />
          </button>
        </a>
      </div>
    </div>
  );
}

export default EventSection;
