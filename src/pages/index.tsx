import About from "@/components/About/About";
import BubbleBackground from "@/components/Background/BubbleBackground";
import Carousel from "@/components/Carousel/Carousel";
import Contact from "@/components/Contact/Contact";
import HeroSection from "@/components/Hero/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import bubbleTypes from "@/components/types";
import { MoveUp } from "lucide-react";
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
    }
  }, []);

  const [showButton, setShowButton] = useState<boolean>(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    } 
  }, []);

  return (
    <div className="w-full bg-background relative z-0">
       <button onClick={()=>window.scrollTo({top:0, behavior: "smooth"})} className={`${showButton ? "opacity-100" : "opacity-0 pointer-events-none"}  flex fixed z-20 top-1/2 left-0 -translate-y-1/2 p-2 bg-accent transition-all ease-in-out duration-200 cursor-pointer hover:px-3`}>
      <MoveUp />
      </button>

      <BubbleBackground bubbles={bubbles} />
      <Navbar />
      <HeroSection />
      <Carousel />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
