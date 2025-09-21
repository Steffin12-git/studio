// Typewriter.tsx
'use client';

import { useState, useEffect, useRef } from 'react';

type TypewriterProps = {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
};

export function Typewriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDelay = 2000,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let isMounted = true;

    const handleTyping = () => {
      if (!isMounted) return;
      
      const currentText = texts[textIndex];

      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
          timeoutRef.current = setTimeout(handleTyping, deletingSpeed);
        } else {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          timeoutRef.current = setTimeout(handleTyping, typingSpeed);
        } else {
          timeoutRef.current = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDelay);
        }
      }
    };

    timeoutRef.current = setTimeout(handleTyping, typingSpeed);

    return () => {
      isMounted = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDelay]);

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
