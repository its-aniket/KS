"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const heroVariants = {
    initial: { scale: 1.2, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.main
      variants={heroVariants}
      initial="initial"
      animate="animate"
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
        <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
          Kaustubh Shevade
        </h1>
        <p className="text-xl sm:text-2xl font-light">
          Crafting exceptional architectural designs that blend elegance,
          innovation, and functionality.
        </p>
      </div>
    </motion.main>
  );
}
