'use client';

import { useState, useEffect } from 'react';

type TypewriterProps = {
  text: string;
  speed?: number;
  loopDelay?: number;
};

export function Typewriter({ text, speed = 50, loopDelay = 1500 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    let isMounted = true;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      if (!isMounted) return;

      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
        timeoutId = setTimeout(type, speed);
      } else {
        // Pause at the end, then reset
        timeoutId = setTimeout(() => {
          i = 0;
          setDisplayedText('');
          type();
        }, loopDelay);
      }
    };

    type();

    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, [text, speed, loopDelay]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}
