import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import afbeelding1 from '../../assets/afbeelding1.png';
import afbeelding2 from '../../assets/afbeelding2.png';
import afbeelding3 from '../../assets/afbeelding3.png';

const Ipadprojectpage = ({ scrollToHomePage, scrollToContactPage }) => {
  const [activeProject, setActiveProject] = useState(1);
  const [inView, setInView] = useState([false, false, false]);
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setInView((prev) => {
              const newInView = [...prev];
              newInView[index] = true;
              return newInView;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (projectRefs.current) {
        projectRefs.current.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      }
    };
  }, []);

  const handleProjectClick = (projectIndex) => {
    setActiveProject(projectIndex === activeProject ? null : projectIndex);
  };

  const images = [afbeelding1, afbeelding2, afbeelding3];
  const titles = ['CRM', 'Mobile App', 'Website']; // Array with titles
  const descriptions = [
    "CRM: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    "Mobile App: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    "Website: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f0f] via-[#2b2b2b] to-[#1b1b1b] text-white relative flex flex-col justify-center items-center overflow-hidden px-8 md:px-16 lg:px-24">
      <div className="flex flex-wrap justify-center items-center space-x-0 md:space-x-6 mt-8 md:mt-24 mb-16 md:mb-32">
        {images.map((image, index) => (
          <motion.div
            key={index}
            ref={(el) => (projectRefs.current[index] = el)}
            data-index={index}
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
              inView[index]
                ? activeProject === index
                  ? { scale: 1.05, opacity: 1 }
                  : { scale: 0.9, opacity: 0.5 }
                : { scale: 0.9, opacity: 0 }
            }
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {activeProject === index && (
              <motion.div
                className="absolute bottom-4 left-0 transform translate-x-4 w-full flex justify-start md:justify-center md:left-1/2 md:transform md:-translate-x-1/2 -ml-40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
              >
                <h2 className="text-7xl font-extrabold uppercase whitespace-nowrap -ml-7 md:ml-0 text-center">
                  {titles[index]} {/* Dynamische titel */}
                </h2>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="relative flex flex-col items-center text-center z-10 -mt-8 md:-mt-14 px-4">
        {activeProject !== null && (
          <p className="text-center mb-8 text-gray-400 max-w-lg">
            {descriptions[activeProject]}
          </p>
        )}
        <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all uppercase font-semibold rounded-md">
          View Project
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-end items-center px-4 md:px-10 py-4 md:py-8">
        <div className="flex flex-row items-center text-xs uppercase tracking-widest transform rotate-90 -mt-300 -mr-24">
          <div
            className="w-px h-8 rotate-90 mr-28 bg-[#dddddd] cursor-pointer"
            onClick={scrollToHomePage}
          ></div>
          <span className="-mr-3 -ml-20">Scroll</span>
          <div
            className="w-px h-8 rotate-90 ml-10 mr-20 bg-[#dddddd] cursor-pointer"
            onClick={scrollToContactPage}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Ipadprojectpage;
