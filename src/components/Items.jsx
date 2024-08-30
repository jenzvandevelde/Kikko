import React from "react";

const Items = ({ activeSection }) => {
  const crmItems = [
    {
      number: "01",
      title: "Development of an Invoice Program for New Construction Projects",
      description:
        "Created a CRM program to simplify the invoicing process, making it easier to manage and track invoices for new construction projects.",
    },
    {
      number: "02",
      title: "Backend built with Python and Flask",
      description:
        "The backend is developed using Python and Flask, providing a robust and secure foundation for the CRM system.",
    },
    {
      number: "03",
      title: "Frontend developed with React",
      description:
        "React was used to build a dynamic and responsive user interface, ensuring a seamless user experience.",
    },
    {
      number: "04",
      title: "Utilizes CORS for secure API handling",
      description:
        "Implemented CORS to securely handle API requests, ensuring data is transmitted safely across different domains.",
    },
    {
      number: "05",
      title: "Database management with Azure SQL Edge on Raspberry Pi",
      description:
        "Managed data efficiently using Azure SQL Edge, hosted on a Raspberry Pi for both local and cloud-based storage solutions.",
    },
    {
      number: "06",
      title: "Automatic PDF invoice generation using Python",
      description:
        "Integrated PDF generation for invoices directly within the application, allowing for easy creation of professional documents.",
    },
    {
      number: "07",
      title: "Importing client data from Excel",
      description:
        "Enabled importing of client data from Excel files, streamlining the process of data entry and management.",
    },
    {
      number: "08",
      title: "Styling using CSS Modules",
      description:
        "CSS Modules were used for styling, ensuring that the application maintains a consistent and clean appearance.",
    },
    {
      number: "09",
      title: "Automatically upload invoices to Dropbox",
      description:
        "Integrated functionality to automatically upload generated invoices to a connected Dropbox account, ensuring secure and accessible storage of all documents.",
    },
  ];

  const mobileItems = [
    {
      number: "01",
      title: "Built as an Expo project",
      description:
        "This project was built using the Expo framework, allowing for rapid development of React Native applications.",
    },
    {
      number: "02",
      title: "Utilizes React Native components, local state, and props",
      description:
        "The app leverages native components of React Native, managing state locally and passing data through props to ensure smooth UI behavior.",
    },
    {
      number: "03",
      title: "Styling and layout managed with styled-components",
      description:
        "Styled-components are used for managing the app's styles and layout, providing flexibility and maintainability in design.",
    },
    {
      number: "04",
      title: "State management using Redux",
      description:
        "Redux is implemented for state management, making it easier to handle complex state logic across the application.",
    },
    {
      number: "05",
      title: "Navigation between multiple screens",
      description:
        "The app includes seamless navigation across multiple screens, providing a fluid user experience.",
    },
    {
      number: "06",
      title: "User input handling",
      description:
        "The application effectively manages user inputs, ensuring data is captured accurately and processed efficiently.",
    },
    {
      number: "07",
      title: "Authentication using Firebase",
      description:
        "Firebase is used to handle authentication, providing a secure and reliable way to manage user sign-ins and sign-ups.",
    },
    {
      number: "08",
      title: "Sleek and polished appearance",
      description:
        "The app features a sleek and polished design, offering users an aesthetically pleasing and intuitive interface.",
    },
    {
      number: "09",
      title: "Modern design",
      description:
        "The design follows modern design principles, ensuring the app looks fresh and is easy to navigate.",
    },
  ];


  const webshopItems = [
    {
      number: "01",
      title: "REST API developed with Node.js",
      description:
        "This project involved developing a REST API using Node.js, providing a robust backend for the application.",
    },
    {
      number: "02",
      title: "Connected to a MySQL database using Prisma",
      description:
        "The API is connected to a MySQL database using Prisma, ensuring efficient data management and retrieval.",
    },
    {
      number: "03",
      title: "Frontend application built with React",
      description:
        "The frontend is built with React, providing a dynamic and responsive user interface.",
    },
    {
      number: "04",
      title: "Utilizes React components, local state, and props",
      description:
        "React components are used extensively, managing local state and passing data through props for a seamless UI experience.",
    },
    {
      number: "05",
      title: "Implements React hooks",
      description:
        "React hooks are utilized for managing state and side effects, making the code more modular and easier to maintain.",
    },
    {
      number: "06",
      title: "Styling and layout of components",
      description:
        "The components are styled using CSS and styled-components, providing a polished and consistent look.",
    },
    {
      number: "07",
      title: "State management with Redux",
      description:
        "Redux is used for state management, ensuring that the application state is predictable and easy to debug.",
    },
    {
      number: "08",
      title: "Navigation between multiple pages in React application",
      description:
        "The application includes navigation across multiple pages, ensuring a smooth and intuitive user experience.",
    },
    {
      number: "09",
      title: "Authentication using Node.js backend with JWT",
      description:
        "Authentication is handled using JWT tokens in the Node.js backend, providing a secure way to manage user sessions.",
    },
  ];

  const itemsToShow =
    activeSection === "CRM"
      ? crmItems
      : activeSection === "Mobile App"
      ? mobileItems
      
      : activeSection === "Webshop"
      ? webshopItems
      : [];

  return (
    <div className="flex flex-col items-center p-8 sm:p-10 md:p-9">
      <h1 className="text-4xl sm:text-3xl font-light mb-10  text-[#dddddd] ">
        Explanation
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-screen-lg mt-5">
        {itemsToShow.map((item, index) => (
          <div
            key={index}
            className=" p-3 rounded-xl text-[#f0f0f0] shadow-2xlg transform transition-transform duration-300 hover:scale-105"
          >
            <h2 className="text-3xl sm:text-2xl font-bold mb-2">{item.number}</h2>
            <h3 className="textbasicl sm:text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-xs sm:text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
