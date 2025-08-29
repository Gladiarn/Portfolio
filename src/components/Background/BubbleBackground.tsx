import React from "react";

export default function BubbleBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: -1,
      }}
    >
      <div
        className="absolute rounded-full"
        style={{
          width: "700px",
          height: "700px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.047) 0%, rgba(255,255,255,0.019) 40%, transparent 80%)",
        }}
      />

      <div
        className="absolute rounded-full animate-pulseGlow"
        style={{
          width: "1200px",
          height: "1200px",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.038) 0%, rgba(255,255,255,0.0095) 50%, transparent 90%)",
        }}
      />
    </div>
  );
}
