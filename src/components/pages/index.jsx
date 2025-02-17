import React, { useState } from 'react';
import Accordion from "../Layout/Accordion";
import { Outlet } from "react-router-dom";
import Footer from './Dashboard/Footer';
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Dashboard = () => {
  const [isAccordionVisible, setIsAccordionVisible] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionVisible(!isAccordionVisible);
  };

  return (
    <div className="flex w-full h-screen">
      {/* Menu Icon for Small Screens */}
      <div
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-white rounded-full shadow-lg cursor-pointer"
        onClick={toggleAccordion}
      >
        {isAccordionVisible ? (
          <IoMdClose className="w-6 h-6 text-gray-600" />
        ) : (
          <FiMenu className="w-6 h-6 text-gray-600" />
        )}
      </div>

      {/* Common Sidebar */}
      <Accordion
        isVisible={isAccordionVisible}
        onClose={() => setIsAccordionVisible(false)}
      />

      {/* Dynamic Content */}
      <div
        className={`w-full h-full bg-gradient-to-b from-gray-50 to-gray-100 `}
      >
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;