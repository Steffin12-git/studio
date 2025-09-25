import { socialLinks } from '@/lib/data';
import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-black/20 backdrop-blur-lg border-t border-white/10 py-6">
      <div className="container mx-auto text-center text-gray-400">
        <div className="flex justify-center gap-4 mb-4">
            {socialLinks.map(link => (
                <Button key={link.name} variant="ghost" size="icon" asChild className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                        {typeof link.icon !== 'function' && link.icon.type === 'img' ? (
                          <Image src={link.icon.src} alt={`${link.name} icon`} width={20} height={20} className="h-5 w-5" />
                        ) : (
                          <link.icon className="h-5 w-5" />
                        )}
                    </Link>
                </Button>
            ))}
        </div>
        <p>&copy; {currentYear} Steffin Thomas. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
