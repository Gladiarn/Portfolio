import React from "react";
import { cardInfosTypes } from "../types";

export default function Card({ card }: { card: cardInfosTypes }) {
  return (
    <div
      className={`${
        card.title === "Agile & Scrum" ? "flex flex-col opacity-100 pointer-events-auto scale-100 transition-all duration-300" : "flex flex-col opacity-0 pointer-events-none scale-95 transition-all duration-300"
      } xl:flex xl:flex-col xl:opacity-100 xl:pointer-events-auto xl:Scale-100 transition-all duration-300 ease-in-out text-center items-center gap-3 max-w-[350px] absolute xl:static bg-card px-3 py-3 rounded-md shadow-[0_0_20px_#1E90FF] border-2 border-accent`}
    >
      <div
        className={`w-[36px] h-[36px] ${card.background} bg-accent flex justify-center items-center relative`}
      >
        {card.icon}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-foreground text-[20px]">{card.title}</p>
        <p className="text-[14px] text-secondary">{card.body}</p>
      </div>
    </div>
  );
}
