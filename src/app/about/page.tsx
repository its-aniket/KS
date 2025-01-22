"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Contact from "@/components/Contact";
import Link from "next/link";
import { NotableProject } from "@/constants";
import Header from "@/components/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutPage = () => {
  const container = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);
  
  const [loadedImages, setLoadedImages] = useState(new Set());
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  useEffect(() => {
    // Create an array of sections to animate
    const sections = [
      { ref: introRef, delay: 0 },
      { ref: educationRef, delay: 0.2 },
      { ref: expertiseRef, delay: 0.2 },
      { ref: projectsRef, delay: 0.2 },
      { ref: philosophyRef, delay: 0.2 },
    ];

    // Create animations for each section
    const animations = sections.map(({ ref, delay }) => {
      if (!ref.current) return;

      return gsap.fromTo(
        ref.current,
        { 
          opacity: 0,
          y: 50 
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
            markers: false, // Set to true for debugging
          },
          delay
        }
      );
    });

    // Cleanup function
    return () => {
      animations.forEach(anim => {
        if (anim) {
          anim.scrollTrigger?.kill();
          anim.kill();
        }
      });
    };
  }, []);

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => new Set([...prev, id]));
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const heroVariants = {
    initial: { scale: 1.2, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeOut" 
      }
    }
  };

  const cardHoverVariants = {
    rest: { scale: 1, boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" },
    hover: { 
      scale: 1.03, 
      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  return (
    <motion.div
      ref={container}
      className="relative w-full bg-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Header />

      {/* Hero Section */}
      <motion.main
        variants={heroVariants}
        initial="initial"
        animate="animate"
        className="relative w-full h-[90vh] overflow-hidden"
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/Project_1/abil_boulvard.jpg"
            alt="background"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 z-0 filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
        </div>
        
        <motion.div 
          className="absolute bottom-0 left-0 p-4 md:p-12 z-10 text-white w-full"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-7xl font-semibold mb-4 tracking-tight">
            Kaustubh Shevade
          </h1>
          <p className="sm:text-3xl font-light tracking-wide text-gray-200">
            Associate Principal, Architecture
          </p>
        </motion.div>
      </motion.main>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-24 md:px-8 lg:px-16">
        {/* Introduction */}
        <div ref={introRef} className="mb-24 opacity-0">
          <div className="space-y-4">
            <h2 className="text-6xl sm:text-7xl font-light text-[#1C1D20] leading-tight">
              25 years of
              <span className="block text-blue-600">Architectural Excellence.</span>
            </h2>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-700 max-w-4xl mt-8">
              An accomplished Architect with over 25 years of experience, including
              17 years as an integral part of SSA. My philosophy is simple yet
              profound: "There is Art in design, but design is not Art."
            </p>
          </div>
        </div>

        {/* Education & Certifications */}
        <div ref={educationRef} className="mb-32 opacity-0">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold mt-2">Education & Affiliations</h2>
            <div className="mt-4 h-1 w-20 bg-blue-600 rounded"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Academic Background",
                items: [
                  "Graduate of Shivaji University, S.P.S.M.B. H's College of Architecture, Kolhapur",
                  "Certified courses from Indian Institute of Technology, Madras",
                  "Stanford Graduate School of Business certification"
                ]
              },
              {
                title: "Professional Memberships",
                items: [
                  "Council of Architecture",
                  "Indian Institute of Architects",
                  "Indian Green Building Council"
                ]
              }
            ].map((section, idx) => (
              <motion.div
                key={idx}
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <h4 className="text-2xl font-light mb-6 text-blue-600">{section.title}</h4>
                <ul className="space-y-4 font-light">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div ref={expertiseRef} className="mb-32 opacity-0">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold mt-2">Areas of Expertise</h2>
            <div className="mt-4 h-1 w-20 bg-blue-600 rounded"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Design Phase",
                items: ["Feasibility Studies", "Master Planning", "Facade Design", "Code Compliance"]
              },
              {
                title: "Development",
                items: ["Detailed Schemes", "Stakeholder Coordination", "Material Selection", "Sustainable Design"]
              },
              {
                title: "Construction",
                items: ["Standards Compliance", "Construction Documentation", "Project Management", "Timeline Adherence"]
              }
            ].map((section, idx) => (
              <motion.div
                key={idx}
                variants={cardHoverVariants}
                initial="rest"
                whileHover="hover"
                className="p-8 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <h4 className="text-2xl font-light mb-6 text-blue-600">{section.title}</h4>
                <ul className="space-y-3 font-light">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Notable Projects */}
        <div ref={projectsRef} className="mb-32 opacity-0">
          <div className="flex flex-col items-center mb-16">
            <span className="text-blue-600 uppercase tracking-widest text-sm font-medium">
              Tip of the iceberg
            </span>
            <h2 className="text-4xl font-bold mt-2">Notable Work</h2>
            <div className="mt-4 h-1 w-20 bg-blue-600 rounded"></div>
          </div>
          <div
            className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 [column-fill:_balance]"
            style={{ columnFill: 'balance' }}
          >
            {NotableProject.map((project, index) => (
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

        {/* Personal Philosophy */}
        <div ref={philosophyRef} className="text-center max-w-3xl mx-auto mt-16 mb-32 opacity-0">
          <p className="text-3xl md:text-4xl font-light italic mb-8 text-blue-600">
            "There is Art in design, but design is not Art."
          </p>
          <p className="text-xl font-light leading-relaxed text-gray-700">
            My passion for travel and keen observation of people using built
            environments continues to fuel my creative process, driving
            innovation in every project I undertake.
          </p>
        </div>
      </div>
      <Contact />
    </motion.div>
  );
};

export default AboutPage;