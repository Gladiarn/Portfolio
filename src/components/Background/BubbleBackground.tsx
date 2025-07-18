import React from "react";
import bubbleTypes from "../types";

export default function BubbleBackground({
  bubbles,
}: {
  bubbles: bubbleTypes[];
}) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{zIndex: -1}}>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-[#EEEEEE] animate-float"
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