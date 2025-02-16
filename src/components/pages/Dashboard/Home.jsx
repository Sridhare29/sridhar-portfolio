import React from "react";
import mypic from "../../../assets/Sridhar_img.jpg";
import DescriptionCard from "../../Layout/DescriptionCard";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const skills = [
    { name: "Frontend", level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "Backend", level: 85, color: "from-purple-500 to-pink-500" },
    { name: "Mobile Development", level: 75, color: "from-green-500 to-emerald-500" },
    { name: "UI Design", level: 80, color: "from-orange-500 to-yellow-500" }
];

  const achievements = [
    "worked on a scalable microservices and micro frontend architecture",
    "Handled both frontend and backend for a full-stack project, making sure everything ran smoothly from UI to database",
    "Make the development and fix in UAT and Production environment",
    "Developed a scalable and maintainable codebase",
  ];
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-blue-50 rounded-3xl transform -skew-y-2" />
          <div className="relative backdrop-blur-xl bg-white/90 rounded-3xl p-8 shadow-xl">
            <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:space-x-12">
              {/* Profile Image */}
              <div className="relative w-64 h-64 mb-8 lg:mb-0 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse opacity-25" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-25 animate-pulse delay-100" />
                <img
                  src={mypic}
                  className="relative w-full h-full rounded-2xl object-cover shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out border-4 border-white"
                  alt="Sridhar"
                />
              </div>

              {/* Introduction */}
              <div className="flex-1 text-center lg:text-left">
                <div className="space-y-4 mb-8">
                  <div className="inline-block">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                      Hey There!
                      <span className="inline-block ml-2 animate-bounce">👋🏻</span>
                    </h1>
                    <h2 className="text-5xl font-extrabold">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Sridhar Elumalai
                      </span>
                    </h2>
                  </div>
                  <p className="text-lg font-mono text-gray-600 max-w-2xl">
                  Full Stack Developer Associate with 3 years of experience in web and app development, exploring and implementing diverse technologies for scalable solutions.</p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <button
                    onClick={() => navigate("/about")}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
                  >
                    About Me
                  </button>
                  <button
                    onClick={() => navigate("/contact")}
                    className="px-8 py-3 rounded-full bg-white text-blue-600 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105 border-2 border-blue-600"
                  >
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Skills Section */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Expertise</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-500`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Key Achievements</h3>
            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <div className="mr-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-gray-700">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;