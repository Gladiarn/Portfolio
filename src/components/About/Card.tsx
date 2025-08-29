import React from "react";
import { cardInfosTypes } from "../types";
import GlassCard from "../GlassCard/GlassCard";

export default function Card({
  card,
  activeCard,
  index,
}: {
  card: cardInfosTypes;
  activeCard: number;
  index: number;
}) {
  return (
    <div
      className={`${
        activeCard === index
          ? "opacity-100 pointer-events-auto scale-100"
          : "opacity-0 pointer-events-none scale-95"
      } xl:opacity-100 xl:pointer-events-auto xl:flex xl:flex-col transition-all duration-300 ease-in-out absolute xl:static`}
    >
      <GlassCard>
        <div className="flex flex-col text-center items-center gap-3 max-w-[350px]">
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
      </GlassCard>
    </div>
  );
}
