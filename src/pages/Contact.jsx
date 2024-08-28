import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { contactPageAnimations } from '../../animations'; // Import animations from animations.js
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import icons for mobile menu
import Navbar from '../components/navbar';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b1b1b] via-[#2b2b2b] to-[#0f0f0f] text-[#dddddd] flex flex-col justify-between relative">
      <Navbar />

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 w-full max-w-5xl items-start mx-auto mt-16 sm:mt-24 md:mt-32 px-4 sm:px-6 lg:px-8">
        {/* Contact Information */}
        <motion.div {...contactPageAnimations.contactInfoContainer} className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 mt-8 md:mt-12 text-center md:text-center lg:text-center">
          <motion.h2 {...contactPageAnimations.contactHeading} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl sm:mt-0 md:mt-4 mt-2 font-bold uppercase tracking-wide mb-6 sm:mb-8 lg:mb-5">
            Contact
          </motion.h2>
          <motion.p {...contactPageAnimations.contactParagraph} className="text-sm sm:text-base md:text-lg px-4 leading-relaxed max-w-md mx-auto md:mx-0">
            Heeft u vragen over het bouwen van een website, het hosten van uw website of webontwikkeling in het algemeen? Neem gerust contact met ons op. Wij staan altijd klaar om u te helpen!
          </motion.p>

          {/* Address */}
          <motion.div {...contactPageAnimations.contactParagraph} className="mt-4 md:mt-6 lg:mt-8">
            <h3 className="text-md sm:text-lg md:text-xl font-bold uppercase mt-5">Adres</h3>
            <p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hofstraat,+9000+Gent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white-500"
              >
                Hofstraat, 9000 Gent
              </a>
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div {...contactPageAnimations.contactParagraph} className="mt-4 md:mt-6 lg:mt-8">
            <h3 className="text-md sm:text-lg md:text-xl font-bold uppercase mt-5">Telefoon</h3>
            <p>
              <a href="tel:+32478025538" className="text-white-500">
                +32 478 02 55 38
              </a>
            </p>
          </motion.div>

          {/* Email */}
          <motion.div {...contactPageAnimations.contactParagraph} className="mt-4 md:mt-6 lg:mt-8">
            <h3 className="text-md sm:text-lg md:text-xl font-bold uppercase mt-5">E-mail</h3>
            <p>
              <a href="mailto:info@kikko.tech" className="text-white-500">
                info@kikko.tech
              </a>
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div {...contactPageAnimations.formContainer} className="bg-[#151515] p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg relative mb-10 mt-4">
          <motion.h2 {...contactPageAnimations.formHeading} className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold uppercase tracking-wide mb-4 sm:mb-6 md:mb-8 lg:font-normal">
            Contactformulier
          </motion.h2>
          <motion.form {...contactPageAnimations.form} className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            <input
              type="text"
              placeholder="Uw naam"
              className="w-full p-2 sm:p-3 md:p-4 bg-transparent border-b border-[#dddddd] outline-none"
            />
            <input
              type="text"
              placeholder="Uw telefoonnummer"
              className="w-full p-2 sm:p-3 md:p-4 bg-transparent border-b border-[#dddddd] outline-none"
            />
            <input
              type="email"
              placeholder="Uw e-mailadres"
              className="w-full p-2 sm:p-3 md:p-4 bg-transparent border-b border-[#dddddd] outline-none"
            />
            <textarea
              placeholder="Bericht"
              className="w-full p-2 sm:p-3 md:p-4 bg-transparent border-b border-[#dddddd] outline-none h-24 sm:h-28 md:h-32 lg:h-40"
            ></textarea>
            <button
              type="submit"
              className="mt-4 py-2 sm:py-3 md:py-4 px-4 sm:px-5 md:px-6 bg-[#dddddd] text-black font-bold hover:bg-white transition-all"
            >
              Verstuur bericht →
            </button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
