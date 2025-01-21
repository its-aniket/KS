import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animations/animation';
import Navlinks from './Navlinks';
import Curve from './Curve';
import { navitems } from '../constants/index';

const Index: React.FC = () => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed top-0 right-0 z-30 w-[60%] h-full md:w-auto bg-gray-900 text-white flex justify-center items-center"
    >
      <div className="box-border flex h-full flex-col justify-between p-24 md:p-24">
        <div
          className="flex flex-col gap-3 md:gap-6 mt-12 md:mt-20"
          onMouseLeave={() => setSelectedIndicator(pathname)}
        >
          <div className="text-sm uppercase border-b border-gray-600 pb-2 text-gray-400 mb-8">
            <p>Navigation</p>
          </div>
          {navitems.map((data, index) => (
            <Navlinks
              key={index}
              data={{ ...data, index }}
              isActive={selectedIndicator === data.href}
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
        <Curve />
      </div>
      
    </motion.div>
  );
};

export default Index;
