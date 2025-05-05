import { Project } from "../types/project";
import headphones from "../assets/headphones.png"

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
  // Add more projects...
];