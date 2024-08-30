import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

// Import the images from the assets folder
import crm1 from '../../assets/crm1.png';
import crm2 from '../../assets/crm2.png';
import crm3 from '../../assets/crm3.png';
import crm4 from '../../assets/crm4.png';
import crm5 from '../../assets/crm5.png';
import app1 from '../../assets/app1.png';
import app2 from '../../assets/app2.png';
import app3 from '../../assets/app3.png';
import app4 from '../../assets/app4.png';
import app5 from '../../assets/app5.png';
import movie1 from '../../assets/movie1.png';
import movie2 from '../../assets/movie2.png';
import movie3 from '../../assets/movie3.png';
import movie4 from '../../assets/movie4.png';
import movie5 from '../../assets/movie5.png';

const Slideshow = ({ activeSection }) => {
  const sections = {
    CRM: [crm1, crm2, crm3, crm4, crm5],
    App: [app1, app2, app3, app4, app5],
    Movie: [movie1, movie2, movie3, movie4, movie5],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [images, setImages] = useState(sections['CRM']); // Default to CRM images

  useEffect(() => {
    if (sections[activeSection]) {
      setImages(sections[activeSection]);
      setCurrentIndex(0); // Reset to the first image whenever the section changes
    }
  }, [activeSection]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const openFullScreen = () => {
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  // Conditional classes for different sections
  const containerClass = activeSection === 'App' ? 'max-w-md h-42' : 'max-w-4xl h-auto';

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // This allows swipe actions to be tracked even with a mouse
  });

  return (
    <div {...handlers} className={`relative w-full p-1 flex justify-center items-center ${containerClass}`}>
      <div className="relative flex justify-center items-center w-full cursor-pointer" onClick={openFullScreen}>
        {/* Display the current image */}
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto object-cover rounded-md"
        />

        {/* Previous Button */}
        <button
          onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
        >
          &larr;
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => { e.stopPropagation(); goToNext(); }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
        >
          &rarr;
        </button>
      </div>

      {/* Full-Screen Modal */}
      {isFullScreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-10 cursor-pointer"
          onClick={closeFullScreen}
        >
          <div className="relative w-full h-full max-w-6xl max-h-full flex justify-center items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentIndex]}
              alt={`Full Screen Slide ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />

            {/* Previous Button in Full-Screen */}
            <button
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-4 rounded-full focus:outline-none"
            >
              &larr;
            </button>

            {/* Next Button in Full-Screen */}
            <button
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-4 rounded-full focus:outline-none"
            >
              &rarr;
            </button>

            {/* Close Button */}
            <button
              onClick={closeFullScreen}
              className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
