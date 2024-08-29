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

      {/* Full-Page Sliding Navigation Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#1b1b1b] transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-20 md:hidden flex flex-col justify-center items-center`}
      >
        <div className="flex flex-col text-sm uppercase tracking-widest text-center w-full">
          <Link
            to="/"
            onClick={toggleMenu}
            className="hover:text-white py-4 border-b border-[#2b2b2b] mx-auto w-1/4"
          >
            Home
          </Link>
          <Link
            to="/project"
            onClick={toggleMenu}
            className="hover:text-white py-4 border-b border-[#2b2b2b] mx-auto w-1/4"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="hover:text-white py-4 mx-auto w-1/2"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex flex-row space-x-6 lg:space-x-8 xl:space-x-12 text-sm uppercase tracking-widest">
        <Link
          to="/project"
          className="hover:text-white py-2 md:py-0 border-b md:border-none border-[#2b2b2b] md:border-transparent"
        >
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
