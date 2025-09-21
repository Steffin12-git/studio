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
    <nav className={cn('flex items-center gap-2', isMobile ? 'flex-col items-start' : 'flex-row')}>
      {navLinks.map((link) => (
        <Button
          key={link.name}
          variant="link"
          asChild
          className={cn(
            'text-muted-foreground hover:text-foreground font-semibold text-base transition-colors duration-300',
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
        scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary rounded-full group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out">
            <Rocket className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-2xl font-bold font-headline">MyPortfolio</span>
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
            <SheetContent side="right" className="w-[80vw] p-4 pt-16 bg-background">
                <NavLinks isMobile />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
