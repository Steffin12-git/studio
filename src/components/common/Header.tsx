'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ isMobile = false }) => (
    <nav className={cn('flex items-center gap-1', isMobile ? 'flex-col items-start' : 'flex-row')}>
      {navLinks.map((link) => (
        <Button
          key={link.name}
          variant="link"
          asChild
          className={cn(
            'text-muted-foreground hover:text-foreground transition-colors',
            isMobile && 'w-full justify-start text-lg py-4'
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
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="#home" className="flex items-center gap-2">
          <Code2 className="h-8 w-8 text-accent" />
          <span className="text-xl font-bold font-headline">Steffin Thomas</span>
        </Link>
        
        <div className="hidden md:flex">
          <NavLinks />
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] p-4 pt-12">
                <NavLinks isMobile />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
