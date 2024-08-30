import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDrag } from '@use-gesture/react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const bind = useDrag(
    ({ swipe: [swipeX] }) => {
      if (swipeX === -1) {
        closeMenu();
      }
    },
    { axis: 'x' }
  );

  return (
    <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-4 mr-4 sm:px-6 -mt-5 md:px-10 py-6 md:-mt-12 sm:py-8 lg:py-10 xl:py-12 mb-4 lg:-mt-16 bg-transparent">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-20 sm:h-20 md:h-28 w-auto" />

      {/* Mobile Menu Button */}
      <button className="md:hidden text-[#dddddd]" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FontAwesomeIcon icon={faTimes} className="text-2xl" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        )}
      </button>

     {/* Full-Screen Sliding Navigation Menu */}
<div
  {...bind()}
  className={`fixed top-0 left-0 h-full w-full bg-[#1b1b1b] transform transition-transform duration-300 ease-in-out z-20 md:hidden flex flex-col justify-center items-center ${
    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
  style={{ touchAction: 'none' }}
  onClick={closeMenu}  // Close menu when clicking anywhere on the screen
>
  {/* Close Button */}
  <button
    onClick={closeMenu}
    className="absolute top-4 right-4 text-[#dddddd] text-base font-light mt-4 mr-4"
    aria-label="Close menu"
  >
    <FontAwesomeIcon icon={faTimes} />
  </button>

  <div
    className="flex flex-col text-sm uppercase tracking-widest text-center w-full mt-8"
    onClick={(e) => e.stopPropagation()} // Stop click propagation to avoid closing when clicking inside the menu
  >
    <Link
      to="/#projects"
      onClick={toggleMenu}
      className="hover:text-white py-4 border-b border-[#2b2b2b] mx-auto w-1/4"
    >
      Projects
    </Link>
    <Link
      to="/#contact"
      onClick={toggleMenu}
      className="hover:text-white py-4 mx-auto w-1/2"
    >
      Contact
    </Link>
  </div>
</div>



      {/* Desktop Navigation Links */}
      <div className="hidden md:flex flex-row space-x-6 lg:space-x-8 xl:space-x-12 text-sm uppercase tracking-widest">
        <Link to="/#projects" className="hover:text-white py-2 md:py-0">
          Projects
        </Link>
        <Link to="/#contact" className="hover:text-white py-2 md:py-0">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
