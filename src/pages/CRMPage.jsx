import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CRM1 from "../assets/Rapidpark.png";
import Navbar from "../components/navbar";
import Items from "../components/Items";
import Slideshow from "../components/projects/slideshow";

const CRMPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Scroll naar de bovenkant van de pagina wanneer de component wordt geladen
    window.scrollTo(0, 0);
    
    // Triggers the animation on load
    setIsVisible(true);
  }, []);

  const goToSomePage = () => {
    navigate("/");
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#1b1b1b] via-[#2b2b2b] to-[#0f0f0f] text-[#dddddd] flex flex-col justify-between relative"
    >
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow">
        <h1
          className={`text-[20vw] sm:text-[8vw] md:text-[6vw] lg:text-[10vw] font-light leading-none text-center md:text-left mt-20 md:mt-20 lg:ml-8 md:ml-10 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          CRM
        </h1>

        <div className="flex flex-col md:flex-row my-8 pl-5 pr-4 sm:pl-7 sm:pr-4 text-center lg:text-left md:text-left md:ml-3">
          <div className={`order-2 md:order-1 md:w-1/2 lg:mb-8 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}>
            <h2 className="text-xl sm:text-2xl mt-16 md:text-1xl lg:text-3xl font-bold mb-4 lg:-mt-2">
              How it is put together
            </h2>
            <ul className="list-none text-xs sm:text-lg lg:text-base space-y-2 font-light md:text-sm">
              <li>
                Development of an Invoice Program for New Construction Projects
              </li>
              <li>Backend built with Python and Flask</li>
              <li>Frontend developed with React</li>
              <li>Utilizes CORS for secure API handling</li>
              <li>Database management with Azure SQL Edge on Raspberry Pi</li>
              <li>Automatic PDF invoice generation using Python</li>
              <li>Importing client data from Excel</li>
              <li>Styling using CSS Modules</li>
              <li>Automatically upload invoices to Dropbox.</li>
            </ul>
          </div>

          <div className={`order-1 md:order-2 md:w-1/2 flex justify-center items-center md:mt-0 lg:ml-20 lg:-mt-10 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}>
            <img
              src={CRM1}
              alt="CRM"
              className="w-full max-w-xs sm:max-w-sm mt-10 -mb-10 md:max-w-md lg:max-w-lg xl:max-w-xl rounded-lg xl:mt-0"
            />
          </div>
        </div>

        {/* Items Section */}
        <div className={`relative z-10 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
          <Items activeSection="CRM" />
        </div>

        {/* Slideshow Component */}
        <div className="w-full py-8 flex justify-center items-center">
          <Slideshow activeSection="CRM" />
        </div>
      </div>
    </div>
  );
};

export default CRMPage;
