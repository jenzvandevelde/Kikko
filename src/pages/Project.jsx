import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

// Import images from the assets folder
import afbeelding1 from '../assets/afbeelding1.png';
import afbeelding2 from '../assets/afbeelding2.png';
import afbeelding3 from '../assets/afbeelding3.png';
import Navbar from '../components/navbar';

const ProjectPage = () => {
  // Set initial state to 1 to select the middle project by default
  const [activeProject, setActiveProject] = useState(1);

  const handleProjectClick = (projectIndex) => {
    setActiveProject(projectIndex === activeProject ? null : projectIndex);
  };

  const images = [afbeelding1, afbeelding2, afbeelding3];

  return (
    <div className="min-h-screen bg-[#212121] text-white relative flex flex-col justify-center items-center overflow-hidden">
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center space-y-6 mt-8 px-4">
        {/* Project Previews */}
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative w-44 h-[14rem] sm:w-52 sm:h-[16rem] cursor-pointer transition-all duration-500 ease-in-out ${
              activeProject === index
                ? 'z-20 scale-105 opacity-100'
                : 'z-10 scale-95 opacity-70'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '1rem',
              boxShadow: activeProject === index ? '0px 8px 20px rgba(0, 0, 0, 0.5)' : 'none',
            }}
            onClick={() => handleProjectClick(index)}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={
              activeProject === index
                ? { scale: 1.05, opacity: 1 }
                : { scale: 0.95, opacity: 0.7 }
            }
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Floating Title Over Image */}
            {activeProject === index && (
              <motion.div
                className="absolute bottom-4 left-0 w-full flex justify-center text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              >
                <h2
                  className="text-xl sm:text-2xl font-extrabold uppercase text-center px-2"
                  style={{ marginRight: 0 }} // Ensure no negative margin
                >
                  Project {index + 1}
                </h2>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

            {/* Bottom Content */}
            <div className="relative flex flex-col items-center text-center z-10 mt-6 px-4">
        {/* Text content visible only on larger screens */}
        <p className="text-center mb-6 text-gray-400 text-sm max-w-xs hidden sm:block md:block lg:block xl:block">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all uppercase text-sm font-semibold rounded-lg shadow-lg hover:shadow-2xl">
          View Project
        </button>
      </div>


      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center px-4 py-4 animate-bounce">
        <div className="flex flex-row items-center text-xs uppercase tracking-widest transform rotate-90">
          <span className="mr-2">Scroll</span>
          <div className="w-px h-6 bg-[#dddddd]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
