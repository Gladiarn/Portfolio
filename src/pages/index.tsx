import About from "@/components/About/About";
import BubbleBackground from "@/components/Background/BubbleBackground";
import Carousel from "@/components/Carousel/Carousel";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import HeroSection from "@/components/Hero/HeroSection";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import bubbleTypes from "@/components/types";
import { Moon, MoveUp, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [bubbles, setBubbles] = useState<bubbleTypes[]>([]);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false)
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

  useEffect(()=>{
    setMounted(true)
  },[])

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full bg-background relative z-0">
      <Head>
        <title>Ianne&apos;s Portfolio</title>
        
        <link rel="icon" href={"briefcase-business.svg"}></link>
      </Head>

      {/* go up button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`${
          showButton ? "opacity-100" : "opacity-0 pointer-events-none"
        }  flex fixed z-20 bottom-16 left-0 -translate-y-1/2 p-2 bg-accent transition-all ease-in-out duration-200 cursor-pointer hover:px-3`}
      >
        <MoveUp />
      </button>

      {/* theme changer */}
      {
        mounted && (
          <button
            className="fixed right-0 top-20 p-2 bg-accent z-20 transition-all ease-in-out duration-200 cursor-pointer hover:px-3"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Sun /> : <Moon />}
          </button>
        )
      }

      <BubbleBackground bubbles={bubbles} />
      <Navbar />
      <HeroSection />
      <Carousel />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
