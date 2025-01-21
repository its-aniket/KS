'use client'
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

interface SliderImage {
  color: string;
  src: string;
}

const slider1: SliderImage[] = [
  { color: "#e3e5e7", src: "/images/img1.jpg" },
  { color: "#d6d7dc", src: "/images/img2.jpg"  },
  { color: "#e3e3e3", src: "/images/img3.jpg"  },
  { color: "#21242b", src: "/images/img4.jpg"  }
];

const slider2: SliderImage[] = [
  { color: "#d4e3ec", src: "/images/img7.jpg"  },
  { color: "#e5e0e1", src: "/images/img10.jpg"  },
  { color: "#d7d4cf", src: "/images/img11.jpg"  },
  { color: "#e1dad6", src: "/images/img12.jpg"  }
];

const SlidingImages = () => {
  const container = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className="flex flex-col gap-12 overflow-hidden relative mt-20 bg-transparent z-10 pt-16">
      <motion.div 
        style={{ x: x1 }} 
        className="flex relative justify-center items-center gap-8 w-[120vw] -left-[10vw] overflow-hidden "
      >
        {slider1.map((project, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center"
            
          >
            <div className="relative w-[270px] h-[150px] lg:w-[60vh] lg:h-[30vh]">
              <Image
                src={project.src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div 
        style={{ x: x2 }} 
        className="flex relative justify-center items-center gap-8 w-[120vw] -left-[10vw] overflow-hidden "
      >
        {slider2.map((project, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center"
            
          >
            <div className="relative w-[270px] h-[150px] lg:w-[60vh] lg:h-[30vh]">
              <Image
                src={project.src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </motion.div>

      <div className="relative mt-24">
        <motion.div 
          style={{ height }} 
          className="absolute w-[120%] -left-[10%] rounded-b-[50%] bg-white z-10 shadow-2xl"
        />
      </div>
    </div>
  );
};

export default SlidingImages;