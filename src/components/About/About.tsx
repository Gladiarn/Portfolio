import React, { useEffect, useState } from "react";
import { cardInfosTypes } from "../types";
import Card from "./Card";
import { BrainCog, HeartHandshake, Puzzle, Rabbit } from "lucide-react";
import Link from "next/link";

export default function About() {
  const cardsInfo: cardInfosTypes[] = [
    {
      title: "Agile & Scrum",
      body: "Experienced in Agile frameworks with a focus on Scrum methodology for collaborative, iterative development.",
      background: "rounded-[54%_46%_45%_55%_/_39%_30%_70%_61%]",
      icon: (
        <Rabbit className="h-[32px] w-[32px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      ),
    },
    {
      title: "Team Collaboration",
      body: "Worked closely with cross-functional teams to deliver features on time and maintain clear communication.",
      background: "rounded-[17%_83%_18%_82%_/_54%_75%_25%_46%]",
      icon: (
        <HeartHandshake className="h-[32px] w-[32px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      ),
    },
    {
      title: "Problem Solving",
      body: "Quick to identify issues and propose effective solutions during both development and debugging phases.",
      background: "rounded-[34%_66%_36%_64%_/_67%_28%_72%_33%]",
      icon: (
        <Puzzle className="h-[32px] w-[32px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      ),
    },
    {
      title: "Continuous Learning",
      body: "Always eager to explore new technologies, tools, and best practices to improve productivity and code quality.",
      background: "rounded-[82%_18%_48%_52%_/_79%_14%_86%_21%]",
      icon: (
        <BrainCog className="h-[32px] w-[32px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      ),
    },
  ];

  useEffect(()=>{
    setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cardsInfo.length);
    },5000);
  },[cardsInfo.length]);

  
  const [activeCard, setActiveCard] = useState<number>(0);

  return (
    <div id="About" className="w-full py-14 flex items-center flex-col gap-16 px-4">
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-center gap-16 relative mt-5 min-h-[190px]">
          {cardsInfo.map((card, index) => (
            <Card key={index} card={card} activeCard={activeCard} index={index}/>
          ))}
        </div>
        <div className="w-fill xl:hidden gap-1 justify-center flex">
          {
            cardsInfo.map((card, index)=>(
              <button
                key={Math.random()}
                className={`w-[10px] h-[10px] rounded-full border-accent transition-all duration-300 ${
                  activeCard === index ? "bg-accent" : "bg-border"
                }`}
                onClick={() => setActiveCard(index)}
              ></button>
            ))
          }
        </div>
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
          Learn More
        </Link>
      </div>
    </div>
  );
}
