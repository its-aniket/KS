'use client';

import { useInView, motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Rounded from './RoundedButton';
import RoundedButton from './RoundedButton';
import Link from 'next/link';

interface DescriptionProps {}

const Description: React.FC<DescriptionProps> = () => {
  const phrase = "Accomplished architect with a proven track record of delivering exceptional architectural designs that blend innovation, functionality, and aesthetics.";
  const description = useRef<HTMLDivElement>(null);
  const isInView = useInView(description);
  const container = useRef<HTMLDivElement>(null);

  // Improved scroll animation configuration
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  });

  // Refined animation values for smoother transitions
  const buttonX = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0]);
  const buttonScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);

  // Animation variants for text
  const slideUp = {
    closed: {
      y: 100,
      opacity: 0
    },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1]
      }
    })
  };

  return (
    <div 
      ref={description}
      className="px-6 md:px-20 lg:px-52 mt-20 lg:mt-28 flex justify-center"
    >
      <motion.div ref={container} className="max-w-[1400px] flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
        {/* Main Text */}
        <div className="flex-1">
          <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-6">
            {phrase.split(" ").map((word, index) => (
              <span 
                key={index} 
                className="relative inline-flex overflow-hidden mr-[3px]"
              >
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  className="inline-block ml-2 mb-1"
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </p>
          
          <motion.p 
            variants={slideUp}
            animate={isInView ? "open" : "closed"}
            className="text-base md:text-lg font-light w-full lg:w-[90%]"
          >
            residential, commercial, and urban planning projects, showcasing versatility and commitment to pushing the boundaries of architectural creativity.
          </motion.p>
          <div className='relative w-full h-[1px] mt-28 md:mt-14 bg-[rgb(201,201,201)]'></div>
        </div>

        {/* Improved Button Animation */}
        <motion.div 
          style={{
            x: buttonX,
            scale: buttonScale,
            opacity: buttonOpacity
          }}
          className="absolute left-[calc(100%-180px)] top-[78%] lg:absolute lg:top-[65%] lg:left-[calc(100%-200px)]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.5
          }}
        >
          <Link href={`/about`} passHref>
          <RoundedButton 
            className="w-[12rem] h-[12rem] lg:w-[180px] lg:h-[180px] bg-[#1c1d20] text-white rounded-full flex items-center justify-center cursor-pointer"
            >
            <motion.p 
              className="text-base font-light relative z-[1]"
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 10
              }}
              >
              About me
            </motion.p>
          </RoundedButton>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Description;