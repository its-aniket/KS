"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideUp } from "../animations/animation";

export default function Home() {
  return (
    <motion.main
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
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">Kaustubh Shevade</h1>
        <p className="text-xl sm:text-2xl font-light">Crafting exceptional architectural designs that blend elegance, innovation, and functionality.</p>
      </div>
    </motion.main>
  );
}
