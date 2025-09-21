import { socialLinks } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-black/50 border-t border-gray-800 py-6">
      <div className="container mx-auto text-center text-gray-400">
        <div className="flex justify-center gap-4 mb-4">
            {socialLinks.map(link => (
                <Button key={link.name} variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white hover:bg-white/10">
                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                        <link.icon className="h-5 w-5" />
                    </Link>
                </Button>
            ))}
        </div>
        <p>&copy; {currentYear} Steffin Thomas. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
