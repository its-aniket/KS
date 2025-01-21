'use client'
import React, { useState, useRef } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/constants'
import Header from '@/components/Header'
import Contact from '@/components/Contact'
interface Project {
  slug: string
  title: string
  description: string
  src: string
  category: string
}

interface RoundedButtonProps {
  children: React.ReactNode
  isActive: boolean
  onClick: () => void
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ children, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full transition-all duration-300 ${
        isActive
          ? 'bg-gray-900 text-white'
          : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-100'
      }`}
    >
      {children}
    </button>
  )
}

const Projects: React.FC = () => {
  const container = useRef<HTMLDivElement>(null)
  const [loadedImages, setLoadedImages] = useState(new Set());
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })

  const [category, setCategory] = useState<string>('All')

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

  const filteredProjects =
    category === 'All'
      ? projects
      : projects.filter((project) => project.category === category)

  const categories = ['All', 'Hotel', 'Institutes', 'Commercial', 'Residential']
  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => new Set([...prev, id]));
  };
  return (
    <>
      <Header/>
    <main className="w-full flex flex-col mt-[50px] md:mt-[150px] gap-[3vw] relative bg-white z-10">
      <div className="flex flex-col relative">
        {/* Category Header */}
        <div className="flex flex-col w-full px-6 md:px-[150px] py-[50px] overflow-hidden">
          <motion.span 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="block text-[calc(clamp(2.25em,7vw,6em)*0.875)] font-light text-[#1C1D20] leading-tight"
          >
            Architecture that speaks
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="block mt-[10px] text-[calc(clamp(2.25em,7vw,6em)*0.875)] font-light text-[#1C1D20] leading-tight"
          >
            beyond walls.
          </motion.span>

          <div className="flex w-full flex-wrap gap-4 mt-[60px] sm:justify-center md:justify-start ">
            {categories.map((cat, index) => (
              <RoundedButton
                key={index}
                isActive={category === cat}
                onClick={() => setCategory(cat)}
              >
                <p>{cat}</p>
              </RoundedButton>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          className="columns-1 p-[25px] sm:columns-2 md:columns-3 lg:columns-3 gap-6 [column-fill:_balance]"
          style={{ columnFill: 'balance' }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: loadedImages.has(project.id) ? 1 : 0 }}
              exit={{ opacity: 0 }}
              className="break-inside-avoid mb-6"
            >
              <Link key={index} href={`/projects/${project.slug}`} passHref>
                <div className="relative group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={500}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      quality={90}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      onLoadingComplete={() => handleImageLoad(project.id)}
                    />
                    {/* Overlay */}
                    <div className="absolute w-full inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end justify-start">
                      <div className="flex w-full items-start flex-col p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                        <h3 className="text-white text-xl font-bold text-left">{project.title}</h3>
                        <p className="text-white/80 text-sm mt-2 text-left">{project.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

       
        
      </div>
    </main>
    <Contact />
                  </>
  )
}

export default Projects