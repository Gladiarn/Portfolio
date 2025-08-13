import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
export default function Ticker() {
  const initialIcons = [
    { src: "html5.svg", name: "HTML5" },
    { src: "tailwindcss.svg", name: "Tailwind CSS" },
    { src: "javascript.svg", name: "JavaScript" },
    { src: "typescript.svg", name: "TypeScript" },
    { src: "react.svg", name: "React" },
    { src: "nextdotjs.svg", name: "Next.js" },
    { src: "express.svg", name: "Express" },
    { src: "figma.svg", name: "Figma" },
    { src: "github.svg", name: "GitHub" },
    { src: "gitlab.svg", name: "GitLab" },
    { src: "mongodb.svg", name: "MongoDB" },
    { src: "nodedotjs.svg", name: "Node.js" },
    { src: "python.svg", name: "Python" },
    { src: "html5.svg", name: "HTML5" },
    { src: "tailwindcss.svg", name: "Tailwind CSS" },
    { src: "javascript.svg", name: "JavaScript" },
    { src: "typescript.svg", name: "TypeScript" },
    { src: "react.svg", name: "React" },
    { src: "nextdotjs.svg", name: "Next.js" },
    { src: "express.svg", name: "Express" },
    { src: "figma.svg", name: "Figma" },
    { src: "github.svg", name: "GitHub" },
    { src: "gitlab.svg", name: "GitLab" },
    { src: "mongodb.svg", name: "MongoDB" },
    { src: "nodedotjs.svg", name: "Node.js" },
    { src: "python.svg", name: "Python" },
  ];

  const [icons, setIcons] = useState(initialIcons);
  const containerRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<boolean>(false);

  const x = useMotionValue(0);
  const speed = hovered ? 0 : 0.3;
  const skipNextFrameRef = useRef(false);

  useAnimationFrame(() => {
    const container = containerRef.current;
    const ticker = motionRef.current;

    if (!container || !ticker) return;

    if (skipNextFrameRef.current) {
      skipNextFrameRef.current = false;
      return;
    }

    x.set(x.get() - speed);

    const firstChild = ticker.children[0] as HTMLElement;
    const firstRect = firstChild.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    if (firstRect.right < containerRect.left) {
      const offset = firstChild.offsetWidth + 80;

      setIcons((prev) => {
        const updated = [...prev];
        const first = updated.shift();
        if (first) updated.push(first);
        return updated;
      });

      requestAnimationFrame(() => {
        x.set(x.get() + offset);
        skipNextFrameRef.current = true;
      });
    }
  });

  return (
    <div
      ref={containerRef}
      className="w-full overflow-visible h-20 relative flex items-centers"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-[100px] w-16 bg-gradient-to-r from-background/100 to-white/0 z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-[100px] w-16 bg-gradient-to-l from-background/100 to-white/0 z-10" />
      <motion.div
        ref={motionRef}
        className="flex gap-20 w-max will-change-transform "
        style={{ x }}
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="h-[65px] w-[60px] flex items-center justify-center relative flex-col"
          >
            <Image
              src={icon.src}
              alt={`Icon-${index}`}
              width={52}
              height={52}
              className="object-contain fill-[#EEEEEE] cursor-pointer transition-transform duration-300 hover:scale-125 peer"
              onMouseEnter={() => {
                setHovered(true);
              }}
              onMouseLeave={() => {
                setHovered(false);
              }}
            />

            <p className="absolute -bottom-8 text-nowrap opacity-0 peer-hover:opacity-100 transition-opacity ease-in-out duration-200">{icon.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
