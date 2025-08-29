import React, { useEffect, useState } from "react";
import { SkillsTypes } from "../types";
import SkillsCard from "./SkillsCard";

const skillsContainer: SkillsTypes[] = [
  // Frontend
  {
    title: "JavaScript",
    proficiency: 85,
    total: 100,
    category: "Frontend",
    level: "Advanced",
  },
  {
    title: "React",
    proficiency: 85,
    total: 100,
    category: "Frontend",
    level: "Advanced",
  },
  {
    title: "Next.js",
    proficiency: 80,
    total: 100,
    category: "Frontend",
    level: "Advanced",
  },
  {
    title: "TypeScript",
    proficiency: 75,
    total: 100,
    category: "Frontend",
    level: "Intermediate",
  },
  {
    title: "HTML",
    proficiency: 90,
    total: 100,
    category: "Frontend",
    level: "Expert",
  },
  {
    title: "CSS",
    proficiency: 90,
    total: 100,
    category: "Frontend",
    level: "Expert",
  },
  {
    title: "Tailwind CSS",
    proficiency: 90,
    total: 100,
    category: "Frontend",
    level: "Expert",
  },

  // Backend
  {
    title: "Node.js",
    proficiency: 75,
    total: 100,
    category: "Backend",
    level: "Intermediate",
  },
  {
    title: "REST APIs",
    proficiency: 75,
    total: 100,
    category: "Backend",
    level: "Intermediate",
  },
  {
    title: "Django",
    proficiency: 70,
    total: 100,
    category: "Backend",
    level: "Intermediate",
  },
  {
    title: "Laravel",
    proficiency: 45, // lowered from 55
    total: 100,
    category: "Backend",
    level: "Beginner",
  },
  {
    title: "MongoDB",
    proficiency: 70,
    total: 100,
    category: "Backend",
    level: "Intermediate",
  },
  {
    title: "Python",
    proficiency: 70,
    total: 100,
    category: "Backend",
    level: "Intermediate",
  },

  // Design
  {
    title: "Figma",
    proficiency: 75,
    total: 100,
    category: "Design",
    level: "Intermediate",
  },
  {
    title: "UI/UX Design",
    proficiency: 60,
    total: 100,
    category: "Design",
    level: "Beginner",
  },

  // Collaboration / Tools
  {
    title: "GitHub",
    proficiency: 85,
    total: 100,
    category: "Collaboration",
    level: "Advanced",
  },
  {
    title: "GitLab",
    proficiency: 85,
    total: 100,
    category: "Collaboration",
    level: "Advanced",
  },
];

export default function Skills() {
  const [categories, setCategories] = useState<string[]>([]);
  const [chosenCategory, setChosenCategory] = useState<string>("All");
  const [filteredSkills, setFilteredSkills] =
    useState<SkillsTypes[]>(skillsContainer);
  useEffect(() => {
    const uniqueCategories = [
      "All",
      ...new Set(skillsContainer.map((skill) => skill.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  const filterCategory = (category: string): void => {
    setChosenCategory(category);

    if (category === "All") {
      setFilteredSkills(skillsContainer);
    } else {
      const skills = skillsContainer.filter((skill) => {
        return skill.category == category;
      });

      setFilteredSkills(skills);
    }
  };

  return (
    <div id="Skills" className="w-full py-8 flex flex-col items-center gap-5 px-4 sm:mt-6 mt-0">
      <p className="text-[25px] text-accent font-bold tracking-widest">
        Skills
      </p>

      <div className="w-full flex flex-wrap gap-4 justify-center text-[15px] tracking-widest">
        {categories.map((category, index) => (
          <button
            onClick={() => {
              filterCategory(category);
            }}
            className={`transition-all ease-in-out duration-200 px-[10px] py-[5px] border border-accent text-accent rounded-full ${
              chosenCategory == category ? "bg-accent text-foregroundWithAccent" : ""
            }`}
            key={index}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="max-w-[1500px] w-fit flex flex-wrap gap-5 justify-center">
        {filteredSkills.map((skill, index) => (
          <SkillsCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
