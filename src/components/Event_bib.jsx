import React from "react";

import event_img from "../assets/images/event_bib1.png";
import event_img2 from "../assets/images/event_bib2.png";
const EventBib = () => {
  return (
    <div>
      <p className="text-main-blue m-8 font-bold text-center text-4xl">
        Events
      </p>

      <div className="flex gap-8 px-32 mb-8">
        <img src={event_img} alt="April Event" className="w-1/2 object-cover" />
        <div className="w-1/2">
          <p className="text-2xl font-bold py-4">April</p>
          <p className="font-bold text-justify  leading-8">
            A day-long information session is being organized to prepare the
            technical specifications for the new publications. Its primary
            objective is to gather input from both students and teachers
            regarding their requirements and preferences to ensure that the
            upcoming books cater effectively to the educational needs of the
            community.
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse gap-8 px-32">
        <img src={event_img2} alt="May Event" className="w-1/2 object-cover" />
        <div className="w-1/2">
          <p className="text-2xl font-bold py-4">May</p>
          <p className="font-bold text-justify leading-8">
            An open-house event showcasing the latest additions to our book
            collection is scheduled, spanning over a period of 3 to 4 days. The
            primary objective of this event is to disseminate information about
            the newly acquired books, providing attendees with ample opportunity
            to explore and engage with the latest resources available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventBib;
