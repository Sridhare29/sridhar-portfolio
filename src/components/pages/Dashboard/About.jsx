import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaGithub } from "react-icons/fa";
import { TbBrandCSharp, TbBrandXamarin, TbSql } from "react-icons/tb";
import { SiDotnet, SiPostman, SiMacos } from "react-icons/si";
import { BiLogoTypescript, BiLogoVisualStudio } from "react-icons/bi";
import { VscAzureDevops, VscAzure } from "react-icons/vsc";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import GitHubCalendar from "react-github-calendar";

const skillset = [
  { name: "JavaScript", icon: <IoLogoJavascript />, color: "text-amber-400" },
  { name: "React", icon: <FaReact />, color: "text-sky-500" },
  { name: "C#", icon: <TbBrandCSharp />, color: "text-violet-500" },
  { name: ".NET Core", icon: <SiDotnet />, color: "text-violet-700" },
  { name: "Xamarin", icon: <TbBrandXamarin />, color: "text-violet-800" },
  { name: "TypeScript", icon: <BiLogoTypescript />, color: "text-sky-700" },
  { name: "SQL", icon: <TbSql />, color: "text-[#0E0E10]" },
  { name: "Azure", icon: <VscAzure />, color: "text-sky-800" },
  { name: "GitHub", icon: <FaGithub />, color: "text-[#0E0E10]" },
  { name: "Azure DevOps", icon: <VscAzureDevops />, color: "text-sky-800" },
];

const tools = [
  { name: "Visual Studio", icon: <DiVisualstudio />, color: "text-sky-600" },
  { name: "VS Code", icon: <BiLogoVisualStudio />, color: "text-violet-700" },
  { name: "SQL Server", icon: <DiMsqlServer />, color: "text-red-600" },
  { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
  { name: "macOS", icon: <SiMacos />, color: "text-gray-500" },
];

const philosophy = [
  {
    tag: "SCALE",
    text: "Building scalable, user-centric solutions that hold up under real traffic.",
  },
  {
    tag: "CLEAN",
    text: "Advocating for clean architecture and performance-driven development.",
  },
  {
    tag: "REUSE",
    text: "Believing in efficiency, reusability, and quiet innovation over noise.",
  },
];

const IconGrid = ({ items }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
    {items.map((item, index) => (
      <motion.div
        key={item.name}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.04 }}
        whileHover={{ y: -4 }}
        className="group relative flex flex-col items-center justify-center gap-2 rounded-2xl border border-[#0E0E10]/10 bg-white/60 backdrop-blur-md py-6 shadow-sm transition-colors duration-300 hover:border-purple-500/30"
      >
        <span className={`text-4xl sm:text-5xl ${item.color} transition-transform duration-300 group-hover:scale-110`}>
          {item.icon}
        </span>
        <span className="font-mono text-[10px] tracking-wide text-[#6B6B72] uppercase">
          {item.name}
        </span>
      </motion.div>
    ))}
  </div>
);

function About() {
  const [mounted] = useState(true);

  return (
    <div className="relative min-h-screen w-full bg-white text-[#0E0E10] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .dot-grid { background-image: radial-gradient(rgba(14,14,16,0.09) 1px, transparent 1px); background-size: 26px 26px; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) both; }
        @keyframes pulseDot { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.35; transform: scale(0.7); } }
        .pulse-dot { animation: pulseDot 1.8s ease-in-out infinite; }
      `}</style>

      {/* ambient background */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#0E0E10]/10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-16 space-y-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-[#6B6B72] uppercase">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 pulse-dot" />
          Profile
        </div>

        {/* Who I am */}
        <section className={mounted ? "fade-up" : "opacity-0"}>
          <h1 className="font-display italic text-4xl sm:text-5xl leading-tight mb-4">
            Know who{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              I'm
            </span>
          </h1>
          <div className="flex flex-wrap gap-2.5">
            {["B.E. Electronics & Communication", "Tech Innovator", "Full Stack Developer", "Traveler"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-3.5 py-1.5 rounded-full border border-[#0E0E10]/10 bg-white/70 backdrop-blur-sm text-[#3d3d42]"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* Development philosophy */}
        <section className={mounted ? "fade-up" : "opacity-0"} style={{ animationDelay: "0.05s" }}>
          <h2 className="font-display italic text-3xl sm:text-4xl mb-6">
            Development{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Philosophy
            </span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {philosophy.map((p) => (
              <div
                key={p.tag}
                className="rounded-2xl border border-[#0E0E10]/10 bg-white/60 backdrop-blur-md p-5 transition-colors duration-300 hover:border-purple-500/30"
              >
                <div className="font-mono text-[10px] tracking-[0.2em] text-purple-600 mb-2">
                  {p.tag}
                </div>
                <p className="font-body text-sm text-[#3d3d42] leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skillset */}
        <section>
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-display italic text-3xl sm:text-4xl">
              Professional{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skillset
              </span>
            </h2>
            <span className="font-mono text-[11px] text-[#6B6B72]">{skillset.length} technologies</span>
          </div>
          <IconGrid items={skillset} />
        </section>

        {/* Tools */}
        <section>
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="font-display italic text-3xl sm:text-4xl">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tools
              </span>{" "}
              I Use
            </h2>
            <span className="font-mono text-[11px] text-[#6B6B72]">{tools.length} in daily use</span>
          </div>
          <IconGrid items={tools} />
        </section>

        {/* GitHub activity */}
        <section>
          <h2 className="font-display italic text-3xl sm:text-4xl mb-6">
            Days I{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Code
            </span>
          </h2>
          <div className="rounded-2xl border border-[#0E0E10]/10 bg-white/60 backdrop-blur-md p-6 shadow-sm overflow-x-auto">
            <GitHubCalendar
              username="Sridhare29"
              blockSize={12}
              blockMargin={4}
              colorScheme="light"
              color="#7c3aed"
              fontSize={14}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About; 