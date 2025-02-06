import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import mypic from "../../assets/Sridhar_img.jpg";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";

function Accordion() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const accordionData = [
    { 
      Maintitle: "EXPLORE",
      icon: "🧭"
    },
    { title: "About", path: "/about", icon: "👤" },
    { title: "Work", path: "/work", icon: "💼" },
    { title: "Projects", path: "/projects", icon: "🚀" },
    // { title: "Community", path: "/community", icon: "🤝" },
    { title: "Read CV", path: "/cv", icon: "📄" },
    { title: "Get In Touch", path: "/contact", icon: "🤝" },
    { 
      Maintitle: "QUICK LINKS",
      icon: "🔗"
    },
    { title: "Twitter / X", path: "https://x.com/Sridhar2920", icon: "𝕏" },
    { title: "LinkedIn", path: "https://www.linkedin.com/in/sridhar-e-b57738202/", icon: <FaLinkedin className=" bg-white text-sky-500" /> },
    { title: "Github", path: "https://github.com/Sridhare29", icon: <VscGithubInverted className=" bg-white text-gray-800" /> },
  ];

  const handleNavigation = (path) => {
    if (path.startsWith("http")) {
      window.open(path, "_blank");
    } else {
      navigate(path);
    }
  };

  return (
    <motion.div 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="flex flex-col bg-white backdrop-blur-md w-[20%] h-screen lg p-2 m-2"
    >
      {/* Profile Section */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="flex mb-6 justify-center w-full bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4"
        onClick={() => navigate("/")}
      >
        <div className="relative group" >
          <img 
            src={mypic} 
            className="w-20 h-20 rounded-full shadow-lg transition-transform group-hover:scale-105" 
            alt="Sridhar" 
          />
          <div className="absolute inset-0 bg-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="flex flex-col justify-center ml-4">
          <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sridhar Elumalai
          </h1>
          <p className="text-gray-600 font-mono text-sm">Full Stack Developer</p>
        </div>
      </motion.div>

      {/* Accordion Links */}
      <div className="space-y-2 ">
        {accordionData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            className={`
              w-full rounded-xl transition-all duration-300
              ${item.path ? "cursor-pointer" : ""}
              ${hoveredIndex === index && item.path ? "bg-gradient-to-r from-blue-50 to-purple-50" : ""}
            `}
            onClick={() => item.path && handleNavigation(item.path)}
          >
            <div className="flex items-center p-3">
              <span className="text-xl mr-3">{item.icon}</span>
              {item.Maintitle ? (
                <span className="font-semibold text-gray-800 tracking-wide">
                  {item.Maintitle}
                </span>
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