import React, { useState } from "react";
import { ExperienceType } from "../types";
import { Briefcase, Calendar } from "lucide-react";
import GlassCard from "../GlassCard/GlassCard";
import { motion, AnimatePresence } from "framer-motion";

export default function ExperienceCard({
  experience,
  index,
  length,
}: {
  experience: ExperienceType;
  index: number;
  length: number;
}) {
  const [hovering, setHovering] = useState<boolean>(false);
  const [activated, setActivated] = useState<boolean>(false);
  return (
    <div
      className={`relative ${
        length - 1 === index ? "" : "border-t-2 border-accent border-dashed"
      } pt-8 max-w-[400px] min-w-[400px] px-2`}
    >
      <div className="absolute left-0 top-0 -translate-y-1/2 rounded-full p-2 bg-accent">
        <Briefcase className="text-foregroundWithAccent" />
      </div>

      <GlassCard
        className=" cursor-pointer transition-all duration-200 ease-in-out relative"
        onClick={() => setActivated(!activated)}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div className="flex flex-col gap-1">
          <p className="text-[20px] text-accent font-semibold tracking-wider">
            {experience.position}
          </p>

          <p className="text-[17px] text-foreground font-medium">
            {experience.company}
          </p>

          <i className="flex gap-1 items-center text-secondary text-[13px]">
            <Calendar className="w-[13px]" />
            <p>{experience.dateStarted} - </p>
            <p>{experience.dateEnded}</p>
          </i>
          <p className="text-[14px] text-secondary-foreground ml-3">
            {experience.summary}
          </p>

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
                <ul className="list-disc space-y-1 pl-5">
                  {experience.contributions.map((contribution, index) => (
                    <li key={index}>{contribution}</li>
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
            {activated ? "Click to collapse" : "Click to see contributions"}
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
