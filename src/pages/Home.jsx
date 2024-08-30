import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Navbar from '../components/navbar';
import ProjectPage from '../components/projects/Projectpage';
import MobileProjectPage from '../components/projects/mobileprojectpage';
import IPadProjectPage from '../components/projects/ipadprojectpage'; // Import the new iPad Project Page component
import ContactPage from './Contact';
import Firstpage from '../components/firstpage';

const HomePage = () => {
  const homePageRef = useRef(null);
  const projectPageRef = useRef(null);
  const contactPageRef = useRef(null);

  const location = useLocation();

  const scrollToHomePage = () => {
    homePageRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjectPage = () => {
    projectPageRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContactPage = () => {
    contactPageRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (location.hash === '#contact') {
      scrollToContactPage();
    } else if (location.hash === '#projects') {
      scrollToProjectPage();
    }
  }, [location]);

  // Detect if the device is mobile or iPad Air
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isIPadAir = useMediaQuery({ minWidth: 767, maxWidth: 912, minHeight: 1024, maxHeight: 1400 });

  return (
    <div className="w-full">
      <Navbar scrollToHomePage={scrollToHomePage} />
      <div
        ref={homePageRef}
        className="min-h-screen bg-gradient-to-b from-[#1b1b1b] via-[#2b2b2b] to-[#0f0f0f] text-[#dddddd] flex flex-col justify-between relative"
      >
        <Firstpage scrollToProjectPage={scrollToProjectPage} />
      </div>

      <div ref={projectPageRef} className="relative">
        {isMobile ? (
          <MobileProjectPage
            scrollToHomePage={scrollToHomePage}
            scrollToContactPage={scrollToContactPage}
          />
        ) : isIPadAir ? (
          <IPadProjectPage
            scrollToHomePage={scrollToHomePage}
            scrollToContactPage={scrollToContactPage}
          />
        ) : (
          <ProjectPage
            scrollToHomePage={scrollToHomePage}
            scrollToContactPage={scrollToContactPage}
          />
        )}
      </div>

      <div ref={contactPageRef} className="relative">
        <ContactPage projectPageRef={projectPageRef} />
      </div>
    </div>
  );
};

export default HomePage
