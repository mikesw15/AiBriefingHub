'use client';

import { motion } from 'motion/react';

export interface VideoCardProps {
  title: string;
  videoId: string;
  hiddenClasses?: string;
}

export default function VideoCard({ title, videoId, hiddenClasses = '' }: VideoCardProps) {
  return (
    <motion.div 
      initial="rest"
      whileHover="hover"
      variants={{
        rest: { y: 0, scale: 1 },
        hover: { y: -6, scale: 1.02 }
      }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className={`aspect-[9/16] bg-surface-container rounded-lg overflow-hidden relative group border border-outline-variant/10 hover:border-primary/40 hover:shadow-[0_10px_30px_-10px_rgba(143,245,255,0.15)] transition-colors ${hiddenClasses}`}
    >
      <iframe 
        className="w-full h-full" 
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`} 
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        loading="lazy"
      ></iframe>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">
        <p className="text-xs font-bold text-white line-clamp-2 leading-snug">{title}</p>
      </div>
    </motion.div>
  );
}
