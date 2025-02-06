import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandCSharp, TbBrandXamarin } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { VscAzureDevops, VscAzure } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { SiPostman, SiMacos } from "react-icons/si";
import GitHubCalendar from "react-github-calendar";

function About() {
  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="flex flex-col w-full p-4">
        <div className="border-b-2 border-gray-200 bg-white rounded-xl shadow-md p-8">
        <div className=" flex justify-start ">
          <h1 className="flex mb-2 font-semibold text-gray-800 text-4xl">
            Know Who{" "}
            <strong className="px-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              I'M
            </strong>
          </h1>
        </div>
        {/* <h2 className="text-gray-800 font-semibold leading-relaxed">📌 Background</h2> */}
        <p className=" text-gray-600 my-2 font-medium leading-relaxed">
          🎓 B.E. Electronics and communication engineering • 💡 Tech Innovator
          • 🛠 Full Stack Developer • ✈️ Traveller
        </p>

        <div className=" flex flex-col">
          <h1 className=" my-2 font-semibold text-gray-800 text-4xl">
            Development{" "}
            <strong className="px-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Philosophy
            </strong>{" "}
          </h1>
          <ul>
            <li className="text-gray-600 my-2 font-medium leading-relaxed">
              🔸Passionate about building scalable, user-centric solutions.
            </li>
            <li className="text-gray-600 my-2 font-medium leading-relaxed">
              🔸Advocates for clean architecture & performance-driven
              development.
            </li>
            <li className="text-gray-600 my-2 font-medium leading-relaxed">
              🔸 Believes in efficiency, reusability, and innovation in tech.
            </li>
          </ul>
        </div>
          </div>
        {/* <h2 className="text-gray-800 font-semibold leading-relaxed">📌 Skills</h2> */}
        <div className=" flex justify-center items-center">
          <h1 className=" my-6 font-semibold text-gray-800 text-4xl">
            Professional
            <strong className="px-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skillset
            </strong>
          </h1>
        </div>
        <div className="flex justify-between items-stretch gap-4 w-full">
          <div className="grid grid-cols-5 gap-4 w-full">
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
              <BiLogoTypescript className="text-6xl text-sky-800" />
            </div>
            <div className="bg-white rounded-3xl p-2 shadow-md flex items-center justify-center">
              <TbSql className="text-6xl text-black" />
            </div>

            <div className="bg-white rounded-3xl p-2 shadow-md flex items-center justify-center">
              <VscAzure className="text-6xl text-violet-900" />
            </div>
            <div className="bg-white rounded-3xl p-2 shadow-md flex items-center justify-center">
              <FaGithub className="text-6xl text-black" />
            </div>
            <div className="bg-white rounded-3xl p-2 shadow-md flex items-center justify-center">
              <VscAzureDevops className="text-6xl text-sky-800" />
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className=" flex justify-center items-center">
          <h1 className=" my-6 font-semibold text-gray-800 text-4xl">
            <strong className="px-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tool
            </strong>
            I Use
          </h1>
        </div>
        <div className="flex justify-between items-stretch gap-4 w-full">
          <div className="grid grid-cols-5 gap-4 w-full">
            <div className="bg-white rounded-3xl p-2 shadow-md flex items-center justify-center">
              <DiVisualstudio className="text-6xl text-blue-500" />
            </div>
            <div className="bg-white rounded-3xl p-2 shadow-md flex items-center justify-center">
              <BiLogoVisualStudio className="text-6xl text-violet-800" />
            </div>
            <div className="bg-white rounded-3xl p-2 shadow-md flex items-center justify-center">
              <DiMsqlServer className="text-6xl text-red-600" />
            </div>
            <div className="bg-white rounded-3xl p-2 shadow-md flex items-center justify-center">
              <SiPostman className="text-6xl text-orange-500" />
            </div>
            <div className="bg-white rounded-3xl p-2 shadow-md flex items-center justify-center">
              <SiMacos className="text-6xl text-gray-400" />
            </div>
          </div>
        </div>

        {/* Github commit */}
        <div className=" flex justify-center items-center">
          <h1 className=" my-6 font-semibold text-gray-800 text-4xl">
            Days I
            <strong className="px-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Code
            </strong>
          </h1>
        </div>
        <div classname="flex">
          <GitHubCalendar
            username="Sridhare29"
            blockSize={15}
            blockMargin={5}
            colorScheme="light"
            color="#f6dd3c"
            className="bg-violet-600 rounded-3xl p-4 shadow-md"
            fontSize={16}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
