import React from "react";
import { CgWorkAlt } from "react-icons/cg";

const CareerPath = () => {
  const positions = [
    {
      title: "Software Engineer",
      years: "3+ years",
      company: "Kanini Software Solutions | Aug 2022 - Present",
      description: "Developing full-stack applications using .NET Core and React. Collaborating in Agile teams to deliver scalable, high-performance solutions.",
    },
    // {
    //   title: "Trainee Associate",
    //   years: "1 year",
    //   company: "Kanini Software Solutions | Aug 2022 - Aug 2023",
    //   description: "Worked on Omnia Audit, developing scalable applications with .NET Core, React, and Redux. Focused on performance optimization and API integrations.",
    // },
    {
      title: "Intern",
      years: "0-4 Months",
      company: "Kanini Software Solutions | Jul 2022 - Aug 2022",
      description: "Gained hands-on experience with .NET Core and React. Learned version control, team collaboration, and best practices in software development.",
    },
  ];
  

  return (
    <div className="max-w-8xl bg-gradient-to-b from-gray-50 to-gray-100 mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="text-blue-500">Professional</span> Journey
      </h2>

      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-5 h-full w-1 bg-gray-300"></div>

        {/* Career Positions */}
        <div className="space-y-8">
          {positions.map((position, index) => (
            <div key={index} className="flex items-start">
              {/* Circle Marker */}
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <CgWorkAlt className="text-white text-xl" />
                </div>
              </div>

              {/* Content Box */}
              <div className="ml-6 flex-1">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {position.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{position.company}</p>
                  <p className="text-gray-700 mt-2">{position.description}</p>

                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      Experience: {position.years}
                    </p>
                  </div>

                  {/* Skills Section */}
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700">
                      Key Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {getSkills(position.title).map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getSkills = (position) => {
  switch (position) {
    case "Intern":
      return ["C#", "Js", "Git",  "Team Collaboration"];
    // case "Junior Associate":
    //   return [
    //     ".Net Core",
    //     "Microservices & Micro Frontends",
    //     "Azure",
    //     "Unit Testing",
    //     "Code Review",
    //   ];
    case "Software Engineer":
      return [
        ".Net Core",
        "React js",
        "Redux",
        "Microservices & Micro Frontends",
        "Agile Methodologies",
        "Azure",
      ];
    default:
      return [];
  }
};

export default CareerPath;