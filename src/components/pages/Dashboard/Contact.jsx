import { FaGithub, FaLinkedin, FaCoffee } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";

const Contact = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/Sridhare29",
      color: "text-[#0E0E10]",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sridhar-e-b57738202/",
      color: "text-sky-700",
    },
    {
      icon: <BsTwitterX />,
      label: "X",
      url: "https://x.com/Sridhar2920",
      color: "text-[#0E0E10]",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-white text-[#0E0E10] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        .dot-grid { background-image: radial-gradient(rgba(14,14,16,0.09) 1px, transparent 1px); background-size: 26px 26px; }
        @keyframes pulseDot { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.35; transform: scale(0.7); } }
        .pulse-dot { animation: pulseDot 1.8s ease-in-out infinite; }
      `}</style>

      {/* ambient background */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#0E0E10]/10 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-[#6B6B72] uppercase mb-8">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 pulse-dot" />
          Contact
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display italic text-4xl sm:text-5xl leading-tight mb-4 text-center">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              connect
            </span>
          </h1>

          <p className="font-body text-base sm:text-lg text-[#6B6B72] text-center max-w-xl mx-auto mb-12 leading-relaxed">
            Whether you have a question or just want to talk shop, I'm always
            open to a good conversation.
          </p>

          {/* Email Section */}
          <motion.a
            href="mailto:srielumalai29@gmail.com"
            whileHover={{ y: -2 }}
            className="group flex items-center justify-center gap-3 rounded-2xl border border-[#0E0E10]/10 bg-white/60 backdrop-blur-md py-6 mb-6 shadow-sm transition-colors duration-300 hover:border-purple-500/30"
          >
            <HiMail className="text-2xl text-purple-600" />
            <span className="font-mono text-base sm:text-lg text-[#3d3d42] group-hover:text-purple-600 transition-colors">
              srielumalai29@gmail.com
            </span>
          </motion.a>

          {/* Social Links */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="group flex flex-col items-center justify-center gap-2 rounded-2xl border border-[#0E0E10]/10 bg-white/60 backdrop-blur-md py-6 shadow-sm transition-colors duration-300 hover:border-purple-500/30"
              >
                <span className={`text-3xl ${link.color} transition-transform duration-300 group-hover:scale-110`}>
                  {link.icon}
                </span>
                <span className="font-mono text-[10px] tracking-wide text-[#6B6B72] uppercase">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="rounded-2xl border border-[#0E0E10]/10 bg-white/60 backdrop-blur-md p-6 sm:p-8"
          >
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-purple-600 uppercase mb-4">
              <FaCoffee className="text-sm" />
              Fun fact
            </div>
            <p className="font-display italic text-lg sm:text-xl text-[#3d3d42] leading-relaxed">
              Fueled by coffee and curiosity, I turn ideas into web apps, one
              line of code at a time.
            </p>
          </motion.div>

          {/* Back to Home */}
          <motion.div className="mt-10 text-center">
            <a
              href="/sridhar-portfolio"
              className="group inline-flex items-center gap-2 font-mono text-xs tracking-wide text-[#6B6B72] uppercase hover:text-purple-600 transition-colors duration-300"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
              Back to home
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;