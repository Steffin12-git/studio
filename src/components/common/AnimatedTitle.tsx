'use client';

import { motion } from 'framer-motion';

type AnimatedTitleProps = {
  text: string;
  className?: string;
};

export function AnimatedTitle({ text, className = '' }: AnimatedTitleProps) {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h2
      className={`text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-headline text-center ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block mr-[0.25em]" // space between words
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
}
