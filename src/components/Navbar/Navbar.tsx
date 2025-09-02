import { Copy, FileUser, Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navItemsTypes } from "../types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const NavItems: navItemsTypes[] = [
    {
      title: "Home",
      href: "#Home",
    },
    {
      title: "Experience",
      href: "#Experience",
    },

    {
      title: "Projects",
      href: "#Projects",
    },
    {
      title: "Skills",
      href: "#Skills",
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

  const [activeSection, setActiveSection] = useState<string>("Home");
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // section must be 60% visible
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background/10 children-scroll w-full h-auto py-3 flex items-center text-foreground justify-between px-4 md:px-[50px] xl:px-[200px] overflow-x-auto backdrop-blur-sm fixed z-50">
      <div className="flex gap-3 items-center">
        <i className="sm:text-[15px] text-[13px]">
          bulilaniannecarl@<b className="text-accent">Gmail</b>.com
        </i>
        <button
          onClick={copyClicked}
          className="relative flex justify-center h-[34px] w-[40px] rounded-md font-bold text-[14px] text-foreground border border-foreground sm:hover:w-[60px] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group hover:border-accent "
        >
          <Copy className="group-hover:text-accent h-[16px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:group-hover:left-[-10px] transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]" />
          <span className="group-hover:text-accent absolute -right-20 top-1/2 -translate-y-1/2 sm:group-hover:right-1/2 translate-x-1/2 transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]">
            {copyText}
          </span>
        </button>

        <a
          download={true}
          href="/file/CV.pdf"
          className="border border-foreground text-foregorund relative flex justify-center h-[34px] w-[40px] rounded-md font-bold text-[14px] sm:hover:w-[120px] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group hover:border-accent"
        >
          <FileUser className="group-hover:text-accent h-[16px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:group-hover:left-[-10px] transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]" />
          <span className="group-hover:text-accent absolute -right-20 top-1/2 -translate-y-1/2 sm:group-hover:right-1/2 translate-x-1/2 transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] whitespace-nowrap">
            Download CV
          </span>
        </a>
      </div>

      <div className="hidden md:flex gap-5 text-foreground">
        {NavItems.map((item, index) => {
          const isActive = activeSection === item.href.replace("#", "");
          return (
            <Link
              key={index}
              href={item.href}
              className={`relative inline-block overflow-hidden group font-medium text-[15px]`}
            >
              {/* Default text */}
              <span
                className={`inline-block pr-2 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]
          ${isActive ? "-translate-x-full" : "group-hover:-translate-x-full"}`}
              >
                {item.title}
              </span>

              {/* Highlighted text (accent color) */}
              <span
                className={`absolute left-0 top-0 pl-1 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] text-accent
          ${
            isActive
              ? "translate-x-0"
              : "translate-x-full group-hover:translate-x-0"
          }`}
              >
                {item.title}
              </span>

              {/* Underline */}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]
          ${
            isActive
              ? "scale-x-100 origin-left"
              : "scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left"
          }`}
              />
            </Link>
          );
        })}
      </div>

      <Sheet>
        <SheetTrigger>
          <div className="flex md:hidden ml-3">
            <Menu />
          </div>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="w-[250px] bg-background/50 backdrop-blur-md"
        >
          <SheetHeader>
            <SheetTitle className="text-[20px] text-accent font-bold flex flex-start">
              Navigation
            </SheetTitle>
            <SheetDescription className="sr-only">
              Sidebar navigation links
            </SheetDescription>
          </SheetHeader>

          <ul className="mt-4 space-y-2 text-foreground">
            {NavItems.map((item, i) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
              <li key={i}>
                <Link href={item.href} className={`hover:text-accent ${ isActive ? 'text-accent' : 'text-foreground'} transition-colors duration-200 ease-in-out`}>
                  {item.title}
                </Link>
              </li>
            )})}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}
