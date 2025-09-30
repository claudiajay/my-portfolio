import { Project } from "../types/project";
// import headphones from "../assets/headphones.png";
import portfolio from "../assets/portfolio.png";
import procure from "../assets/procure.png";
import nook from "../assets/nook.png";

export const softwareProjects: Project[] = [
  // {
  //   id: 1,
  //   title: "Headphones Web",
  //   description: "Static Website with Html and CSS",
  //   tags: ["HTML", "CSS"],
  //   imageUrl: headphones,
  //   gitHubUrl: "https://github.com/claudiajay/Headphones",
  //   liveUrl: "https://headhuggers.netlify.app"
  // },
  {
    id: 2,
    title: "My Portfolio Website",
    description: "A responsive and modern portfolio website built using React, TypeScript, and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: portfolio,
    gitHubUrl: "https://github.com/claudiajay/my-portfolio",
    liveUrl: "https://ctrlclaudia.netlify.app"
  },
  {
    id: 3,
    title: "Procure: Inventory Management System",
    description: "A full-stack inventory and procurement management system designed to streamline purchase requests, approvals, and order tracking.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    imageUrl: procure,
    gitHubUrl: "https://github.com/claudiajay/",
    liveUrl: ""
  },
  {
    id: 4,
    title: "My Portfolio Website",
    description: "A responsive property booking and hosting website built using React, TypeScript, and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: nook,
    gitHubUrl: "https://github.com/claudiajay/temp-stay",
    liveUrl: "https://nook-ivory.vercel.app/"
  },
];