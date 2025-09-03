import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Project } from "../types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GlassCard from "../GlassCard/GlassCard";
import { AnimatePresence, motion } from "framer-motion";

export default function ProjectCard({ project }: { project: Project }) {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [dialogImage, setDialogImage] = useState<number>(0);

  const [hovering, setHovering] = useState<boolean>(false);
  const [activated, setActivated] = useState<boolean>(false);

  const changeImageSlide = (index: number): void => {
    if (index < 0) index = project.images.length - 1;
    if (index >= project.images.length) index = 0;
    setCurrentImage(index);
  };

  const changeDialogSlide = (index: number): void => {
    if (index < 0) index = project.images.length - 1;
    if (index >= project.images.length) index = 0;
    setDialogImage(index);
  };

  // auto play main preview
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 7000);

    return () => clearTimeout(timeout); // clears previous timeouts
  }, [currentImage, project.images.length]);

  return (
    <GlassCard
      className="flex flex-col w-full sm:w-[295px] xl:w-[370px] 2xl:w-[460px] border border-accent overflow-hidden p-[15px] relative cursor-pointer
      "
      onClick={() => setActivated(!activated)}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Dialog>
        <div className="relative overflow-hidden aspect-[16/8] sm:h-[180px] xl:h-[210px] 2xl:h-[260px]">
          <DialogTrigger asChild>
            <div className="h-full w-full cursor-pointer">
              <div
                className="flex h-full w-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                {project.images.map((img, index) => (
                  <div key={index} className="flex-shrink-0 w-full h-full">
                    <Image
                      src={`/${img}`}
                      alt=""
                      width={800}
                      height={400}
                      className="object-cover object-top w-full h-full rounded-md hover:scale-105 transition-transform duration-200"
                      onClick={() => setDialogImage(currentImage)}
                      style={{
                        boxShadow:
                          "inset 0 1px 2px rgba(255,255,255,0.1), 0 8px 20px rgba(0,0,0,0.05)",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </DialogTrigger>

          {/* Pagination dots inside image but not part of the trigger */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 justify-center">
            {project.images.map((_, index) => (
              <div
                key={index}
                className={`transition-colors duration-300 cursor-pointer rounded-full h-[10px] w-[10px] ${
                  currentImage === index ? "bg-accent" : "bg-border"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  changeImageSlide(index);
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Dialog with independent slider */}
        <DialogContent
          closerNone={true}
          className="w-full max-w-[1100px] h-fit p-2 bg-transparent border-none"
        >
          <DialogTitle className="sr-only">Settings</DialogTitle>
          <DialogDescription className="sr-only"></DialogDescription>
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${dialogImage * 100}%)` }}
            >
              {project.images.map((dialogImg, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-full flex items-center justify-center"
                >
                  <Image
                    src={`/${dialogImg}`}
                    alt=""
                    width={1200}
                    height={800}
                    className="max-w-full max-h-[85vh] object-contain rounded-md"
                  />
                </div>
              ))}
            </div>

            {/* Navigation buttons inside dialog */}
            <button
              className="absolute left-2 p-2 bg-black/50 rounded-full hover:bg-black/70"
              onClick={() => changeDialogSlide(dialogImage - 1)}
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>

            <button
              className="absolute right-2 p-2 bg-black/50 rounded-full hover:bg-black/70"
              onClick={() => changeDialogSlide(dialogImage + 1)}
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Project Info */}
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

        <AnimatePresence>
            {activated && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    duration: 0.15,
                    ease: "easeInOut", // smooth fade/slide out
                  },
                }}
                transition={{
                  type: "spring", // spring animation
                  stiffness: 500, // how tight the spring is
                  damping: 20, // how much bounce is reduced
                  delay: 0, // small delay before animating
                }}
                 className="text-[14px] text-secondary-foreground ml-3"
              >

                <ul className="list-disc space-y-1">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
      </div>

      <div
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 text-nowrap ${
          hovering ? "opacity-100" : "opacity-0"
        } transition-opacity duration-200 ease-in-out mt-2 text-center`}
      >
        <p className="text-secondary text-[12px]">
          {activated ? "Click to collapse" : "Click to see features"}
        </p>
      </div>
    </GlassCard>
  );
}
