'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/constants';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
const ProjectPage = () => {
  const params = useParams();
  const { slug } = params;
  const project = projects.find(proj => proj.slug === slug);
  // Handle invalid slugs
  if (!project) {
    return <div>Project not found!</div>;
  }
  return (
    <div className="bg-white">
        <Header />
      {/* Hero */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[80vh] "
      >
        <img
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-black/30 " />
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent"
        >
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl text-white font-bold">{project?.title}</h1>
            <p className="text-lg text-white/90 mt-4 max-w-2xl">{project?.shortDescription}</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Quick Info */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="container mx-auto py-8 px-8"
      >
        <div className="flex flex-wrap gap-8 text-sm">
          <div>
            <span className="text-gray-500">Client</span>
            <p className="font-medium mt-1">{project?.client}</p>
          </div>
          <div>
            <span className="text-gray-500">Location</span>
            <p className="font-medium mt-1">{project?.location}</p>
          </div>
          <div>
            <span className="text-gray-500">Year</span>
            <p className="font-medium mt-1">{project?.year}</p>
          </div>
          <div>
            <span className="text-gray-500">Area</span>
            <p className="font-medium mt-1">{project?.area}</p>
          </div>
          <div>
            <span className="text-gray-500">Status</span>
            <p className="font-medium mt-1">{project?.status}</p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Left Column - Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-12"
          >
            <div>
              <h2 className="text-2xl font-medium mb-6">About</h2>
              <p className="text-gray-600 leading-relaxed">{project?.description}</p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium mb-4">The Challenge</h3>
                <p className="text-gray-600">{project?.challenge}</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Our Solution</h3>
                <p className="text-gray-600">{project?.solution}</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Project Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                {project?.services?.map((service, index) => (
                  <li key={index} className="text-gray-600">{service}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Project Team</h3>
              <ul className="space-y-2">
                {project?.team?.map((member, index) => (
                  <li key={index} className="text-gray-600">{member}</li>
                ))}
              </ul>
            </div>

            {project?.awards && (
              <div>
                <h3 className="text-lg font-medium mb-4">Awards</h3>
                <ul className="space-y-2">
                  {project.awards.map((award, index) => (
                    <li key={index} className="text-gray-600">{award}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Gallery */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-8 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <h2 className="text-2xl font-medium mb-8">Project Gallery</h2>
          {project?.gallery?.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square overflow-hidden"
            >
              <img
                src={image}
                alt={`Project view ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectPage;