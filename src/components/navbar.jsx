import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from React Router

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control the mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-4 sm:px-6 -mt-7 md:px-10 py-6 md:-mt-12 sm:py-8 lg:py-10 xl:py-12 m mb-4 lg:-mt-16 bg-transparent">
      {/* Logo as Navigation Link */}
      <Link to="/" className="mt-2 flex items-center">
        <img src={logo} alt="Logo" className="h-20 sm:h-20 md:h-28 w-auto" />
      </Link>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-[#dddddd]" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FontAwesomeIcon icon={faTimes} className="text-2xl" /> // Close icon
        ) : (
          <FontAwesomeIcon icon={faBars} className="text-2xl" /> // Menu icon
        )}
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 xl:space-x-12 text-sm uppercase tracking-widest absolute md:relative top-20 md:top-auto left-0 md:left-auto bg-[#1b1b1b] md:bg-transparent w-full md:w-auto px-6 md:px-0 z-20`}
      >
        
        <Link to="/projects" className="hover:text-white py-2 md:py-0 border-b md:border-none border-[#2b2b2b] md:border-transparent">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-white py-2 md:py-0">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
