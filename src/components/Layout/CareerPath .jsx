import React from "react";
import { motion } from "framer-motion";
import { CgWorkAlt } from "react-icons/cg";

const positions = [
  {
    title: "Software Engineer",
    years: "4+ years",
    company: "Kanini Software Solutions",
    period: "Aug 2022 — Present",
    description:
      "Developing full-stack applications using .NET Core and React. Collaborating in Agile teams to deliver scalable, high-performance solutions.",
    current: true,
  },
  {
    title: "Intern",
    years: "0–4 months",
    company: "Kanini Software Solutions",
    period: "Jul 2022 — Aug 2022",
    description:
      "Gained hands-on experience with .NET Core and React. Learned version control, team collaboration, and best practices in software development.",
    current: false,
  },
];

const getSkills = (title) => {
  switch (title) {
    case "Intern":
      return ["C#", "JavaScript", "Git", "Team Collaboration"];
    case "Software Engineer":
      return [
        ".NET Core",
        "React",
        "Redux",
        "Microservices & Micro Frontends",
        "Agile",
        "Azure",
      ];
    default:
      return [];
  }
};

const CareerPath = () => {
  return (
    <div className="relative w-full bg-white text-[#0E0E10] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .dot-grid { background-image: radial-gradient(rgba(14,14,16,0.09) 1px, transparent 1px); background-size: 26px 26px; }
        @keyframes pulseDot { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.35; transform: scale(0.7); } }
        .pulse-dot { animation: pulseDot 1.8s ease-in-out infinite; }
      `}</style>

      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 py-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-[#6B6B72] uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 pulse-dot" />
          Timeline
        </div>

        <h2 className="font-display italic text-4xl sm:text-5xl mb-14">
          Professional{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Journey
          </span>
        </h2>

        <div className="relative">
          {/* Gradient progress line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-blue-600 via-purple-600 to-transparent" />

          <div className="space-y-10">
            {positions.map((position, index) => (
              <motion.div
                key={position.title + position.period}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative flex items-start gap-6"
              >
                {/* Marker */}
                <div className="relative z-10 shrink-0">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md ${
                      position.current
                        ? "bg-gradient-to-r from-blue-600 to-purple-600"
                        : "bg-white border border-[#0E0E10]/15"
                    }`}
                  >
                    <CgWorkAlt
                      className={`text-lg ${position.current ? "text-white" : "text-[#3d3d42]"}`}
                    />
                  </div>
                  {position.current && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 pulse-dot ring-2 ring-white" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-[#0E0E10]/10 bg-white/60 backdrop-blur-md p-6 shadow-sm transition-colors duration-300 hover:border-purple-500/30">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                    <h3 className="font-display italic text-xl sm:text-2xl">
                      {position.title}
                    </h3>
                    <span className="font-mono text-[11px] tracking-wide text-[#6B6B72] uppercase">
                      {position.period}
                    </span>
                  </div>
                  <p className="font-body text-sm text-[#6B6B72] mb-3">{position.company}</p>
                  <p className="font-body text-sm text-[#3d3d42] leading-relaxed mb-4">
                    {position.description}
                  </p>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-[#6B6B72] uppercase">
                      Experience
                    </span>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#0E0E10]/5 text-[#3d3d42]">
                      {position.years}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {getSkills(position.title).map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[11px] px-3 py-1 rounded-full border border-[#0E0E10]/10 bg-white/70 text-[#3d3d42] hover:border-purple-500/40 hover:text-purple-600 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPath;