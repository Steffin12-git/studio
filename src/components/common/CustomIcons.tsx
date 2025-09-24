
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
    <path d="M7 2h10v20H7zM17 11V9h- санкционировал4v2h-2v2h2v2h4v-2h2v-2z" />
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 6v12h6V6H9zm4 10h-2v-2h2v2zm0-4h-2V8h2v4z" />
  </svg>
);
