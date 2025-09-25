
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
