// import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
export default function HeroSection() {


  return (
    <div className=" h-[700px] w-full px-4 md:px-[50px] xl:px-[100px] flex flex-col lg:flex-row justify-center lg:items-center lg:gap-32">
      <div className="text-foreground order-1 text-center w-full lg:text-start lg:w-[600px]">
        <p className="font-medium leading-tight">Hello, I&apos;m</p>
        <p className="text-[32px] font-bold leading-tight">
          Ianne Carl Z. Bulilan
        </p>
        <div className="flex whitespace-nowrap items-center text-[20px] font-semibold leading-tight gap-1 justify-center lg:justify-start">
          <p>And I&apos;m a</p>
          <span className="text-accent">
            <Typewriter
              words={["Web Developer", "JavaScript Enthusiast", "Fullstack Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>

        <p className="text-[13px] text-secondary mt-5">
          I&apos;m a fresh IT graduate with 5 Months of internship experience,
          skilled in React, Tailwind CSS, JavaScript, TypeScript, Next.js,
          Node.js, Express.js, and MongoDB. I&apos;ve also built projects using
          Django and Laravel, and I use GitHub and GitLab for version control.
        </p>

        <div className="flex gap-4 pt-5 justify-center lg:justify-start">
          <button className="px-4 py-2 rounded-md bg-accent text-foreground font-semibold tracking-wide hover:bg-foreground hover:text-accent transition-all ease-in-out duration-300">
            Hire Me
          </button>
          <button onClick={()=>{window.scrollTo({top: document.body.scrollHeight, behavior:'smooth'})}} className="px-4 py-2 rounded-md text-accent border border-accent font-semibold tracking-wide hover:text-foreground hover:border-foreground transition-all ease-in-out duration-300">
            Contact Me
          </button>
        </div>
      </div>
      <div className="relative order-0 flex justify-center py-10">
        <div className="rounded-full w-[150px] h-[150px] flex justify-center items-center overflow-hidden border-2 border-accent shadow-[0_0_20px_#f97316] lg:w-[300px] lg:h-[300px]">
          <div className="relative w-[290px] h-[370px]">
            {/* w-[290px] h-[370px] */}
            {/* <Image src={"/2x2.png"} alt="picture" fill /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
