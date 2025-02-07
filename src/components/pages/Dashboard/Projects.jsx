import React from 'react'
import ProjectCard from '../../Layout/ProjectCard'

function Projects() {
  const projects = [
    {
      title: "Toonify",
      techStack: ["LemmeBuild", "API", "Next.js", "Tailwind CSS"],
      description: "A platform to unleash your creativity and watch as AI brings your wildest comic ideas to life!",
      projectLink: "#"
    },
    {
      title: "Toonify",
      techStack: ["LemmeBuild", "API", "Next.js", "Tailwind CSS"],
      description: "A platform to unleash your creativity and watch as AI brings your wildest comic ideas to life!",
      projectLink: "#"
    },
    {
      title: "Toonify",
      techStack: ["LemmeBuild", "API", "Next.js", "Tailwind CSS"],
      description: "A platform to unleash your creativity and watch as AI brings your wildest comic ideas to life!",
      projectLink: "#"
    },
    // Add more projects...
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects
