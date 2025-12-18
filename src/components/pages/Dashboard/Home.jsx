import React, { useState, useEffect } from "react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // For demo purposes, using a placeholder image
  const mypic = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const FloatingElement = ({ delay, size, color }) => (
    <div
      className={`absolute ${size} ${color} rounded-full opacity-20 animate-float`}
      style={{
        animationDelay: `${delay}s`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  );

  const CodeBlock = () => (
    <div className="hidden lg:block absolute top-20 right-10 bg-gray-900 rounded-xl p-4 shadow-2xl border border-gray-700 max-w-xs opacity-90">
      <div className="flex items-center space-x-2 mb-3">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="text-sm font-mono text-green-400">
        <div className="text-purple-400">const</div>
        <div className="text-blue-400 ml-2">developer</div>
        <div className="text-white ml-4">= {`{`}</div>
        <div className="text-yellow-300 ml-6">name: 'Sridhar',</div>
        <div className="text-yellow-300 ml-6">role: 'Full Stack',</div>
        <div className="text-yellow-300 ml-6">passion: 'coding'</div>
        <div className="text-white ml-4">{`}`};</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)`,
          }}
        />
        
        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <FloatingElement
            key={i}
            delay={i * 0.5}
            size={i % 2 === 0 ? "w-4 h-4" : "w-6 h-6"}
            color={i % 3 === 0 ? "bg-blue-400" : i % 3 === 1 ? "bg-purple-400" : "bg-pink-400"}
          />
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>

      {/* Code Block */}
      <CodeBlock />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Main Content */}
          <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:space-x-16 mb-20">
            
            {/* Left Side - Text Content */}
            <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
              <div className="space-y-6">
                {/* Greeting */}
                <div className="relative">
                  <h1 className="text-2xl md:text-3xl font-light text-gray-300 mb-2">
                    Hello World! I'm
                  </h1>
                  <div className="relative">
                    <h2 className="text-5xl md:text-7xl font-black mb-4">
                      <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-300% leading-tight">
                        Sridhar
                      </span>
                    </h2>
                    <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Role with Typewriter Effect */}
                <div className="relative h-16">
                  <p className="text-xl md:text-2xl font-mono text-gray-300 animate-typewriter overflow-hidden whitespace-nowrap border-r-2 border-cyan-400">
                    Full Stack JavaScript Developer
                  </p>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
                  Crafting digital experiences with <span className="text-cyan-400 font-semibold">3 years</span> of expertise in 
                  web and mobile development. I transform ideas into scalable, innovative solutions using cutting-edge technologies.
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {['React', 'Node.js', 'JavaScript', 'TypeScript', 'MongoDB'].map((tech, index) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6">
                  <button
                    onClick={() => alert('Navigate to About page')}
                    className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
                  >
                    <span className="relative z-10">Explore My Journey</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </button>
                  
                  <button
                    onClick={() => alert('Navigate to Contact page')}
                    className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
                  >
                    Let's Connect
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Profile Section */}
            <div className="relative flex-shrink-0">
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                {/* Animated Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin-slow"></div>
                <div className="absolute inset-4 rounded-full border-2 border-purple-500/30 animate-spin-reverse"></div>
                <div className="absolute inset-8 rounded-full border border-pink-400/30 animate-pulse"></div>
                
                {/* Profile Image */}
                <div className="absolute inset-12 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={mypic}
                    alt="Sridhar Elumalai"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                </div>

                {/* Floating Icons */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "15+", label: "Technologies" },
              { number: "∞", label: "Lines of Code" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll Down</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 15s linear infinite; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; }
        .animate-typewriter { animation: typewriter 3s steps(40, end) forwards; }
        .bg-300\% { background-size: 300%; }
      `}</style>
    </div>
  );
};

export default Home;