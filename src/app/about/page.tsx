"use client";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { slideUp } from "@/animations/animation";
const page = () => {
  return (
    <div>
      <Header />
      <motion.div
        variants={slideUp}
        initial="initial"
        animate="enter"
        className="relative w-full h-[80vh] overflow-hidden shadow-2xl"
      >
        {/* Image Slider */}
        <div className="relative w-full h-full">
          <Image
            src="/images/Project_1/abil_boulvard.jpg"
            alt="background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0"
          />
        </div>

        {/* Title and Description */}
        <div className="absolute bottom-0 left-0 p-8 z-10 text-white w-full bg-gradient-to-t from-black/70 to-transparent">
          <h1 className="text-4xl sm:text-5xl font-semibold ">
            Kaustubh Shevade
          </h1>
          <span className="mb-4">Associate Principal, Architecture</span>
          <p className="text-xl sm:text-2xl font-light">
            An accomplished Architect with over 25 years of experience, bringing
            innovative and sustainable design solutions to life.
          </p>
        </div>
      </motion.div>
      <div className="flex flex-col gap-4 w-full p-[25px] ">
          <div className="flex flex-col items-center mb-12">
            
            <h1 className="text-4xl font-bold mt-2">Education</h1>
            <div className="mt-4 h-1 w-20 bg-blue-600 rounded"></div>
          </div>
        <div className="bg-gray-50">

        </div>
      </div>
      <Contact />
    </div>
  );
};

export default page;
