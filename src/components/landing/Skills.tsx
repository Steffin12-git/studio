'use client';
import { skillsData, techStackSkills } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { AnimatedTitle } from '../common/AnimatedTitle';

const TechStackCarousel = () => {
    // Duplicate the array for a seamless loop
    const extendedTechStack = [...techStackSkills, ...techStackSkills];

    const itemWidthRem = 11;
    const totalWidth = techStackSkills.length * itemWidthRem;
    
    const duration = techStackSkills.length * 5.5;

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
         <motion.div 
            className="flex"
            variants={marqueeVariants}
            animate="animate"
        >
          {extendedTechStack.map((skill, index) => (
            <div key={index} className="flex-shrink-0 w-36 h-36 mx-4 flex items-center justify-center">
               <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-card/70 border border-white/10 shadow-lg w-full h-full text-center">
                    <skill.icon className="h-10 w-10 text-white" />
                    <p className="text-sm font-semibold text-white">{skill.name}</p>
                </div>
            </div>
          ))}
        </motion.div>
      </div>
    );
};

export default function Skills() {
    return (
      <div className="container mx-auto bg-card/50 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 shadow-xl">
        <div className="text-center">
          <AnimatedTitle text="Technical Proficiency" />
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto lg:text-xl">
            My comprehensive toolkit for turning data into insights, showcasing my proficiency across various technologies.
          </p>
        </div>
        
        <div className="mt-16 mb-12">
            <TechStackCarousel />
        </div>
  
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((category) => (
            <Card key={category.category} className="bg-card/70 border-white/10 text-white transform transition-transform duration-300 hover:scale-105 hover:border-primary shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-secondary rounded-full">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground lg:text-base">{skill}</span>
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
