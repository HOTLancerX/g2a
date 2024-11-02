"use client";
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface Slide {
  id: number;
  image: string;
  link: string;
}

interface ImgViewProps {
  slides: Slide[];
}

const ImgView: React.FC<ImgViewProps> = ({ slides }) => {
  const [isOpen, setIsOpen] = useState(false);
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
    }, 10000); // 10 seconds interval

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
        nextImage();
      } else if (touchStartX.current - touchEndX < -50) {
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
        nextImage();
      } else if (touchStartX.current - touchEndX < -50) {
        prevImage();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="absolute right-5 top-5 p-1 opacity-30 hover:opacity-100 bg-main text-white rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 4h6v2H7.414l3 3L9 10.414l-3-3V10H4zm10 0h6v6h-2V7.414l-3 3L13.586 9l3-3H14zm-3.586 11l-3 3H10v2H4v-6h2v2.586l3-3zM15 13.586l3 3V14h2v6h-6v-2h2.586l-3-3z"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed left-0 right-0 bottom-0 top-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        >
          <div className="relative h-full flex justify-center w-full">
            <Image
              src={slides[currentImage].image}
              width={1000}
              height={1000}
              alt={`Slide ${currentImage + 1}`}
              className="w-min h-full object-cover"
            />

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1 bg-white/70 text-black rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg>
            </button>
            <button
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
            </button>
            <button
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
            </button>

            <div className="absolute bottom-2 left-2 text-xs bg-black/50 py-0.5 px-2 text-white rounded">
              {`${currentImage + 1}/${slides.length}`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImgView;