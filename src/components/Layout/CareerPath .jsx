import React from "react";
import { CgWorkAlt } from "react-icons/cg";

const CareerPath = () => {
  const positions = [
    {
      title: "Junior Associate",
      years: "1-3 years",
      company: "Kanini Software Solutions | Aug 2023 - Present ",
    },
    {
      title: "Trainee Associate",
      years: "3+ years",
      company: "Kanini Software Solutions | Aug 2022 - Aug 2023 ",
    },
    {
      title: "Intern",
      years: "0-1 years",
      company: "Kanini Software Solutions | Jul 2022 - Aug 2022 ",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          {" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional{" "}
          </span>
          Journey
        </h1>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-8.5 top-0 bottom-25 w-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>

          {/* Career Positions */}
          {positions.map((position, index) => (
            <div
              key={position.title}
              className="relative flex items-center mb-12"
            >
              {/* Circle Marker */}
              <div className="absolute left-8.5 transform -translate-x-1/2">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>

              {/* Content Box */}
              <div className="ml-16 bg-white rounded-lg shadow-lg p-6 w-full">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {position.title}
                </h2>
                <h2 className="text-md font-medium text-gray-500 mb-2 flex items-center gap-2">
                  <CgWorkAlt />
                  {position.company}
                </h2>

                <p className="text-gray-600">Experience: {position.years}</p>

                {/* Skills Section */}
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    Key Skills:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {getSkills(position.title).map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
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

// Helper function to get skills based on position
const getSkills = (position) => {
  switch (position) {
    case "Intern":
      return ["Basic Programming", "Version Control", "Team Collaboration"];
    case "Junior Associate":
      return [
        "Frontend Frameworks",
        "API Integration",
        "Unit Testing",
        "Code Review",
      ];
    case "Trainee Associate":
      return [
        "System Design",
        "Mentoring",
        "Architecture",
        "Technical Leadership",
        "Project Planning",
      ];
    default:
      return [];
  }
};

export default CareerPath;
