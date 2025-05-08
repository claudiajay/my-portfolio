import { Project } from "../../types/project"

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-fit"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-cyan-100 text-cyan-800 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          {project.gitHubUrl && (
            <a 
              href={project.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-800 transition-colors"
            >
              View Code
            </a>
          )}
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 hover:text-cyan-800 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};