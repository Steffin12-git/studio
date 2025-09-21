// Typewriter.tsx
'use client';

import { useState, useEffect, useRef } from 'react';

type TypewriterProps = {
  text: string;
  speed?: number;
  loopDelay?: number;
};

export function Typewriter({ text, speed = 50, loopDelay = 1500 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const index = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let isMounted = true;

    const type = () => {
      if (!isMounted) return;

      if (index.current < text.length) {
        setDisplayedText(prev => prev + text.charAt(index.current));
        index.current++;
        timeoutRef.current = setTimeout(type, speed);
      } else {
        timeoutRef.current = setTimeout(() => {
          index.current = 0;
          setDisplayedText('');
          type();
        }, loopDelay);
      }
    };

    // Start typing after a tiny delay to avoid first-character clipping
    timeoutRef.current = setTimeout(type, 50);

    return () => {
      isMounted = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, speed, loopDelay]);

  return (
    <span className="inline-block">
      {displayedText || '\u00A0'}
      <span className="animate-blink text-primary">|</span>
      <style jsx>{`
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}
