import React from "react";

export default function BubbleBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none bg-background"
      style={{ 
        zIndex: -1,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
}
