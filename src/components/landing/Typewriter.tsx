'use client';

import { useState, useEffect } from 'react';

type TypewriterProps = {
  text: string;
  speed?: number;
};

export function Typewriter({ text, speed = 50 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let ticker: NodeJS.Timeout;

    const handleTyping = () => {
      setDisplayedText(text.substring(0, displayedText.length + 1));

      if (displayedText === text) {
        // Pause at the end
        setTimeout(() => setIsDeleting(false), 20000); // long pause
      }
    };
    
    // Simple one-time type effect
    if (displayedText.length < text.length) {
      ticker = setTimeout(handleTyping, speed);
    }

    return () => clearTimeout(ticker);
  }, [displayedText, isDeleting, text, speed]);

  return (
    <span>
      {displayedText}
      <span className="animate-ping">|</span>
    </span>
  );
}
