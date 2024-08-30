import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { contactPageAnimations } from '../../animations';
import logo from '../assets/logo.png';
import cvPdf from '../assets/cv.pdf'; // Zorg ervoor dat je cv.pdf in de juiste map staat
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/navbar';

const ContactPage = ({ projectPageRef }) => {
  const [inView, setInView] = useState({
    contactInfo: false,
    skills: false,
  });

  const contactInfoRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const key = entry.target.dataset.key;
            setInView((prev) => ({ ...prev, [key]: true }));
          }
        });
      },
      { threshold: 0.5 }
    );

    if (contactInfoRef.current) observer.observe(contactInfoRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (contactInfoRef.current) observer.unobserve(contactInfoRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1b1b1b] via-[#2b2b2b] to-[#0f0f0f] text-[#dddddd] flex flex-col justify-between relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-24 w-full max-w-5xl items-start mx-auto mt-16 sm:mt-24 md:mt-32 px-4 sm:px-6 lg:px-8">
        {/* Contact Information */}
        <motion.div
          {...contactPageAnimations.contactInfoContainer}
          className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 mt-8 md:mt-12 text-center md:text-center lg:text-center"
          ref={contactInfoRef}
          data-key="contactInfo"
          initial={{ opacity: 0, y: 50 }}
          animate={inView.contactInfo ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
         <motion.h2
  {...contactPageAnimations.contactHeading}
  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide mb-6 sm:mb-8 lg:mb-2 negative-mt-sm"
  
>
  Contact
</motion.h2>


          <motion.p
            {...contactPageAnimations.contactParagraph}
            className="text-sm sm:text-base md:text-md px-4  leading-relaxed max-w-md mx-auto md:mx-0 "
          >
            I’m Jens, a junior web developer with a passion for building user-friendly websites and continuously learning new technologies. I’m always ready for new challenges. On the right, you can see a selection of my programming skills. If you would like to view my full CV, you can download it below.
          </motion.p>

         {/* Address */}
<motion.div {...contactPageAnimations.contactParagraph} className="mt-4 md:mt-4 lg:mt-6">
  <h3 className="text-md sm:text-lg md:text-xl font-bold uppercase mt-3">Adres</h3>
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
<motion.div {...contactPageAnimations.contactParagraph} className="mt-4 md:mt-4 lg:mt-6">
  <h3 className="text-md sm:text-lg md:text-xl font-bold uppercase mt-3">Telefoon</h3>
  <p>
    <a href="tel:+32478025538" className="text-white-500">
      +32 478 02 55 38
    </a>
  </p>
</motion.div>

{/* Email */}
<motion.div {...contactPageAnimations.contactParagraph} className="mt-4 md:mt-4 lg:mt-6">
  <h3 className="text-md sm:text-lg md:text-xl font-bold uppercase mt-3">E-mail</h3>
  <p>
    <a href="mailto:info@jenzvandevelde.be" className="text-white-500">
      info@jenzvandevelde.be
    </a>
  </p>
  {/* Download CV Button */}
  <a
    href={cvPdf}
    download="Jens_CV.pdf"
    className="mt-12 inline-block px-8 py-3 bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] text-white font-light uppercase tracking-wide rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    Download My CV
  </a>
</motion.div>

        </motion.div>

       {/* Skills */}
<motion.div
  {...contactPageAnimations.formContainer} // Reusing form container animations for consistency
  className="bg-[#151515] p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-lg relative mb-10 mt-4 sm:pb-8"
  ref={skillsRef}
  data-key="skills"
  initial={{ opacity: 0, y: 50 }}
  animate={inView.skills ? { opacity: 1, y: 0 } : { opacity: 0 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
>
  <motion.h2
    {...contactPageAnimations.formHeading}
    className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold uppercase tracking-wide mb-4 sm:mb-6 md:mb-8 lg:font-normal"
  >
    Skills
  </motion.h2>
  <motion.ul
    {...contactPageAnimations.form}
    className="list-none space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5"
  >
    <li>Basics C#</li>
    <li>Basics Python</li>
    <li>CSS</li>
    <li>Figma</li>
    <li>Firebase</li>
    <li>GIT</li>
    <li>HTML</li>
    <li>JavaScript</li>
    <li>Microsoft Office</li>
    <li>React</li>
    <li>Salesforce</li>
    <li>SQL</li>
    <li>TailwindCSS</li>
    <li>TypeScript</li>
  </motion.ul>
</motion.div>


      </div>

    

      {/* Scroll Up Indicator */}
<div
  className="absolute bottom-12 right-4 flex flex-row items-center text-xs uppercase tracking-widest cursor-pointer"
  onClick={() => projectPageRef.current.scrollIntoView({ behavior: 'smooth' })}
>
  <div className="w-px h-8 bg-[#dddddd] -mt-40 -mr-2"></div>
  <span className="-ml-5 rotate-90 mb-10">Scroll</span>
</div>

{/* Footer */}
<footer className="text-center py-4 -mt-10 text-[#dddddd] font-thin">
  <p className="text-xs sm:text-xs">© 2024 Jens Van de Velde. All Rights Reserved.</p>
</footer>


    </div>
  );
};

export default ContactPage;
