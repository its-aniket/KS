'use client';

import { FC, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CurvePathProps {}

const Curve: FC<CurvePathProps> = () => {
  const [windowHeight, setWindowHeight] = useState<number>(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const curve = {
    initial: {
      d: `M100 0 L100 ${windowHeight} Q-100 ${windowHeight/2} 100 0`
    },
    enter: {
      d: `M100 0 L100 ${windowHeight} Q100 ${windowHeight/2} 100 0`,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: `M100 0 L100 ${windowHeight} Q-100 ${windowHeight/2} 100 0`,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  };

  return (
    <svg className="absolute top-0 -left-[99px] w-[100px] h-full fill-[rgb(41,41,41)] stroke-none">
      <motion.path 
        variants={curve} 
        initial="initial" 
        animate="enter" 
        exit="exit"
      />
    </svg>
  );
};

export default Curve;