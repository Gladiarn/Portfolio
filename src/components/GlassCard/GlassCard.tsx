import React from "react";

export default function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative
        rounded-2xl
        p-5
        shadow-lg
        backdrop-blur-lg
        border
        border-border
        duration-200
        ease-in-out
        overflow-hidden
        transition-all ${className}`}
      style={{
        background:
          "linear-gradient(135deg, hsl(var(--card)/0.4) 0%, hsl(var(--card)/0.3) 100%)",
        boxShadow:
          "inset 0 1px 2px rgba(255,255,255,0.1), 0 8px 20px rgba(0,0,0,0.05)",
      }}
    >
      {children}
    </div>
  );
}
