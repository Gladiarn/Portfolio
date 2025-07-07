import { Copy, FileUser } from "lucide-react";
import Link from "next/link";
import React from "react";
import { navItemsTypes } from "../types";
export default function Navbar() {
  const NavItems: navItemsTypes[] = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "About",
      href: "#",
    },
    {
      title: "Skills",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
  ];

  return (
    <div className="w-full h-auto py-3 px-4 md:px-[50px] lg:px-[200px] flex items-center text-[#EEEEEE] justify-between">
      <div className="flex gap-3 items-center">
        <p className="sm:text-[15px] text-[13px]">bulilaniannecarl@Gmail.com</p>
        <button className="bg-[#DCC7A1] relative flex justify-center h-[34px] w-[40px] rounded-md font-bold text-[14px] text-background sm:hover:w-[60px] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group">
          <Copy className="h-[16px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:group-hover:left-[-10px] transition-all duration-250 ease-[cubic-bezier(0.76,0,0.24,1)]" />
          <span className="absolute -right-20 top-1/2 -translate-y-1/2 sm:group-hover:right-1/2 translate-x-1/2 transition-all duration-250 ease-[cubic-bezier(0.76,0,0.24,1)]">
            Copy
          </span>
        </button>

        <button className="border border-[#DCC7A1] text-[#DCC7A1] relative flex justify-center h-[34px] w-[40px] rounded-md font-bold text-[14px] sm:hover:w-[120px] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group">
          <FileUser className="h-[16px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 sm:group-hover:left-[-10px] transition-all duration-250 ease-[cubic-bezier(0.76,0,0.24,1)]" />
          <span className="absolute -right-20 top-1/2 -translate-y-1/2 sm:group-hover:right-1/2 translate-x-1/2 transition-all duration-250 ease-[cubic-bezier(0.76,0,0.24,1)] whitespace-nowrap">
            Download CV
          </span>
        </button>
      </div>

      <div className="hidden md:flex gap-5">
        {NavItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="relative inline-block overflow-hidden group font-medium text-[15px]"
          >
            <span className="inline-block pr-2 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-full">
              {item.title}
            </span>

            <span className="absolute left-0 top-0 pl-1 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] text-[#DCC7A1]">
              {item.title}
            </span>

            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#DCC7A1] scale-x-0 group-hover:scale-x-100 origin-right group-hover:origin-left transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)]"></span>
          </Link>
        ))}
      </div>
    </div>
  );
}
