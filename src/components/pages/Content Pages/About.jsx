import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandCSharp, TbBrandXamarin } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { VscAzureDevops } from "react-icons/vsc";

function About() {
  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col w-full  p-4">
        <h1 className="flex mb-2 font-semibold text-gray-800 text-4xl">
          Know Who{" "}
          <strong className="px-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            I'M
          </strong>
        </h1>
        {/* <h2 className="text-gray-800 font-semibold leading-relaxed">📌 Background</h2> */}
        <p className="text-gray-600 my-2 font-medium leading-relaxed">
          🎓 B.E. Electronics and communication engineering • 💡 Tech Innovator
          • 🛠 Full Stack Developer
        </p>

        {/* <h2 className="text-gray-800 font-semibold leading-relaxed">📌 Skills</h2> */}

        <div className="flex justify-between items-stretch gap-4 w-full">
        <div className="grid grid-cols-5 gap-4">
            <div className="bg-white rounded-3xl p-2 shadow-md flex items-center justify-center">
              <IoLogoJavascript className="text-6xl text-amber-300" />
            </div>
            <div className="bg-white rounded-3xl p-2 shadow-md flex items-center justify-center">
              <FaReact className="text-6xl text-blue-500" />
            </div>
            <div className="bg-white rounded-3xl p-2 shadow-md flex items-center justify-center">
              <TbBrandCSharp className="text-6xl text-violet-500" />
            </div>
            <div className="bg-white rounded-3xl p-2 shadow-md flex items-center justify-center">
              <SiDotnet className="text-6xl text-violet-800" />
            </div>
            <div className="bg-white rounded-3xl p-2 shadow-md flex items-center justify-center">
              <TbBrandXamarin className="text-6xl text-violet-900" />
            </div>
            <div className="bg-white rounded-3xl p-2 shadow-md flex items-center justify-center">
              <FaFlutter className="text-6xl text-sky-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
