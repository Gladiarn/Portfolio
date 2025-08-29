import React from "react";
import { ExperienceType } from "../types";
import { Briefcase, Calendar } from "lucide-react";
import GlassCard from "../GlassCard/GlassCard";

export default function ExperienceCard({
  experience,
  index,
  length,
}: {
  experience: ExperienceType;
  index: number;
  length: number;
}) {
  return (
    <div
      className={`relative ${
        length - 1 === index ? "" : "border-t-2 border-accent border-dashed"
      } pt-8 max-w-[400px] min-w-[400px] px-2`}
    >
      {/* Icon */}
      <div className="absolute left-0 top-0 -translate-y-1/2 rounded-full p-2 bg-accent">
        <Briefcase className="text-foregroundWithAccent" />
      </div>

      {/* Main Glass Card */}

        <GlassCard className=" cursor-pointer transition-all duration-200 ease-in-out">
          <div className="flex flex-col gap-1">
            {/* Position */}
            <p className="text-[20px] text-accent font-semibold tracking-wider">
              {experience.position}
            </p>

            {/* Company */}
            <p className="text-[17px] text-foreground font-medium">{experience.company}</p>

            {/* Dates */}
            <i className="flex gap-1 items-center text-secondary text-[13px]">
              <Calendar className="w-[13px]" />
              <p>{experience.dateStarted} - </p>
              <p>{experience.dateEnded}</p>
            </i>

            {/* Summary */}
            <p className="text-[14px] text-secondary-foreground ml-3">
              {experience.summary}
            </p>
          </div>
        </GlassCard>

    </div>
  );
}
