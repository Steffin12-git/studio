'use client';

import { motion } from 'framer-motion';
import { BarChart, BrainCircuit, Code, Database, Share2 } from 'lucide-react';
import { useMemo, useEffect, useState } from 'react';

const icons = [
  { icon: <BarChart className="h-full w-full" /> },
  { icon: <BrainCircuit className="h-full w-full" /> },
  { icon: <Code className="h-full w-full" /> },
  { icon: <Database className="h-full w-full" /> },
  { icon: <Share2 className="h-full w-full" /> },
];

const FloatingShapes = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const shapes = useMemo(() => {
    if (typeof window === 'undefined') return [];
    return Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      icon: icons[i % icons.length].icon,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 40 + 20, // 20px to 60px
      duration: Math.random() * 20 + 15, // 15s to 35s
      delay: Math.random() * 5,
      direction: Math.random() > 0.5 ? 1 : -1,
    }));
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {shapes.map(shape => (
        <motion.div
          key={shape.id}
          className="absolute text-white/10"
          initial={{
            x: shape.x,
            y: shape.y,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              delay: shape.delay,
              duration: 1,
              ease: 'easeOut',
            },
          }}
          transition={{
            x: {
              duration: shape.duration,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            },
            y: {
              duration: shape.duration * (Math.random() * 0.5 + 0.8), // slightly different duration for y
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            },
          }}
          style={{
            width: shape.size,
            height: shape.size,
            left: -shape.size / 2,
            top: -shape.size / 2,
          }}
        >
          <motion.div
            animate={{
              x: [0, shape.direction * (window.innerWidth / 4), 0],
              y: [0, shape.direction * (window.innerHeight / 4), 0],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          >
            {shape.icon}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export { FloatingShapes };
