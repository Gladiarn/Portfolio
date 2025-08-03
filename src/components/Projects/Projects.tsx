import React from "react";
import { Project } from "../types";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects: Project[] = [
    {
      title: "TourVan - Cloud-Based Van Tour.",
      introduction:
        "A full-stack van tour booking platform with real-time GPS, autocomplete, and seat tracking.",
      technologies: [
        "ReactJS",
        "NodeJS",
        "Express",
        "MongoDB",
        "LeafletJS",
        "Mongoose",
        "SliderJS",
      ],
      images: ["Tour-1.PNG", "Tour-2.PNG", "Tour-3.PNG", "Tour-4.PNG"],
    },
    {
      title: "Netflix Clone - Front-End Focused Portfolio",
      introduction:
        "A responsive portfolio website styled like Netflix, using Django and custom UI components.",
      technologies: ["Django", "JavaScript"],
      images: [
        "Metflix-1.png",
        "Metflix-2.png",
        "Metflix-3.png",
        "Metflix-4.png",
      ],
    },
    {
      title: "Inventory Management System (IMS)",
      introduction:
        "A real-time inventory dashboard with low-stock alerts and visual insights via Chart.js.",
      technologies: ["Django", "JavaScript", "jQuery", "ChartJS"],
      images: ["IMS-1.png", "IMS-2.png", "IMS-3.PNG", "IMS-4.PNG"],
    },
    {
      title: "DepHelp - Depression Assessment Platform",
      introduction:
        "A full-stack depression screening and assessment platform with Google authentication, dynamic questionnaire, real-time scoring, and personalized results analysis.",
      technologies: [
        "Next.js",
        "TypeScript",
        "NodeJS",
        "Express",
        "MongoDB",
        "NextAuth",
        "Tailwind CSS",
        "Mongoose",
      ],
      images: ["Dephelp-1.png", "Dephelp-2.png", "Dephelp-3.png"],
    },{
      title: "TourConnect - Cloud-Based Van Tour Booking System",
      introduction:
        "A full-stack van tour booking system with real-time GPS tracking, location autocomplete, seat reservation management, and an interactive map for seamless travel coordination.",
      technologies: [
        "Next.js",
        "TypeScript",
        "NodeJS",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Mongoose"
      ],
      images: ["TourConnect-1.png", "TourConnect-2.png", "TourConnect-3.png"],
    }
    
  ];

  return (
    <div className="w-full py-5 flex flex-col items-center gap-5 px-4">
      <p className="text-[25px] text-accent font-bold tracking-widest">
        Personal Projects
      </p>

      <div
        className="grid gap-7 max-w-[1450px] w-fit
    grid-cols-1 
    sm:grid-cols-2
    lg:grid-cols-3
    mx-auto justify-items-center"
    
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
