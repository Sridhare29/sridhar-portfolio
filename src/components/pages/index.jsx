import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Accordion from "../Layout/Accordion";
import { Outlet } from "react-router-dom";
import Footer from './Dashboard/Footer';

const Dashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex w-full h-screen">

      {/* Mobile Menu Button - Only visible on small screens */}
      <div
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 bg-white rounded-full shadow-lg cursor-pointer"
      >
        {isMobileMenuOpen ? (
          <IoMdClose className="w-6 h-6 text-gray-600" />
        ) : (
          <FiMenu className="w-6 h-6 text-gray-600" />
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0  bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

        <Accordion 
          isVisible={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)}
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