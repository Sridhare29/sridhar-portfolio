import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import mypic from "../../assets/Sridhar_img.jpg";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import { FiMenu } from "react-icons/fi"; 

function Accordion({ isVisible, onClose }) {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const accordionData = [
    { title: "About", path: "/about", icon: "👤" },
    { title: "Work", path: "/work", icon: "💼" },
    { title: "Projects", path: "/projects", icon: "🚀" },
    { title: "Read CV", path: "/cv", icon: "📄" },
    { title: "Get In Touch", path: "/contact", icon: "🤝" },
  ];

  const handleNavigation = (path) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      navigate(path);
      onClose(); // Close the accordion on small screens after navigation
    }
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className={` flex flex-col bg-white backdrop-blur-md w-[40%] lg:w-[22%] h-screen m-4 ${
        isVisible ? "block" : "hidden lg:block"
      }`}
    >
      {/* Profile Section */}
      <motion.div
  whileHover={{ scale: 1.02 }}
  className="flex mb-6 justify-center w-full bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl px-2 py-4 sm:px-0.5 sm:py-2"
  onClick={() => navigate("/")}
>
  <div className="relative group flex items-center sm:items-start">
    {/* Profile Picture */}
      <img
        src={mypic}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shadow-lg transition-transform group-hover:scale-105"
        alt="Sridhar"
      />
      <div className="absolute inset-0 bg-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    {/* Name and Title */}
    <div className="flex flex-col justify-center ml-4">
      <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Sridhar Elumalai
      </h1>
      <p className="text-gray-600 font-mono text-xs sm:text-sm">
        Full Stack Developer
      </p>
  </div>
</motion.div>

      {/* Accordion Links */}
      <div className="space-y-2">
        {accordionData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className={`
              w-full rounded-xl transition-all duration-300
              ${item.path ? "cursor-pointer" : ""}
              ${
                hoveredIndex === index && item.path
                  ? "bg-gradient-to-r from-blue-50 to-purple-50"
                  : ""
              }
            `}
            onClick={() => item.path && handleNavigation(item.path)}
          >
            <div className="flex items-center p-3">
              <span className="text-xl mr-3">{item.icon}</span>
              {item.socialTitle ? (
                <div className="flex items-center">
                  <span className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                    {item.socialTitle}
                  </span>
                </div>
              ) : (
                <span className="text-gray-600 font-medium hover:text-blue-600 transition-colors">
                  {item.title}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Accordion;
