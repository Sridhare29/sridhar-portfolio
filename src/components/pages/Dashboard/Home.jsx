import React, { useState, useEffect, useRef } from "react";
import mypic from "../../../assets/Sridhar_NewProfile.png";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef(null);
  const navigate = useNavigate();


  useEffect(() => {
    setMounted(true);
    const handleMove = (e) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const tilt = (strength) => ({
    transform: `translate3d(${(mouse.x - 0.5) * strength}px, ${
      (mouse.y - 0.5) * strength
    }px, 0)`,
  });

  const techStack = [".NET Core", "C#", "React", "TypeScript", "React Native", "SQL Server", "playwright", "Azure DevOps"];

  const stats = [
    { number: "15+", label: "Technologies & Tools Used" },
    { number: "20+", label: "APIs & apps launched" },
    { number: "10+", label: "Tools in daily use" },
    { number: "26", label: "Teams collaborated with" },
  ];

  return (
    <div className="min-h-screen w-full bg-white text-[#0E0E10] relative overflow-hidden">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

        .font-display { font-family: 'Fraunces', serif; font-feature-settings: 'liga' 1; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }

        .dot-grid {
          background-image: radial-gradient(rgba(14,14,16,0.09) 1px, transparent 1px);
          background-size: 26px 26px;
        }

        @keyframes drift {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .animate-drift { animation: drift 7s ease-in-out infinite; }

        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(0.7); }
        }
        .pulse-dot { animation: pulseDot 1.8s ease-in-out infinite; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both; }
      `}</style>

      {/* Ambient background: soft cobalt wash following the cursor + dot grid */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-grid opacity-60" />
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mouse.x * 100}% ${
              mouse.y * 100
            }%, rgba(99,102,241,0.08), transparent 65%)`,
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-[#0E0E10]/10" />
      </div>

      <div
        ref={heroRef}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pt-16 pb-10"
      >
        {/* Top label row */}
        <div
          className={`flex items-center justify-between font-mono text-[11px] tracking-[0.2em] text-[#6B6B72] uppercase mb-20 ${
            mounted ? "fade-up" : "opacity-0"
          }`}
        >
          <span>Code. Create. Grow.</span>
          <span className="hidden sm:inline">Chennai, India</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left — the thesis */}
          <div className="lg:col-span-7">
            {/* Availability chip */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0E0E10]/10 bg-white/60 backdrop-blur-md shadow-sm mb-8 ${
                mounted ? "fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.05s" }}
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 pulse-dot" />
              <span className="font-mono text-[11px] tracking-wide text-[#0E0E10]/80">
                Open to Turning Ideas into Code
              </span>
            </div>

          {/* Headline */}
            <h1
              className={`font-display italic text-[2.6rem] sm:text-6xl lg:text-[4.2rem] leading-[1.05] tracking-tight text-[#0E0E10] mb-6 ${
                mounted ? "fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.12s" }}
            >
              I build {" "}
              <span className="relative inline-block px-1">
                <span className="relative z-10">.NET Core</span>
                <span className="absolute left-0 right-0 bottom-1 h-[0.35em] bg-gradient-to-r from-blue-600/10 to-purple-600/10 -z-0 rounded-sm" />
              </span>{" "}
              APIs
              <br />
              and turn them into{" "}
              <span className="relative inline-block px-1">
                <span className="relative z-10">React</span>
                <span className="absolute left-0 right-0 bottom-1 h-[0.35em] bg-gradient-to-r from-blue-600/10 to-purple-600/10 -z-0 rounded-sm" />
              </span>{" "}
              interfaces people enjoy using.
            </h1>

            {/* Byline */}
            <p
              className={`font-body text-lg text-[#3d3d42] max-w-xl leading-relaxed mb-4 ${
                mounted ? "fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <span className="font-semibold text-[#0E0E10]">
                Sridhar Elumalai
              </span>{" "}
              — full-stack developer building scalable APIs in .NET Core and
              fast, type-safe front ends in React & TypeScript.
            </p>

            {/* Tech pills */}
            <div
              className={`flex flex-wrap gap-2.5 mb-10 ${
                mounted ? "fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.28s" }}
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs px-3.5 py-1.5 rounded-full border border-[#0E0E10]/10 bg-white/70 backdrop-blur-sm text-[#3d3d42] hover:border-purple-500/40 hover:text-purple-600 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 ${
                mounted ? "fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.34s" }}
            >
              <button
                onClick={() => navigate("/work")}
                className="group px-7 py-3.5 rounded-full bg-[#0E0E10] text-white font-body font-medium text-sm tracking-wide transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5"
              >
                View the work →
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="px-7 py-3.5 rounded-full border border-[#0E0E10]/15 bg-white/50 backdrop-blur-sm text-[#0E0E10] font-body font-medium text-sm tracking-wide transition-all duration-300 hover:border-[#0E0E10]/40 hover:-translate-y-0.5"
              >
                Get in touch
              </button>
            </div>
          </div>

          {/* Right — the "elevated glass stack" signature */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Back panels, drifting further with the cursor to read as depth */}
              <div
                className="absolute inset-0 rounded-[2rem] border border-[#0E0E10]/10 bg-white/40 backdrop-blur-md rotate-[10deg] transition-transform duration-300 ease-out animate-drift"
                style={tilt(10)}
              />
              <div
                className="absolute inset-0 rounded-[2rem] border border-[#0E0E10]/10 bg-white/50 backdrop-blur-md -rotate-[7deg] transition-transform duration-300 ease-out"
                style={tilt(-16)}
              />
              <div
                className="absolute inset-0 rounded-[2rem] border border-[#0E0E10]/10 bg-white/70 backdrop-blur-lg rotate-[3deg] shadow-xl shadow-[#0E0E10]/5 transition-transform duration-300 ease-out"
                style={tilt(22)}
              />

              {/* Soft gradient glow behind the photo */}
              <div
                className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-2xl -z-10"
                style={tilt(6)}
              />

              {/* Front panel: photo, framed in glass */}
              <div
                className="absolute inset-0 rounded-[2rem] border border-white/60 bg-white/40 backdrop-blur-xl shadow-2xl shadow-[#0E0E10]/10 overflow-hidden transition-transform duration-200 ease-out"
                style={tilt(-8)}
              >
                <img
                  src={mypic}
                  alt="Sridhar Elumalai"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/50" />
              </div>

              {/* Floating stat chip — top right */}
              <div
                className="absolute -top-6 -right-6 px-4 py-2.5 rounded-2xl border border-[#0E0E10]/10 bg-white/85 backdrop-blur-lg shadow-lg shadow-[#0E0E10]/5 animate-drift"
                style={{ animationDelay: "1s" }}
              >
                <div className="font-mono text-lg font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-none">
                  15+
                </div>
                <div className="font-mono text-[10px] text-[#6B6B72] mt-1 tracking-wide">
                  Technologies & Tools Used
                </div>
              </div>

              {/* Floating stat chip — bottom left */}
              <div
                className="absolute -bottom-6 -left-8 px-4 py-2.5 rounded-2xl border border-[#0E0E10]/10 bg-white/85 backdrop-blur-lg shadow-lg shadow-[#0E0E10]/5 animate-drift"
                style={{ animationDelay: "2.4s" }}
              >
                <div className="font-mono text-lg font-medium text-[#0E0E10] leading-none">
                  4+ yrs
                </div>
                <div className="font-mono text-[10px] text-[#6B6B72] mt-1 tracking-wide">
                  full-stack practice
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className={`mt-24 grid grid-cols-2 md:grid-cols-4 rounded-2xl border border-[#0E0E10]/10 bg-white/50 backdrop-blur-md overflow-hidden ${
            mounted ? "fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-8 px-4 ${
                i !== 0 ? "border-l border-[#0E0E10]/10" : ""
              }`}
            >
              <div className="font-display italic text-3xl text-[#0E0E10] mb-1">
                {stat.number}
              </div>
              <div className="font-mono text-[11px] tracking-wide text-[#6B6B72] uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0E0E10]/10 bg-white/50 backdrop-blur-sm font-mono text-[10px] tracking-[0.2em] text-[#6B6B72] uppercase">
            Scroll
            <span className="w-8 h-px bg-[#0E0E10]/30 relative overflow-hidden">
              <span className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;