import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className=" h-[600px] w-full px-4 md:px-[50px] xl:px-[100px] flex flex-col lg:flex-row justify-center lg:items-center lg:gap-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="text-foreground order-1 text-center w-full lg:text-start lg:w-[600px]"
      >
        <p className="font-medium leading-tight">Hello, I&apos;m</p>
        <p className="text-[32px] font-bold leading-tight">
          Ianne Carl Z. Bulilan
        </p>
        <div className="flex whitespace-nowrap items-center text-[20px] font-semibold leading-tight gap-1 justify-center lg:justify-start">
          <p>And I&apos;m a</p>
          <span className="text-accent">
            <Typewriter
              words={["Web Developer", "JavaScript Enthusiast"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>

        <p className="text-[14px] text-secondary mt-5">
          I create seamless web experiences as a Fullstack Developer, working
          across frontend and backend technologies.
        </p>

        <div className="flex gap-4 pt-5 justify-center lg:justify-start">
          <Link
            href={"https://github.com/gladiarn"}
            className="px-4 py-2 rounded-md bg-accent text-foregroundWithAccent font-semibold tracking-wide hover:bg-foreground hover:text-accent transition-all ease-in-out duration-300"
          >
            View GitHub
          </Link>
          <button
            onClick={() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }}
            className="px-4 py-2 rounded-md text-accent border border-accent font-semibold tracking-wide hover:text-foreground hover:border-foreground transition-all ease-in-out duration-300"
          >
            Contact Me
          </button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative order-0 flex justify-center py-10"
      >
        <div
          className={`rounded-full w-[150px] h-[150px] flex justify-center items-center overflow-hidden border-2 border-border shadow-[0_0_30px_rgba(255,255,255,0.05)]
 lg:w-[300px] lg:h-[300px]`}
        >
          <div className="relative w-full h-full">
            <Image
              src="/2x2.png"
              alt="picture"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
