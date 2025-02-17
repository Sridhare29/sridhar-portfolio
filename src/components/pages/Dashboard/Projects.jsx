import React from 'react'
import ProjectCard from '../../Layout/ProjectCard'

function Projects() {
  const projects = [
    {
      title: "Miniti-Scrap",
      techStack: ["React.js", "Redux", "API", "Tailwind CSS"],
      description: "An eco-friendly platform that lets you recycle waste, earn rewards, and contribute to a greener planet. 🌍",
      projectLink: "https://github.com/Sridhare29/miniti/"
    },
    {
      title: "Miniti-BE",
      techStack: [".NET Core", "API", "Dapper", "MS SQL"],
      description: "The backend infrastructure for Miniti, built with .NET Core to enable seamless waste recycling and rewards management. 💻",
      projectLink: "https://github.com/Sridhare29/Minati-Ecommerce"
    },
    {
      title: "Food Order App",
      techStack: ["Flutter", "Dart", "GetIt"],
      description: "A sleek and intuitive food ordering app designed for fast and easy meal selection. 🚀",
      projectLink: "https://github.com/Sridhare29/FoodOrder-App/tree/dev_stage"
    },
    {
      title: "Miniti TO-DO",
      techStack: ["React.js", "JavaScript", "Bootstrap"],
      description: "A simple yet powerful to-do app built with React to help you stay organized. ✅",
      projectLink: "https://github.com/Sridhare29/to-do-app"
    }
  ];
  

  return (
    <div className="container h-full  mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects
