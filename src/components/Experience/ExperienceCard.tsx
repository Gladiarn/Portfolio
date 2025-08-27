import React from "react";
import { ExperienceType } from "../types";
import { Briefcase } from "lucide-react";

export default function ExperienceCard({
  experience,index,length
}: {
  experience: ExperienceType;
  index: number;
  length: number;
}) {
  return (
    <div className={` relative border-accent border-dashed pt-8 max-w-[400px] min-w-[400px] px-2 ${length - 1 === index ? "border-none" : "border-t-2"}`}>
      <div className="absolute left-0 top-0 -translate-y-1/2 rounded-full p-2 bg-accent">
        <Briefcase />
      </div>
      <div className="flex flex-col gap-1 bg-card/40 backdrop-blur-sm p-3 rounded-md border border-accent cursor-pointer hover:scale-[1.02] transition-all duration-200 ease-in-out">
        <p className="text-[19px] text-accent font-semibold tracking-wider">
          {experience.position}
        </p>
        <div>
          <p className="text-[17px]">{experience.company}</p>

          <i className="flex gap-1">
            <p className="text-[13px] text-secondary">
              {experience.dateStarted} -{" "}
            </p>

            <p className="text-[13px] text-secondary">{experience.dateEnded}</p>
          </i>
        </div>
        <p className="text-[14px]">{experience.summary}</p>
      </div>
    </div>
  );
}
