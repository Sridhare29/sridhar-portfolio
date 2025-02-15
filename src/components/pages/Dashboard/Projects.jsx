import React from 'react'
import ProjectCard from '../../Layout/ProjectCard'

function Projects() {
  const projects = [
    {
      title: "Miniti-Scrap",
      techStack: ["React js", "Redux", "Api", "Tailwind CSS"],
      description: "A platform to Recycle. Earn. Impact. Transform Waste | Earn Instantly | Save Planet!",
      projectLink: "https://github.com/Sridhare29/miniti/"
    },
    {
      title: "Miniti-BE",
      techStack: [".NetCore", "API", "Dapper", "Ms Sql"],
      description: "A platform to Recycle. Earn. Impact. Transform Waste | Earn Instantly | Save Planet!",
      projectLink: "https://github.com/Sridhare29/Minati-Ecommerce"
    },
    // {
    //   title: "Toonify",
    //   techStack: ["LemmeBuild", "API", "Next.js", "Tailwind CSS"],
    //   description: "A platform to unleash your creativity and watch as AI brings your wildest comic ideas to life!",
    //   projectLink: "#"
    // },
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
