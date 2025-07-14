// import Background from "@/components/Background/Background";
// import BubbleBackground from "@/components/Background/BubbleBackground";
import Carousel from "@/components/Carousel/Carousel";
import HeroSection from "@/components/Hero/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
// import bubbleTypes from "@/components/types";
// import { useEffect, useState } from "react";

export default function Home() {

  // const [bubbles, setBubbles] = useState<bubbleTypes[]>([]);

  // useEffect(() => {
  //   const total = 200;
  //   const list = [];

  //   for (let i = 0; i < total; i++) {
  //     list.push({
  //       id: i,
  //       size: Math.floor(Math.random() * 4) + 1,
  //       left: `${Math.random() * 100}vw`,
  //       top: `${Math.random() * 100}vh`,
  //       duration: `${2 + Math.random() * 3}s`,
  //       delay: `${Math.random() * 5}s`,
  //     });

  //     setBubbles(list);
  //   }
  // }, []);

  return (
    <div className="w-full h-screen bg-background relative overflow-hidden z-0">
      {/* <BubbleBackground bubbles={bubbles}/> */}
      <Navbar />
      <HeroSection />
      <Carousel />
    </div>
  );
}
