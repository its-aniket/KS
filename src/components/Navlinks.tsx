import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../animations/animation';

interface IndexProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}

const Navlinks: React.FC<IndexProps> = ({ data, isActive=true, setSelectedIndicator }) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
        className="absolute left-[-30px] w-2.5 h-2.5 bg-white rounded-full"
      ></motion.div>
      <Link href={href} className="text-base text-white hover:text-blue-500">
        {title}
      </Link>
    </motion.div>
  );
};

export default Navlinks;
