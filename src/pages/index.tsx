import BubbleBackground from "@/components/Background/BubbleBackground";
import Navbar from "@/components/Navbar/Navbar";
import { bubbleTypes } from "@/components/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [bubbles, setBubbles] = useState<bubbleTypes[]>([]);

  useEffect(() => {
    const total = 200;
    const list = [];

    for (let i = 0; i < total; i++) {
      list.push({
        id: i,
        size: Math.floor(Math.random() * 4) + 1,
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        duration: `${2 + Math.random() * 3}s`,
        delay: `${Math.random() * 5}s`,
      });

      setBubbles(list);
      console.log(list);
    }
  }, []);

  return (
    <div className="w-full h-screen bg-background">
      {/* Background */}
      <BubbleBackground bubbles={bubbles} />
      <Navbar />
      {/* <div className="relative w-[300px] h-[300px] rounded-full bg-white/05 backdrop-blur-[3px] border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1),inset_0_0_4px_2px_rgba(255,255,255,0.2)] overflow-hidden">
        
      </div> */}
    </div>
  );
}
