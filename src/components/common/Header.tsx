'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ isMobile = false }) => (
    <nav className={cn('flex items-center gap-2', isMobile ? 'flex-col items-start w-full' : 'flex-row')}>
      {navLinks.map((link) => (
        <Button
          key={link.name}
          variant="link"
          asChild
          className={cn(
            'text-gray-600 hover:text-magenta-600 font-semibold text-base transition-colors duration-300',
            'hover:no-underline hover:bg-magenta-100/50 rounded-md',
            isMobile && 'w-full justify-start text-lg py-4 px-4'
          )}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
        >
          <Link href={link.href}>{link.name}</Link>
        </Button>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-white/80 backdrop-blur-xl border-b' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="p-2 bg-magenta-600 rounded-full group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out">
            <Rocket className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold font-headline text-gray-800">Steffin Thomas</span>
        </Link>
        
        <div className="hidden md:flex bg-gray-100/80 border border-gray-200/90 rounded-full px-2 py-1">
          <NavLinks />
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-800 hover:bg-gray-200/80">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] p-4 pt-16 bg-white">
                <NavLinks isMobile />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
