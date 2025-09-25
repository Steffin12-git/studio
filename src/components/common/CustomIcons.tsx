
'use client';

import React from 'react';

export const LeetCodeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14 6V4H7v16h10V8h-3z" />
    <path d="M14 6L20 12" />
    <path d="M9 12H15" />
    <path d="M9 15H15" />
    <path d="M9 9H12" />
  </svg>
);

export const HackerRankIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM8.5 7H10v10H8.5V7zm7 0H17v10h-1.5V7zm-3.5 0h1.5v10H12V7z"
            clipRule="evenodd"
        />
    </svg>
);
