import { FaGithub } from "react-icons/fa";
import { FaArrowRight, FaRocket } from "react-icons/fa6";
import { useState } from "react";

const ProjectCard = ({ title, techStack, description, projectLink, deployLink }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="group relative flex flex-col h-full rounded-[1.5rem] border border-[#0E0E10]/10 bg-white/60 backdrop-blur-md p-6 shadow-sm transition-all duration-300 hover:border-purple-500/30 hover:-translate-y-1"
    >
      {/* ambient glow on hover */}
      <div
        className={`absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-2xl transition-opacity duration-500 pointer-events-none ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Header */}
      <div className="relative flex items-start justify-between mb-4">
        <h2 className="font-display italic text-xl text-[#0E0E10] pr-3">{title}</h2>
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
            className="shrink-0 flex items-center justify-center w-9 h-9 rounded-full border border-[#0E0E10]/10 bg-white/70 text-[#3d3d42] transition-all duration-300 hover:border-purple-500/40 hover:text-purple-600 hover:-translate-y-0.5"
          >
            <FaGithub className="text-base" />
          </a>
        )}
      </div>

      {/* Tech pills */}
      <div className="relative flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] px-3 py-1 rounded-full border border-[#0E0E10]/10 bg-white/70 text-[#3d3d42] transition-colors duration-300 group-hover:border-purple-500/20"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="relative font-body text-sm text-[#3d3d42] leading-relaxed mb-6 flex-1">
        {description}
      </p>

      {/* Actions */}
      <div className="relative flex flex-wrap items-center gap-3 mt-auto pt-2 border-t border-[#0E0E10]/10">
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#3d3d42] transition-colors duration-300 hover:text-purple-600"
          >
            View code
            <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        )}

        {deployLink && (
          <a
            href={deployLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0E0E10] text-white font-body text-xs font-medium tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:shadow-md hover:shadow-purple-500/20"
          >
            <FaRocket className="text-[11px]" />
            Live demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;