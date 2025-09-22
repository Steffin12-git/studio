'use client';

import { useState, useEffect } from 'react';

export function BackgroundBlobs() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getTransform = (factor: number) => {
    if (typeof window === 'undefined') return {};
    const x = (mousePosition.x / window.innerWidth - 0.5) * factor;
    const y = (mousePosition.y / window.innerHeight - 0.5) * factor;
    return { transform: `translate(${x}px, ${y}px)` };
  };

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="relative w-full h-full">
        <div
          className="absolute top-[-20%] left-[10%] h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl animate-pulse transition-transform duration-500 ease-out"
          style={getTransform(100)}
        />
        <div
          className="absolute top-[30%] right-[5%] h-[400px] w-[600px] rounded-full bg-primary/10 blur-3xl animate-pulse transition-transform duration-500 ease-out"
          style={getTransform(-80)}
        />
        <div
          className="absolute bottom-[5%] left-[20%] h-[300px] w-[300px] rounded-full bg-teal-500/20 blur-3xl animate-pulse transition-transform duration-500 ease-out"
          style={getTransform(50)}
        />
      </div>
    </div>
  );
}