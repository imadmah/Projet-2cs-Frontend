/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);
  const [translate, setTranslate] = useState(0);
  const sliderRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartPosition(e.clientX);
    sliderRef.current.style.transition = 'none';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentPosition = e.clientX;
    const diff = currentPosition - startPosition;
    setTranslate(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const slideWidth = sliderRef.current.clientWidth / slides.length;
    if (Math.abs(translate) > slideWidth / 3) {
      if (translate > 0 && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (translate < 0 && currentIndex < slides.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else if (currentIndex === slides.length - 1 && translate < 0) {
        setCurrentIndex(0); // Move from last to first directly
      }
    }
    setTranslate(0);
    sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
  };

  const handleMouseLeave = () => {
    if (isDragging) handleMouseUp();
  };

  return (
    <div
      className="relative w-full mx-auto overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-transform duration-500"
        ref={sliderRef}
        style={{
          transform: `translateX(calc(-${currentIndex * 100}% + ${translate}px))`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {slide.content}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2"
      >
        <BiChevronLeft className="text-5xl text-main-blue opacity-40 hover:opacity-100" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2"
      >
        <BiChevronRight className="text-5xl text-main-blue opacity-40 hover:opacity-100" />
      </button>

      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? 'bg-main-blue' : 'bg-[#D9D9D9]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;