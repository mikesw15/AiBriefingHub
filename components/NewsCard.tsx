'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export interface NewsCardProps {
  title: string;
  summary: string;
  category: string;
  readTime: string;
  imageUrl: string;
  href: string;
  categoryTheme?: 'primary' | 'secondary' | 'tertiary';
}

export default function NewsCard({
  title,
  summary,
  category,
  readTime,
  imageUrl,
  href,
  categoryTheme = 'primary'
}: NewsCardProps) {
  
  const themeStyles = {
    primary: 'bg-primary text-on-primary-container',
    secondary: 'bg-secondary text-on-secondary',
    tertiary: 'bg-tertiary text-on-tertiary',
  };

  return (
    <motion.article 
      initial="rest"
      whileHover="hover"
      variants={{
        rest: { y: 0 },
        hover: { y: -6 }
      }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className="group relative bg-surface-container hover:bg-surface-container-high transition-colors duration-300 p-4 rounded-sm flex flex-col h-full border border-transparent hover:border-primary/20 hover:shadow-[0_10px_30px_-10px_rgba(143,245,255,0.1)]"
    >
      <div className="relative overflow-hidden mb-6 aspect-video rounded-sm bg-surface-container-highest">
        <motion.div
          variants={{
            rest: { scale: 1, y: 0 },
            hover: { scale: 1.08, y: -4 }
          }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="w-full h-full relative"
        >
          <Image 
            src={imageUrl} 
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <span className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-sm ${themeStyles[categoryTheme]}`}>
          {category}
        </span>
      </div>
      
      <h3 className="font-headline text-2xl font-bold leading-tight mb-3 text-on-surface group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="font-body text-on-surface-variant text-sm mb-6 flex-grow leading-relaxed">
        {summary}
      </p>
      
      <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10 mt-auto">
        <span className="text-[10px] font-bold text-outline uppercase tracking-widest">{readTime}</span>
        <Link href={href} className="text-primary text-sm font-bold flex items-center gap-1 group/link">
          READ BRIEFING <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}
