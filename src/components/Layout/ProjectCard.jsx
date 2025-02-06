import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const ProjectCard = ({ title, techStack, description, projectLink }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6 border border-transparent hover:border-blue-500 transition duration-300 relative group">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          {title}
        </h2>
        <FaGithub className="text-gray-600 text-2xl" />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-gray-600 mb-6">{description}</p>

      <a
        href={projectLink}
        className=" items-center text-blue-600 hover:text-blue-800 transition duration-300  group-hover:border-blue-600 group-hover:flex hidden"
      >
        View Project
        <FaArrowRight className="ml-2 items-center" />
      </a>
    </div>
  );
};

export default ProjectCard;
