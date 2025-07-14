import Image from "next/image";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import ReactIcon from "@/icons/react.svg";
export default function Ticker() {
  const initialIcons = [
    "html5.svg",
    "tailwindcss.svg",
    "javascript.svg",
    "typescript.svg",
    "react.svg",
    "nextdotjs.svg",
    "express.svg",
    "figma.svg",
    "github.svg",
    "gitlab.svg",
    "mongodb.svg",
    "nodedotjs.svg",
    "python.svg",
  ];

  const [icons, setIcons] = useState(initialIcons);
  const containerRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const speed = 1.5;
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
      const offset = firstChild.offsetWidth + 48;

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
      className="w-full overflow-hidden h-20 relative"
    >
        <ReactIcon className="w-8 h-8 text-[#EEEEEE]" />
      <motion.div
        ref={motionRef}
        className="flex gap-12 w-max will-change-transform"
        style={{ x }}
      >
        {icons.map((icon, index) => (
          <Image
            key={index}
            src={icon}
            alt={`Icon-${index}`}
            width={64}
            height={64}
            className="object-contain fill-[#EEEEEE]"
          />
        ))}
      </motion.div>
    </div>
  );
}
