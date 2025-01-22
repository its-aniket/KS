"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./Magnetic";
import RoundedButton from "./RoundedButton";

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const container = useRef<HTMLDivElement>(null);

  // Improved scroll animation configuration
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  // Refined animation values for smoother transitions
  const buttonX = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0]);
  const buttonScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  // Curve animation values - adjusted for containment
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);
  const curveY = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  return (
    <motion.div
      ref={container}
      className="relative w-full bg-[#141516] overflow-hidden"
    >
      {/* Curved Transition - Contained */}
      <motion.div
        style={{ y: curveY }}
        className="sticky top-0 left-0 w-full h-[200px] bg-transparent z-10"
      >
        <div className="absolute top-0 left-[-10%] w-[120%] h-[200px]">
          <div className="w-full h-full bg-white rounded-b-[50%] shadow-lg transform-gpu" />
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="relative w-full"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="w-full max-w-[1800px] pt-20 md:px-[200px]">
          <div className="relative border-b border-white/20 pb-[100px] mx-4 sm:mx-8 md:mx-[50px]">
            <motion.span
              className="flex items-center"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-[80px] h-[80px] z-1 rounded-full overflow-hidden md:w-[100px] md:h-[100px]">
                <Image
                  fill
                  alt="profile image"
                  src="/images/contactimage.png"
                  style={{ objectFit: "cover" }}
                  priority
                  className="hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h2 className="text-[12vw] font-light ml-[0.3em] my-0 text-white md:text-[5vw]">
                Let's work
              </h2>
            </motion.span>
            <h2 className="text-[12vw] font-light my-0 text-white md:text-[5vw]">
              together
            </h2>

            <motion.div
              style={{
                x: buttonX,
                scale: buttonScale,
                opacity: buttonOpacity,
              }}
              className="absolute left-[calc(100%-170px)] top-[calc(100%-70px)] md:right-20 lg:right-[calc(25%-75px)] md:top-[calc(100%-90px)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 0.5,
              }}
            >
              <RoundedButton
                className="w-[150px] h-[150px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] 
               bg-[#455ce9] text-white rounded-full absolute flex items-center justify-center 
               cursor-pointer transition-all duration-300 hover:bg-[#3a4fc7] group"
              >
                <motion.p
                  className="m-0 p-0 text-sm sm:text-base md:text-lg whitespace-nowrap font-light z-[2] relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                >
                  Get in touch
                </motion.p>
              </RoundedButton>
            </motion.div>

            <motion.svg
              style={{ rotate, scale: 2 }}
              width="9"
              height="9"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[30%] left-[100%]"
              whileHover={{ scale: 2.5 }}
            >
              <path
                d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                fill="white"
              />
            </motion.svg>
          </div>

          <motion.div
            className="flex flex-col md:flex-row gap-6 mt-[100px] mx-4 sm:mx-8 md:mx-[50px]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Magnetic>
              <RoundedButton className="border border-white/20 hover:border-white/40 transition-colors duration-300 px-6 py-3">
                <p className="text-white text-sm md:text-base">
                  info@kaustubhshevade.com
                </p>
              </RoundedButton>
            </Magnetic>
            <Magnetic>
              <RoundedButton className="border border-white/20 hover:border-white/40 transition-colors duration-300 px-6 py-3">
                <p className="text-white text-sm md:text-base">
                  +91 9822028438
                </p>
              </RoundedButton>
            </Magnetic>
          </motion.div>
        </div>
        <div className="flex justify-end mt-[80px] p-5 md:mt-[40px]">
          <Magnetic>
            <RoundedButton
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/kaustubh-shevade-96603375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                  "_blank"
                )
              }
              className="border border-white/20 hover:border-white/40 transition-colors duration-300 px-6 py-3 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <p className="text-white text-sm md:text-base">LinkedIn</p>
            </RoundedButton>
          </Magnetic>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
