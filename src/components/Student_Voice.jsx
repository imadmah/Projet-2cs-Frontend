import React, { useState, useEffect } from "react";
import quotations_image from "../assets/images/Quotation.png";

const Student_Voice = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (data.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 5000); // Change every 5 seconds

      return () => clearInterval(intervalId);
    }
  }, [data]);

  // If data is empty, return a fallback UI
  if (data.length === 0) {
    return (
      <div className="w-full bg-variant-white py-8">
        <div className="max-w-screen-lg mx-auto p-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="text-main-blue text-4xl font-bold leading-tight">
              Testimonials
            </div>
            <img src={quotations_image} alt="Quotations" className="h-10" />
            <div className="text-slate-700 text-base font-bold text-center">
              No testimonials available.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-variant-white py-8">
      <div className="max-w-screen-lg mx-auto p-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="text-main-blue text-4xl font-bold leading-tight">
            Testimonials
          </div>
          <img src={quotations_image} alt="Quotations" className="h-10" />
          <div className="flex flex-col items-center space-y-1">
            <div className="text-slate-700 text-base font-bold text-center">
              {data[currentIndex]?.text || "No text available"}
            </div>
            <img
              src={`/images/${data[currentIndex]?.image_url}`}
              alt="Student"
              className="w-16 h-16 rounded-full"
            />
            <div className="text-sky-700 text-base font-bold">
              {data[currentIndex]?.author_name || "Unknown Author"}
            </div>
            <div className="text-slate-700 text-base">
              {data[currentIndex]?.graduation_year || "Unknown Year"}
            </div>
          </div>
          <div className="flex justify-center items-center space-x-1">
            {data.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-main-blue" : "bg-indigo-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student_Voice;
