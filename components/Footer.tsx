import Link from 'next/link';
import { Globe, Share2, Megaphone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full pt-20 pb-10 border-t border-outline-variant/10">
      <div className="flex flex-col items-center gap-8 px-8 w-full max-w-7xl mx-auto">
        <div className="text-xl font-black text-primary italic tracking-tighter uppercase">AI BRIEFING HUB</div>
        
        <nav className="flex flex-wrap justify-center gap-6 md:gap-12 font-body text-sm">
          <Link href="/about" className="text-on-surface-variant hover:text-secondary transition-colors">About</Link>
          <Link href="/privacy" className="text-on-surface-variant hover:text-secondary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="text-on-surface-variant hover:text-secondary transition-colors">Terms of Intelligence</Link>
          <Link href="/editorial" className="text-on-surface-variant hover:text-secondary transition-colors">Editorial Standards</Link>
          <Link href="/contact" className="text-on-surface-variant hover:text-secondary transition-colors">Contact AI</Link>
          <Link href="/admin" className="text-on-surface-variant hover:text-tertiary transition-colors">Admin</Link>
        </nav>
        
        <div className="flex gap-6 mt-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/10" aria-label="Global">
            <Globe size={20} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/10" aria-label="Share">
            <Share2 size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/10" aria-label="Campaigns">
            <Megaphone size={20} />
          </a>
        </div>
        
        <p className="font-body text-sm text-on-surface-variant opacity-50 text-center tracking-widest mt-8 uppercase">
          © {new Date().getFullYear()} AI BRIEFING HUB. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
