
'use client';

import React from 'react';

// This file is no longer needed for LeetCode or HackerRank as we are using image URLs.
// You can remove the unused icons or the entire file if no other custom icons are needed.

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
        viewBox="0 0 256 256"
        fill="currentColor"
        {...props}
    >
        <circle cx="128" cy="128" r="120" fill="#2D3748" />
        <path
            d="M89 71h16v114H89V71zm39 0h16v114h-16V71zm38 0h16v114h-16V71z"
            fill="#FFFFFF"
        />
        <path
            d="M128 28c-55.2 0-100 44.8-100 100s44.8 100 100 100 100-44.8 100-100S183.2 28 128 28zm0 184c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z"
            fill="#4A5568"
        />
    </svg>
);

export const BigQueryIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.55 12.18h-2.1l-1.95-2.6v2.6h-1.5V9.82h1.5v2.6l1.95-2.6h2.1l-2.6 3.48 2.6 2.88zM8.5 14v-4.18h2.1v4.18H8.5z" />
    </svg>
  );
  
  export const SSMSIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M4 2h16c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm2 14h8v-2H6v2zm0-4h12V6H6v6z" />
    </svg>
  );
