import React from 'react'
import ProjectCard from '../../Layout/ProjectCard'

function Projects() {
  const projects = [
    {
      title: "Miniti-Scrap",
      techStack: ["React js", "Redux", "API", "Tailwind CSS"],
      description: "Recycle. Earn. Impact. Transform waste, earn rewards, and save the planet! 🌍",
      projectLink: "https://github.com/Sridhare29/miniti/"
    },
    {
      title: "Miniti-BE",
      techStack: [".NetCore", "API", "Dapper", "MS SQL"],
      description: "Backend for Miniti: Powering waste recycling with .NET Core and seamless APIs. 💻",
      projectLink: "https://github.com/Sridhare29/Minati-Ecommerce"
    },
    {
      title: "My-Portfolio",
      techStack: ["Vue", "React", "Tailwind CSS"],
      description: "A sleek, responsive portfolio showcasing my skills and projects. 🚀",
      projectLink: "https://github.com/Sridhare29/sridhar-portfolio"
    },
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
