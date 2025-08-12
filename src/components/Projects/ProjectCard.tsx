import Image from "next/image";
import React, { useState } from "react";
import { Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const changeImageSlide = (index: number): void => {
    setCurrentImage(index);
  };
  return (
    <div
      className="flex flex-col border border-accent rounded-lg overflow-hidden bg-card/40 backdrop-blur-sm 
  w-full
  sm:w-[295px]
  xl:w-[370px]
  2xl:w-[460px]
"
    >
      <div
        className="relative aspect-[16/8]
    sm:h-[180px] 
    xl:h-[210px] 
    2xl:h-[260px] 
    overflow-hidden"
      >
        <Image
          src={`/${project.images[currentImage]}`}
          alt={``}
          fill
          className="object-fit object-top cursor-pointer scale-100 hover:scale-105 transition-all ease-in-out duration-200"
        />

        <div className="absolute top-2 right-2">test</div>
        <div className="absolute w-full bottom-0 left-1/2 -translate-x-1/2 flex gap-1 py-1 justify-center">
          {project.images.map((_, index) => (
            <div
              key={index}
              className={`transition-colors ease-in-out duration-300 cursor-pointer rounded-full h-[10px] w-[10px] ${
                currentImage === index ? "bg-accent" : "bg-border"
              }`}
              onClick={() => changeImageSlide(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className="max-w-[600px] flex gap-3 flex-col p-5">
        <p className="text-[19px] text-accent font-bold">{project.title}</p>
        <p className="text-foreground text-[13px]">{project.introduction}</p>
        <div className="flex flex-wrap gap-1">
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="px-[6px] py-[3px] text-[12px] text-foreground bg-accent rounded-full"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
