import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaGithub } from "react-icons/fa";
import { TbBrandCSharp, TbBrandXamarin } from "react-icons/tb";
import { SiDotnet, SiPostman, SiMacos } from "react-icons/si";
import { BiLogoTypescript, BiLogoVisualStudio } from "react-icons/bi";
import { VscAzureDevops, VscAzure } from "react-icons/vsc";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import GitHubCalendar from "react-github-calendar";

function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-4 py-6">
      {/* Section: Who I Am */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
          Know Who{" "}
          <strong className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            I'M
          </strong>
        </h1>
        <p className="text-gray-600 mt-2 font-medium">
          🎓 B.E. Electronics & Communication • 💡 Tech Innovator • 🛠 Full Stack Developer • ✈️ Traveler
        </p>
      </div>

      {/* Section: Development Philosophy */}
      <div className="bg-white rounded-xl shadow-md p-6 mt-6">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
          Development{" "}
          <strong className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Philosophy
          </strong>
        </h1>
        <ul className="mt-2 text-gray-600 font-medium">
          <li>🔸 Passionate about building scalable, user-centric solutions.</li>
          <li>🔸 Advocates for clean architecture & performance-driven development.</li>
          <li>🔸 Believes in efficiency, reusability, and innovation in tech.</li>
        </ul>
      </div>

      {/* Section: Skillset */}
      <div className="text-center mt-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
          Professional{" "}
          <strong className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skillset
          </strong>
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
        {[  
          { icon: <IoLogoJavascript className="text-6xl text-amber-300" /> },
          { icon: <FaReact className="text-6xl text-blue-500" /> },
          { icon: <TbBrandCSharp className="text-6xl text-violet-500" /> },
          { icon: <SiDotnet className="text-6xl text-violet-800" /> },
          { icon: <TbBrandXamarin className="text-6xl text-violet-900" /> },
          { icon: <BiLogoTypescript className="text-6xl text-sky-800" /> },
          { icon: <TbSql className="text-6xl text-black" /> },
          { icon: <VscAzure className="text-6xl text-violet-900" /> },
          { icon: <FaGithub className="text-6xl text-black" /> },
          { icon: <VscAzureDevops className="text-6xl text-sky-800" /> }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 shadow-md flex justify-center">
            {item.icon}
          </div>
        ))}
      </div>

      {/* Section: Tools */}
      <div className="text-center mt-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
          <strong className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tools
          </strong>{" "}
          I Use
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
        {[
          { icon: <DiVisualstudio className="text-6xl text-blue-500" /> },
          { icon: <BiLogoVisualStudio className="text-6xl text-violet-800" /> },
          { icon: <DiMsqlServer className="text-6xl text-red-600" /> },
          { icon: <SiPostman className="text-6xl text-orange-500" /> },
          { icon: <SiMacos className="text-6xl text-gray-400" /> }
        ].map((item, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 shadow-md flex justify-center">
            {item.icon}
          </div>
        ))}
      </div>

      {/* Section: Github Activity */}
      <div className="text-center mt-8">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
          Days I{" "}
          <strong className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Code
          </strong>
        </h1>
      </div>
      <div className="flex justify-center mt-4">
        <GitHubCalendar
          username="Sridhare29"
          blockSize={12}
          blockMargin={4}
          colorScheme="light"
          color="#f6dd3c"
          className="bg-violet-600 rounded-xl p-4 shadow-md"
          fontSize={14}
        />
      </div>
    </div>
  );
}

export default About;
