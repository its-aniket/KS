"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import Magnetic from "./Magnetic";
import { navitems } from "../constants";
import Link from "next/link";
import RoundedButton from "./RoundedButton";



const Header: React.FC = () => {
  const header = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const button = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (button.current) {
      gsap.to(button.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          end: window.innerHeight,
          onLeave: () => {
            gsap.to(button.current, {
              scale: 1,
              duration: 0.25,
              ease: "power1.out",
            });
          },
          onEnterBack: () => {
            gsap.to(button.current, {
              scale: 0,
              duration: 0.25,
              ease: "power1.out",
            });
          },
        },
      });
    }
  }, []);

  return (
    <>
      <div
        ref={header}
        className="absolute w-full flex justify-between items-center z-10 top-0 text-black px-4 py-8 md:px-8 font-light box-border"
      >
        {/* Logo Section */}
        <div className="flex cursor-pointer group">
          <p className="m-0 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:rotate-360">
            ©
          </p>
          <div className="flex relative overflow-hidden whitespace-nowrap ml-1.5 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:pr-8">
            <p className="relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-full">
              Designed By
            </p>
            <p className="relative pl-[0.3em] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-[85px]">
              Kaustubh
            </p>
            <p className="absolute left-[170px] pl-[0.3em] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-x-[105px]">
              Shevade
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center text-black">
          {navitems.map((link, index) => (
            <Magnetic key={index}>
              <Link
                href={link.href}
                className="text-black no-underline font-light cursor-pointer"
              >
                <div className="flex flex-col relative z-[1] px-4 py-[15px] cursor-pointer group">
                  {link.title}
                  <div className="absolute w-[5px] h-[5px] top-[45px] left-1/2 bg-black rounded-full transform scale-0 -translate-x-1/2 transition-transform duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-100"></div>
                </div>
              </Link>
            </Magnetic>
          ))}
        </nav>
      </div>


      {/* Menu Button */}
<div ref={button} className="fixed top-0 right-0 z-50 scale-0">
  <RoundedButton
    onClick={() => setIsActive(!isActive)}
    className="relative m-5 h-16 w-16 rounded-full bg-[#1c1d20] cursor-pointer flex items-center justify-center"
  >
    <div className="relative h-4 w-6">
      <span
        className={`absolute left-0 block h-[1px] w-6 bg-white transition-all duration-300 ease-out
          ${isActive ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"}`}
      />
      <span
        className={`absolute left-0 top-1/2 block h-[1px] w-6 bg-white transition-all duration-300 ease-out
          ${isActive ? "opacity-0" : "opacity-100"} -translate-y-1/2`}
      />
      <span
        className={`absolute left-0 block h-[1px] w-6 bg-white transition-all duration-300 ease-out
          ${isActive ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"}`}
      />
    </div>
  </RoundedButton>
</div>
 

      {/* Mobile Navigation */}
      <AnimatePresence mode="wait">{isActive && <Navbar />}</AnimatePresence>
    </>
  );
};

export default Header;
