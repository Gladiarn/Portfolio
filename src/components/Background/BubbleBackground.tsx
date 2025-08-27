import React from "react";
import bubbleTypes from "../types";
// import { useTheme } from "next-themes";

export default function BubbleBackground({
  bubbles,
}: {
  bubbles: bubbleTypes[];
}) {

  // const {theme} = useTheme()
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{zIndex: -1}}>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full bg-foreground animate-float`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}`,
            top: `${bubble.top}`,
            ["--duration" as string]: `${bubble.duration}`,
            ["--delay" as string]: `${bubble.delay}`,
          }}
        />
      ))}
    </div>
  );
}