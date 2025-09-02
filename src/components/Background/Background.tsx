import React from "react";

export default function Background() {
  return (
    <div
      className="fixed inset-0 pointer-events-none bg-background"
      style={{
        zIndex: -1,
        backgroundImage: `
          radial-gradient(
            circle at center,
            rgba(0, 0, 0, 0) 60%,
            hsl(var(--circle)) 100%
          ),
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 40px 40px, 40px 40px",
        backgroundRepeat: "no-repeat, repeat, repeat",
      }}
    />
  );
}
