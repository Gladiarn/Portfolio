import React from "react";
import bubbleTypes from "../types";

export default function BubbleBackground({
  bubbles,
}: {
  bubbles: bubbleTypes[];
}) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[50px] left-1/2 w-[1000px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(220,199,161,0.2)_0%,_transparent_70%)] blur-3xl"></div>

      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-[#DCC7A1] animate-float"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}`,
            top: `${bubble.top}`,
            ["--duration" as string]: `${bubble.duration}`,
            ["--delay" as string]: `${bubble.delay}`,
            boxShadow: "0 0 6px 2px rgba(100, 100, 100, 0.3)",
          }}
        />
      ))}
    </div>
  );
}
