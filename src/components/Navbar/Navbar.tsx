import { Copy, FileUser, Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { navItemsTypes } from "../types";
export default function Navbar() {
  const NavItems: navItemsTypes[] = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "Experience",
      href: "#Experience",
    },
    {
      title: "Skills",
      href: "#Skills",
    },
    {
      title: "Contact",
      href: "#Contact",
    },
  ];

  const [copyText, setCopyText] = useState<string>("Copy");
  const copyClicked = async () => {
    try {
      await navigator.clipboard.writeText("bulilaniannecarl@gmail.com");
      setCopyText("Copied");
      setTimeout(() => {
        setCopyText("Copy");
      }, 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };
  return (
    <div className="w-full h-auto py-3 flex items-center text-foreground justify-between px-4 md:px-[50px] xl:px-[200px]">
      <div className="flex gap-3 items-center">
        <p className="sm:text-[15px] text-[13px]">
          bulilaniannecarl@<b className="text-accent">Gmail</b>.com
        </p>
        <button
          onClick={copyClicked}
          className="relative flex justify-center h-[34px] w-[40px] rounded-md font-bold text-[14px] text-foreground border border-foreground sm:hover:w-[60px] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group hover:border-accent"
        >
          <Copy className="group-hover:text-accent h-[16px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:group-hover:left-[-10px] transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]" />
          <span className="group-hover:text-accent absolute -right-20 top-1/2 -translate-y-1/2 sm:group-hover:right-1/2 translate-x-1/2 transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]">
            {copyText}
          </span>
        </button>

        <a download={true} href="/file/CV.pdf" className="border border-foreground text-foregorund relative flex justify-center h-[34px] w-[40px] rounded-md font-bold text-[14px] sm:hover:w-[120px] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group hover:border-accent">
          <FileUser className="group-hover:text-accent h-[16px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:group-hover:left-[-10px] transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]" />
          <span className="group-hover:text-accent absolute -right-20 top-1/2 -translate-y-1/2 sm:group-hover:right-1/2 translate-x-1/2 transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] whitespace-nowrap">
            Download CV
          </span>
        </a>
      </div>

      <div className="hidden md:flex gap-5 text-foreground">
        {NavItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="relative inline-block overflow-hidden group font-medium text-[15px]"
          >
            <span className="inline-block pr-2 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-full">
              {item.title}
            </span>

            <span className="absolute left-0 top-0 pl-1 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] text-accent">
              {item.title}
            </span>

            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]"></span>
          </Link>
        ))}
      </div>

      <div className="flex md:hidden">
        <Menu />
      </div>
    </div>
  );
}
