'use client';
import { skillsData, techStackSkills } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { motion } from 'framer-motion';

const TechStackCarousel = () => {
    // Duplicate the array for a seamless loop
    const extendedTechStack = [...techStackSkills, ...techStackSkills];

    // Each item is w-36 (9rem) with mx-4 (1rem on each side), so 11rem total per item.
    const itemWidthRem = 11;
    const totalWidth = techStackSkills.length * itemWidthRem;
    
    // Adjust speed based on number of items. ~3.5s per item.
    const duration = techStackSkills.length * 3.5;

    const marqueeVariants = {
        animate: {
          x: [0, `-${totalWidth}rem`],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: duration,
              ease: 'linear',
            },
          },
        },
      };
  
    return (
      <div className="w-full overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900/40 via-gray-900/40 to-transparent z-10 pointer-events-none" />
         <motion.div 
            className="flex"
            variants={marqueeVariants}
            animate="animate"
        >
          {extendedTechStack.map((skill, index) => (
            <div key={index} className="flex-shrink-0 w-36 h-36 mx-4 flex items-center justify-center">
               <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-black/30 border border-white/10 shadow-lg w-full h-full text-center">
                    <skill.icon className="h-10 w-10 text-white" />
                    <p className="text-sm font-semibold text-white">{skill.name}</p>
                </div>
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900/40 via-gray-900/40 to-transparent z-10 pointer-events-none" />
      </div>
    );
};

export default function Skills() {
    return (
      <div className="container mx-auto bg-gray-900/40 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-headline">
            Technical Skills
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto lg:text-xl">
            A collection of my technical and professional abilities, honed through project work and continuous learning.
          </p>
        </div>
        
        <div className="mt-16 mb-12">
            <TechStackCarousel />
        </div>
  
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category) => (
            <Card key={category.category} className="bg-black/30 border-white/10 text-white transform transition-transform duration-300 hover:scale-105 hover:border-accent shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gray-800/70 rounded-full">
                    <category.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-gray-300 lg:text-base">
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  
