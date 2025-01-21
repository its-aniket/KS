'use client';

import React, { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import Magnetic from './Magnetic';

interface RoundedButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  backgroundColor?: string;
  isActive?: boolean;
  className?: string;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  children,
  backgroundColor = "#455CE9",
  isActive = false,
  className = "",
  ...attributes
}) => {
  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    
    if (circle.current) {
      timeline.current
        .to(circle.current, {
          top: "-25%",
          width: "150%",
          duration: 0.4,
          ease: "power3.in"
        }, "enter")
        .to(circle.current, {
          top: "-150%",
          width: "125%",
          duration: 0.25
        }, "exit");
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeline.current?.kill();
    };
  }, []);

  const manageMouseEnter = (): void => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current?.tweenFromTo('enter', 'exit');
  };

  const manageMouseLeave = (): void => {
    timeoutId = setTimeout(() => {
      timeline.current?.reverse();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={`
          group
          outline-none 
          shadow-none 
          rounded-[3em] 
          cursor-pointer 
          relative 
          flex 
          items-center 
          justify-center  
          overflow-hidden 
          select-none
          transition-colors
          duration-300
          ${isActive ? 'bg-black' : 'bg-blue'}
          ${className}
        `}
        style={{
          WebkitTapHighlightColor: 'transparent',
        }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        <span 
          className={`
            relative 
            z-10 
            transition-colors 
            duration-300
            ${isActive ? 'text-white' : 'text-white group-hover:text-white'}
          `}
        >
          {children}
        </span>
        
        <div
          ref={circle}
          className="absolute w-full h-[150%] rounded-full top-full -z-0 transform-gpu"
          style={{
            backgroundColor: isActive ? "black" : backgroundColor,
          }}
        ></div>
      </div>
    </Magnetic>
  );
};

export default RoundedButton;