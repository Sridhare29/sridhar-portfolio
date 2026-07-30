import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import mypic from "../../assets/Sridhar_NewProfile.png";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { VscGithubInverted } from "react-icons/vsc";

function Accordion({ isVisible, onClose }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const accordionData = [
    { title: "About", path: "/about" },
    { title: "Experience", path: "/work" },
    { title: "Projects", path: "/projects" },
    { title: "Read CV", path: "/cv" },
    { title: "Contact", path: "/contact" },
  ];

  const socials = [
    { icon: <VscGithubInverted />, href: "https://github.com/Sridhare29", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/sridhar-e-b57738202/", label: "LinkedIn" },
    // { icon: <FaYoutube />, href: "https://www.youtube.com/@codenuts29/", label: "YouTube" },
    { icon: <BsTwitterX />, href: "https://x.com/Sridhar2920", label: "X" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    onClose && onClose();
  };

  return (
    <motion.div
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col justify-between bg-white text-[#0E0E10] w-[40%] lg:w-[22%] h-[calc(100vh-2rem)] m-4 rounded-[1.75rem] border border-[#0E0E10]/10 overflow-hidden ${
        isVisible ? "flex" : "hidden lg:flex"
      }`}
    >
      {/* Google fonts (kept consistent with Home) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        .dot-grid-side {
          background-image: radial-gradient(rgba(14,14,16,0.07) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .cursor-blink { animation: blink 1.1s step-end infinite; }

        @keyframes pulseDotSide {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(0.7); }
        }
        .pulse-dot-side { animation: pulseDotSide 1.8s ease-in-out infinite; }
      `}</style>

      {/* ambient dot grid */}
      <div className="absolute inset-0 dot-grid-side opacity-70 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-50/60 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full px-3 py-5 sm:px-4">
        {/* Profile block */}
        <motion.div
          whileHover={{ y: -2 }}
          onClick={() => navigate("/")}
          className="cursor-pointer flex items-center gap-3 rounded-2xl border border-[#0E0E10]/10 bg-white/60 backdrop-blur-md px-3 py-3 mb-6 shadow-sm transition-colors duration-300 hover:border-purple-500/30"
        >
          <div className="relative shrink-0">
            <img
              src={mypic}
              alt="Sridhar Elumalai"
              className="w-11 h-11 xs:w-12 xs:h-12 rounded-full object-cover ring-1 ring-white/70 shadow"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 ring-2 ring-white pulse-dot-side" />
          </div>
          <div className="flex flex-col leading-tight min-w-0">
            <h1 className="font-display italic text-sm sm:text-base text-[#0E0E10] truncate">
              Sridhar Elumalai
            </h1>
            <p className="font-mono text-[9px] sm:text-[10px] text-[#6B6B72] tracking-wide truncate">
              full-stack.dev<span className="cursor-blink">_</span>
            </p>
          </div>
        </motion.div>

        {/* Nav label */}
        <div className="font-mono text-[10px] tracking-[0.2em] text-[#6B6B72] uppercase px-2 mb-2">
          Navigate
        </div>

        {/* Accordion Links */}
        <div className="flex flex-col gap-1.5 flex-1">
          {accordionData.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <motion.div
                key={item.title}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => handleNavigation(item.path)}
                whileTap={{ scale: 0.98 }}
                className="relative cursor-pointer rounded-xl px-3 py-2.5 group"
              >
                {(isActive || hoveredIndex === index) && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className={`absolute inset-0 rounded-xl ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-purple-600"
                        : "bg-gradient-to-r from-blue-50 to-purple-50"
                    }`}
                  />
                )}
                <div className="relative flex items-center justify-between">
                  <span
                    className={`font-body text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-[#3d3d42] group-hover:text-[#0E0E10]"
                    }`}
                  >
                    {item.title}
                  </span>
                  <span
                    className={`font-mono text-[10px] tracking-wide transition-colors duration-200 ${
                      isActive ? "text-white/70" : "text-[#6B6B72]/70"
                    }`}
                  >
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Social row */}
        <div className="pt-4 mt-4 border-t border-[#0E0E10]/10">
          <div className="font-mono text-[10px] tracking-[0.2em] text-[#6B6B72] uppercase px-2 mb-3">
            Elsewhere
          </div>
          <div className="flex items-center gap-2 px-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-[#0E0E10]/10 bg-white/60 backdrop-blur-sm text-[#3d3d42] transition-all duration-300 hover:border-purple-500/40 hover:text-purple-600 hover:-translate-y-0.5"
              >
                <span className="text-sm">{s.icon}</span>
              </a>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 px-2 font-mono text-[10px] text-[#6B6B72]">
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 pulse-dot-side" />
            Open to work
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Accordion;