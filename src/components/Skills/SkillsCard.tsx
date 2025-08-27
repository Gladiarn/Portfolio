import React from "react";
import { SkillsTypes } from "../types";

export default function SkillsCard({ skill }: { skill: SkillsTypes }) {
  return (
    <div className="sm:w-[200px] w-[145px] border border-accent h-[100px] rounded-lg flex flex-col p-2  px-3 sm:px-4 justify-around bg-card/40 backdrop-blur-sm hover:shadow-[0_0_20px_#f97316] cursor-pointer">
      <p className="text-foreground">{skill.title}</p>

      <div className={`w-full h-[4px] bg-secondary/20 rounded-full`}>
        <div className={`h-full bg-accent rounded-full`} style={{width: `${skill.proficiency}%`}}></div>
      </div>

      <div className="w-full flex justify-between">
        <p className="text-secondary text-[12px]">{skill.level}</p>
        <p className="text-secondary text-[12px]">{skill.proficiency}%</p>
      </div>
    </div>
  );
}
