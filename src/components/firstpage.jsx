import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../components/navbar';

const Firstpage = ({ scrollToProjectPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b1b1b] via-[#2b2b2b] to-[#0f0f0f] text-[#dddddd] flex flex-col justify-between relative">
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow text-center space-y-4 animate-fadeInUp">
        {/* "I Am" with negative left margin */}
        <p className="text-sm uppercase tracking-widest -ml-40 sm:-ml-56 md:-ml-80">I Am</p>

        {/* "Jens" with responsive text size */}
        <h1 className="text-[12vw] sm:text-[10vw] md:text-[10vw] font-extrabold leading-none">JENS</h1>

        {/* "A Junior Web Developer" with responsive right margin */}
        <p className="text-sm uppercase tracking-widest ml-36 sm:ml-72 md:ml-72">
          <span className="block sm:inline">A Junior</span>
          <span className="block sm:inline"> Web Developer</span>
        </p>
      </div>

      {/* Social Icons and Scroll Indicator */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-10 py-8">
        {/* Social Icons */}
        <div className="flex flex-col space-y-4 ml-5">
          <a href="#" className="text-[#dddddd] text-xl hover:text-gray-400">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: '#dddddd' }} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="flex flex-row items-center text-xs uppercase tracking-widest transform rotate-90 cursor-pointer"
          onClick={scrollToProjectPage}  // Scroll to ProjectPage on click
        >
          <span className="-mr-3 -ml-20">Scroll</span>
          <div className="w-px h-8 rotate-90 ml-10 bg-[#dddddd]"></div>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
