import React, { useRef, useState } from "react";

export default function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState<{ x: number; y: number } | null>(
    null
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => setSpotlight(null);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
      {/* Spotlight overlay */}
      {spotlight && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-200"
          style={{
            background: `radial-gradient(300px circle at ${spotlight.x}px ${spotlight.y}px, rgba(255,255,255,0.15), transparent 80%)`,
          }}
        />
      )}
      {/* Content */}
      
      {children}
    </div>
  );
}
