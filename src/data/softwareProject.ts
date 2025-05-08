import { Project } from "../types/project";
import headphones from "../assets/headphones.png";
import portfolio from "../assets/portfolio.png";

export const softwareProjects: Project[] = [
  {
    id: 1,
    title: "Headphones Web",
    description: "Static Website with Html and CSS",
    tags: ["HTML", "CSS"],
    imageUrl: headphones,
    gitHubUrl: "https://github.com/claudiajay/Headphones",
    liveUrl: "https://headhuggers.netlify.app"
  },
  {
    id: 2,
    title: "My Portfolio Website",
    description: "A responsive and modern portfolio website built using React, TypeScript, and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: portfolio,
    gitHubUrl: "https://github.com/claudiajay/my-portfolio",
    liveUrl: "https://ctrlclaudia.netlify.app"
  },
  // Add more projects...
];