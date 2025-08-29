import React from 'react'
import { ExperienceType } from '../types';
import ExperienceCard from './ExperienceCard';
import Link from 'next/link';
export const experiences:ExperienceType[] = [
  {
    position: "Frontend Intern (Next.js)",
    company: "Symphonics Co. Ltd.",
    dateStarted: "February 2025",
    dateEnded: "May 2025",
    summary:
      "Worked as a Frontend Intern focusing on modernizing and developing user interfaces using Next.js.",
    contributions: [
      "Redesigned the company’s legacy system and created new UI designs in Figma.",
      "Implemented Figma designs into responsive Next.js components.",
      "Reviewed code and oversaw pull requests to maintain code quality.",
      "Integrated the frontend with backend services using RESTful APIs.",
    ],
  },  {
    position: "----------",
    company: "-------",
    dateStarted: "------",
    dateEnded: "-------",
    summary:
      "------------------------- ------------- ---------------------------------- -------------------------",
    contributions: [
      "Redesigned the company’s legacy system and created new UI designs in Figma.",
      "Implemented Figma designs into responsive Next.js components.",
      "Reviewed code and oversaw pull requests to maintain code quality.",
      "Integrated the frontend with backend services using RESTful APIs.",
    ],
  },
];

export default function Experience() {
  return (
    <div className='w-full py-8 px-4 xl:px-[170px] flex items-center flex-col gap-3'>
        <p className="text-[25px] text-accent font-bold tracking-widest mb-5">
        Experience
      </p>
      <div className='children-scroll rounded-md w-full py-8 flex overflow-x-auto'>
        {
          experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} length={experiences.length}/>
          ))
        }
      </div>
            <div className="max-w-[600px] text-center flex flex-col gap-4">
              <p className="text-foreground">
                Aspiring software engineer excited to join a{" "}
                <b className="text-accent">cross-functional</b> team and contribute to
                impactful, real-world products.
              </p>
      
              <Link
                href={""}
                className="text-[20px] text-accent underline underline-offset-4 font-semibold tracking-widest hover:text-foreground transition-all ease-in-out duration-300"
              >
                See Achievements
              </Link>
            </div>
    </div>
  )
}
