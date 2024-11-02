"use client";
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';

type Slide = {
  id: number;
  image: string;
  link: string;
};

type SliderProps = {
  slides: Slide[];
};

const Sliders: React.FC<SliderProps> = ({ slides }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    // Auto-play functionality
    const intervalId = setInterval(() => {
      nextImage();
    }, 10000); // Change the interval time (in milliseconds) as needed

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImage]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchStartX.current - touchEndX > 50) {
        // Swipe left
        nextImage();
      } else if (touchStartX.current - touchEndX < -50) {
        // Swipe right
        prevImage();
      }
    }
    touchStartX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (touchStartX.current !== null) {
      const touchEndX = e.clientX;
      if (touchStartX.current - touchEndX > 50) {
        // Swipe left
        nextImage();
      } else if (touchStartX.current - touchEndX < -50) {
        // Swipe right
        prevImage();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="flex flex-col group items-start">
      {slides.length > 1 && (
        <div
          className="w-full bg-gray-200 dark:bg-dark relative h-96 md:h-[430px] flex items-center justify-center overflow-hidden"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div
            className="flex h-full w-full transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <Image
                  width={600}
                  height={600}
                  src={slide.image || "/default.jpg"}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-min object-cover mx-auto"
                />
              </div>
            ))}
          </div>

          <div className="absolute group-hover:flex hidden justify-between w-full items-center gap-2">
            <div
              onClick={prevImage}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/50 text-black py-2 rounded-r-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m15 19l-6-7l1.5-1.75M15 5l-2 2.333"
                ></path>
              </svg>
            </div>
            <div
              onClick={nextImage}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/50 text-black py-2 rounded-l-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m9 5l2 2.333M9 19l6-7l-1.5-1.75"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      )}
      {slides.length <= 1 && (
        <div className="w-full bg-white dark:bg-dark p-4 relative h-96 md:h-[430px] flex items-center justify-center">
          <Image
            src={slides[0]?.image || "/default.jpg"}
            alt={slides[0]?.link}
            width={500}
            height={500}
            className="h-full w-min object-cover"
          />
        </div>
      )}
      {slides.length > 1 && (
        <div className="flex flex-row gap-1 overflow-x-auto w-full mt-1">
          {slides.map((slide, index) => (
            <Image
              width={100}
              height={100}
              key={index}
              src={slide.image || "/default.jpg"}
              alt={`Thumbnail ${index + 1}`}
              className={`flex-none cursor-pointer w-16 h-16 object-cover bg-white border-2 ${
                currentImage === index ? 'border-main' : 'border-white'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sliders;