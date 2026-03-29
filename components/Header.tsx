'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(143,245,255,0.08)] border-b border-outline-variant/10">
      <nav className="flex justify-between items-center px-6 py-4 max-w-screen-2xl mx-auto">
        <Link href="/" className="text-2xl font-black tracking-tighter text-primary italic uppercase">
          AI Briefing Hub
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight font-bold text-on-surface">
          <Link href="#" className="text-primary border-b-2 border-primary pb-1">Intelligence</Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Markets</Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Research</Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">Premium</Link>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block px-5 py-2 kinetic-gradient text-on-primary-container font-bold rounded-sm hover:brightness-110 active:scale-95 transition-all">
            Subscribe
          </button>
          <button 
            className="md:hidden p-2 hover:bg-surface-bright transition-all duration-300 rounded-full text-on-surface"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-container-high border-b border-outline-variant/20 shadow-xl py-4 px-6 flex flex-col gap-4 font-headline font-bold">
          <Link href="#" className="text-primary py-2">Intelligence</Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary py-2 transition-colors">Markets</Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary py-2 transition-colors">Research</Link>
          <Link href="#" className="text-on-surface-variant hover:text-primary py-2 transition-colors">Premium</Link>
          <button className="w-full mt-2 px-5 py-3 kinetic-gradient text-on-primary-container font-bold rounded-sm hover:brightness-110 active:scale-95 transition-all">
            Subscribe Now
          </button>
        </div>
      )}
    </header>
  );
}
