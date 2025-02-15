import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full py-6 mt-auto bg-gray-100 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-gray-700  text-sm">
            © {currentYear} All rights reserved
          </p>
          <div className="flex items-center space-x-1 text-gray-900 ">
            <span>Developed by Sridhar ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;