import { FaGithub, FaRocket } from "react-icons/fa";
import { FaArrowRight, FaEye } from "react-icons/fa6";
import { useState } from "react";

const ProjectCard = ({ title, techStack, description, projectLink, deployLink }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div 
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6 border border-transparent hover:border-blue-500 transition duration-300 relative group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          {title}
        </h2>
        <FaGithub className="text-gray-600 text-2xl hover:text-black cursor-pointer transition-colors" />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-gray-600 mb-6">{description}</p>

      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300
                 sm:hidden group-hover:flex"
        >
          <span>View Code</span>
          <FaArrowRight className="ml-2" />
        </a>
        
        {deployLink && (
          <a
            href={deployLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium transform transition-all duration-300 ${
              isHovering ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 sm:opacity-100 sm:translate-y-0"
            }`}
          >
            <FaRocket className={`transition-transform duration-300 ${isHovering ? "animate-pulse" : ""}`} />
            <span>Live Demo</span>
            <FaEye className={`transition-transform duration-300 ${isHovering ? "animate-bounce" : ""}`} />
          </a>
        )}
      </div>
      
      {/* Decorative element that appears on hover */}
      <div 
        className={`absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-tr from-purple-300/30 to-blue-300/30 rounded-full blur-md transition-opacity duration-500 ${
          isHovering ? "opacity-100" : "opacity-0"
        }`} 
      />
    </div>
  );
};

export default ProjectCard;