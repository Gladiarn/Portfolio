import React, { useEffect, useState } from "react";
import { Project } from "../types";
import ProjectCard from "./ProjectCard";
import {
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
const projects: Project[] = [
  {
    title: "TourVan - Cloud-Based Van Tour.",
    link: "https://github.com/Gladiarn/TourVan-Front",
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
    features: [
      "Real-time GPS tracking with LeafletJS",
      "Location autocomplete for booking",
      "Dynamic seat reservation and availability",
      "Responsive front-end with ReactJS",
    ],
  },
  {
    title: "Netflix Clone - Front-End Focused Portfolio",
    link: "https://github.com/Gladiarn/netflix-clone",
    introduction:
      "A responsive portfolio website styled like Netflix, using Django and custom UI components.",
    technologies: ["Django", "JavaScript"],
    images: [
      "Metflix-1.png",
      "Metflix-2.png",
      "Metflix-3.png",
      "Metflix-4.png",
    ],
    features: [
      "Netflix-style UI and navigation",
      "Responsive design with custom CSS",
      "Django backend serving portfolio content",
    ],
  },
  {
    title: "Inventory Management System (IMS)",
    link: "https://github.com/Gladiarn/IMS",
    introduction:
      "A real-time inventory dashboard with low-stock alerts and visual insights via Chart.js.",
    technologies: ["Django", "JavaScript", "jQuery", "ChartJS"],
    images: ["IMS-1.png", "IMS-2.png", "IMS-3.PNG", "IMS-4.PNG"],
    features: [
      "Real-time inventory updates",
      "Low-stock alerts",
      "Data visualization with Chart.js",
      "Admin-friendly dashboard",
    ],
  },
  {
    title: "DepHelp - Depression Assessment Platform",
    link: "https://github.com/Gladiarn/Depression-Scale",
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
    features: [
      "Google authentication with NextAuth",
      "Dynamic questionnaire rendering",
      "Real-time scoring system",
      "Personalized results with data persistence",
    ],
  },
  {
    title: "TourConnect - Cloud-Based Van Tour Booking System",
    link: "https://github.com/Gladiarn/Tour-Connect",
    introduction:
      "A full-stack van tour booking system with real-time GPS tracking, location autocomplete, seat reservation management, and an interactive map for seamless travel coordination.",
    technologies: [
      "Next.js",
      "TypeScript",
      "NodeJS",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Mongoose",
    ],
    images: ["TourConnect-1.png", "TourConnect-2.png", "TourConnect-3.png"],
    features: [
      "Real-time GPS tour tracking",
      "Autocomplete for destinations",
      "Seat reservation management",
      "Interactive map integration",
    ],
  },
  {
    title: "Entertainment & Logic Games Website",
    link: "https://github.com/Gladiarn/Chess-Game",
    introduction:
      "A website featuring fun and logic games like Chess, Rock-Paper-Scissors, and other puzzles, built with React, TypeScript, Tailwind CSS, and React Chessboard for the chess game.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Chessboard",
      "JavaScript",
    ],
    images: [
      "chessGame-1.png",
      "chessGame-2.png",
      "chessGame-3.png",
      "chessGame-4.png",
    ],
    features: [
      "Playable chess with React Chessboard",
      "Rock-Paper-Scissors mini-game",
      "Responsive UI with Tailwind CSS",
      "TypeScript for type safety",
    ],
  },
  {
    title: "BookKing - Booking Website Prototype",
    link: "https://github.com/Gladiarn/Booking-Website",
    introduction:
      "A booking website prototype built in React to practice Framer Motion animations, using a mock JSON database for data handling and dynamic UI interactions.",
    technologies: ["React", "Framer Motion", "JSON Server"],
    images: ["BookKing-1.png", "BookKing-2.png", "BookKing-3.png"],
    features: [
      "Framer Motion-powered animations",
      "Mock booking data with JSON Server",
      "Interactive and dynamic UI",
      "Lightweight booking prototype",
    ],
  },
];

export default function Projects() {
  const [paginated, setPaginated] = useState<Project[]>([]);
  const itemsPerPage = 3;
  const [inputValue, setInputValue] = useState<string>("1");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const handlePagination = (page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginated(projects.slice(startIndex, endIndex));
    setCurrentPage(page);
    setInputValue(page.toString());
  };
  useEffect(() => {
    handlePagination(1);
  }, []);
  return (
    <div className="w-full py-16 flex flex-col items-center gap-5 px-4">
      <p className="text-[25px] text-accent font-bold tracking-widest">
        Personal Projects
      </p>

      <div
        className="grid gap-7 max-w-[1450px] w-fit
    grid-cols-1 
    sm:grid-cols-2
    lg:grid-cols-3
    mx-auto justify-items-center items-start"
      >
        {paginated.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className="w-full flex justify-center items-center gap-4">
        <div className="flex justify-center items-center gap-2">
          <button
            className="text-accent hover:scale-110 transition-all ease-in-out duration-200 disabled:opacity-40"
            onClick={() => handlePagination(1)}
            disabled={currentPage === 1}
          >
            <ChevronFirst />
          </button>

          <button
            className="text-accent hover:scale-110 transition-all ease-in-out duration-200 disabled:opacity-40"
            onClick={() => handlePagination(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft />
          </button>
        </div>

        <div className="flex gap-2 items-center">
          <input
            value={inputValue}
            type="text"
            className="px-1 w-[30px] text-center bg-transparent border border-accent focus:outline-none rounded-sm"
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, "");
            }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const val = e.target.value;
              setInputValue(val);

              if (val !== "") {
                let page = parseInt(val);
                if (isNaN(page) || page < 1) page = 1;
                if (page > totalPages) page = totalPages;

                handlePagination(page);
              }
            }}
            onBlur={() => {
              if (inputValue === "") {
                handlePagination(1);
              }
            }}
          />

          <p className="text-primary">of {totalPages}</p>
        </div>

        <div className="flex justify-center items-center gap-2">
          <button
            className="text-accent hover:scale-110 transition-all ease-in-out duration-200 disabled:opacity-40"
            onClick={() =>
              handlePagination(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
          >
            <ChevronRight />
          </button>

          <button
            className="text-accent hover:scale-110 transition-all ease-in-out duration-200 disabled:opacity-40"
            onClick={() => handlePagination(totalPages)}
            disabled={currentPage === totalPages}
          >
            <ChevronLast />
          </button>
        </div>
      </div>
    </div>
  );
}
