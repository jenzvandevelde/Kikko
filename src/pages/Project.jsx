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
      <div className="flex flex-wrap justify-center items-center space-x-0 md:space-x-6 mt-8 md:mt-24 mb-16 md:mb-32">
        {/* Project Previews */}
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`relative w-64 h-[20rem] md:w-80 md:h-[30rem] cursor-pointer transition-all duration-500 ease-in-out ${
              activeProject === index
                ? 'z-20 blur-0 opacity-100'
                : 'z-10 blur-sm opacity-50'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '1rem',
            }}
            onClick={() => handleProjectClick(index)}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={
              activeProject === index
                ? { scale: 1.05, opacity: 1 }
                : { scale: 0.9, opacity: 0.5 }
            }
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {/* Floating Title Over Image */}
            {activeProject === index && (
              <motion.div
                className="absolute bottom-4 left-0 transform translate-x-4 w-full flex justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              >
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase whitespace-nowrap -ml-7 text-center">
  Project {index + 1}
</h2>


              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Bottom Content */}
      <div className="relative flex flex-col items-center text-center z-10 -mt-8 md:-mt-14 px-4">
        <p className="text-center mb-8 text-gray-400 max-w-lg">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.
        </p>
        <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all uppercase font-semibold">
          View Project
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-end items-center px-4 md:px-10 py-4 md:py-8">
        {/* Scroll Indicator */}
        <div className="flex flex-row items-center text-xs uppercase tracking-widest transform rotate-90">
          <span className="-mr-3 -ml-20">Scroll</span>
          <div className="w-px h-8 rotate-90 ml-10 bg-[#dddddd]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
