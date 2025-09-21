import { socialLinks } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-white border-t py-6">
      <div className="container mx-auto text-center text-gray-500">
        <div className="flex justify-center gap-4 mb-4">
            {socialLinks.map(link => (
                <Button key={link.name} variant="ghost" size="icon" asChild className="text-gray-500 hover:text-gray-800 hover:bg-gray-100">
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
