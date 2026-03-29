'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import VideoCard from '@/components/VideoCard';
import Link from 'next/link';
import { ArrowRight, Zap, Terminal, Brain, Video, Database, Check } from 'lucide-react';

// Mock data for dynamic rendering (WordPress ready)
const newsArticles = [
  {
    id: 1,
    title: "OpenAI's SearchGPT: The End of SEO as We Know It?",
    summary: "A deep dive into the conversational search engine and its impact on digital real estate and traffic arbitration.",
    category: "Markets",
    readTime: "4 min read",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCff7oL1ePLnvrqhzPRF1ofI4fP2tqqkOmT-MHQTeXHbRhn5mlzvK7qQzimyiCf0b58AOFKflAq2XYl8iCDaruGp5IP5lveri01gFT9sr3KHvW8KIJ9tEYq11nnO4hzhmpK_Q9nHwmtAf5aoBMm6Cc3jxGKKb-SqBRnP-DjwSviiGOHGTvkBKKiE0IT8xTK1e1OgzUUSYH4xzso18FxjS8PyIxr1PgxPwKYkLlJ1MUYyvGXcbFoZ9H161-Z1hTCiFzP01NHsuzcGjqu",
    href: "/markets/searchgpt",
    categoryTheme: "primary" as const
  },
  {
    id: 2,
    title: "Llama 4: Why Parameter Count is No Longer the Metric",
    summary: "Efficiency benchmarks reveal that Meta's upcoming architecture focuses on latency and reasoning depth over sheer size.",
    category: "Intelligence",
    readTime: "6 min read",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq1b7z33kcNka_qZ5HsXC2RP3tL8OmJeKTYRouKpKoya0Yp-J_LT9Wt3UySX2kcvKkiWKQfCGs15I3Lmk7NAImm7idFHTneh3rfT0_vvKHepQKBedx-3T8cDvA5_CnBtdGRkCizvTa4GDGZshgITQ8iNF9zz_9iWzZEkbmWNBQyd_9ysyR_nCmB_aggsEK8TqfDaSqSXpdDJdnq2jLE7JbaLRomcrsfyDetGJt_aGWeZO9zAl8zTFwhColxsOVGdBumG3dVJzx25C8",
    href: "/intelligence/llama4",
    categoryTheme: "secondary" as const
  },
  {
    id: 3,
    title: "The H100 Bottleneck is Breaking: What's Next?",
    summary: "Alternative chip architectures from startups are finally hitting production. Here's who is challenging Nvidia.",
    category: "Research",
    readTime: "8 min read",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvmEGRLyBw2W8eak4OQFpJQVXnZqWs7nBzY51rSQPjUs6OHRMaTKGUAZNEZ6nTRPmUJqSbCgLG5rKXG10tGgfj4zMzQWYWL2WwtHsf2PJ7mprKEd5Mxk8N3LAeULpzu7ALUcqKYwPW3FGB_tCyhzSci4sfdf0ncGjlKIEFFbHeH_lu5Gn8BJ7CwUSHwmhXBWbl08tnV0OXdQzrqjbm-tVMPfeZZkXzmXrmKn5T1-tj5I9aRlT2TnBJru2G761DLoBTIhN7AOM7mWQY",
    href: "/research/h100-bottleneck",
    categoryTheme: "tertiary" as const
  }
];

const videoClips = [
  { videoId: 'dQw4w9WgXcQ', title: 'GPT-5: Everything we know so far in 60 seconds', hiddenClasses: '' },
  { videoId: 'jNQXAC9IVRw', title: 'How to use Claude 3.5 Sonnet Artifacts for coding', hiddenClasses: '' },
  { videoId: 'M7lc1UVf-VE', title: 'The rise of AI Agents: Devin vs OpenDevin', hiddenClasses: 'hidden md:block' },
  { videoId: '2g811Eo7K8U', title: "Nvidia's new supercomputer is absolutely insane", hiddenClasses: 'hidden lg:block' },
  { videoId: 'kJQP7kiw5Fk', title: 'AI video is officially indistinguishable from reality', hiddenClasses: 'hidden lg:block' },
];

const tools = [
  { name: 'Cursor AI', desc: "The AI-first code editor that's actually changing how we build software. Our #1 pick for 2024.", icon: Terminal, colorClass: 'kinetic-gradient text-on-primary-container' },
  { name: 'Perplexity Pro', desc: "Ditch Google. Search with citation-backed AI results for high-velocity research workflows.", icon: Brain, colorClass: 'bg-secondary text-on-secondary' },
  { name: 'Luma Dream Machine', desc: "High-fidelity video generation. The standard for cinematic AI-generated content production.", icon: Video, colorClass: 'bg-tertiary text-on-tertiary' },
  { name: 'Pinecone DB', desc: "The managed vector database for building scalable AI applications with long-term memory.", icon: Database, colorClass: 'bg-surface-bright text-primary' },
];

export default function Home() {
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual newsletter integration (Mailchimp, ConvertKit, etc.)
    alert("Subscription integration ready for backend!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10 py-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-primary uppercase">System Ready: V2.4</span>
            </div>
            
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none mb-6">
              ACCELERATE YOUR <br/>
              <span className="text-transparent bg-clip-text kinetic-gradient">AI INTELLIGENCE</span>
            </h1>
            
            <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              High-signal briefings for the post-AGI economy. We curate the noise so you can dominate the kinetic landscape of artificial intelligence.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
              <div className="w-full relative">
                <input 
                  type="email" 
                  required 
                  placeholder="Enter your business email" 
                  className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant/20 focus:border-primary focus:ring-0 text-on-surface px-4 py-4 transition-all duration-300 placeholder:text-outline outline-none"
                />
              </div>
              <button 
                type="submit" 
                className="w-full md:w-auto px-8 py-4 kinetic-gradient text-on-primary-container font-black uppercase tracking-wider rounded-sm hover:brightness-110 active:scale-95 transition-all whitespace-nowrap"
              >
                Join Elite
              </button>
            </form>
            <p className="mt-4 text-xs font-medium text-outline">Join 50k+ AI Engineers & Market Analysts. No fluff. Just Signal.</p>
          </div>
        </section>

        {/* Intelligence Feed */}
        <section className="px-6 py-20 bg-surface-container-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <h2 className="font-headline text-3xl font-black tracking-tight mb-2">INTELLIGENCE FEED</h2>
                <div className="h-1 w-20 bg-primary"></div>
              </div>
              <Link href="/intelligence" className="group flex items-center gap-2 text-primary font-bold tracking-tighter hover:gap-4 transition-all w-fit">
                VIEW ALL UPDATES <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <NewsCard key={article.id} {...article} />
              ))}
            </div>
          </div>
        </section>

        {/* Kinetic Clips (YouTube Shorts) */}
        <section className="px-6 py-20 bg-surface">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <Zap className="text-secondary" size={36} fill="currentColor" />
              <h2 className="font-headline text-3xl font-black tracking-tight uppercase">AI Clips</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
              {videoClips.map((clip, index) => (
                <VideoCard key={index} {...clip} />
              ))}
            </div>
          </div>
        </section>

        {/* Operational Toolkit */}
        <section className="px-6 py-20 bg-surface-container-low border-y border-outline-variant/5">
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="font-headline text-sm font-black tracking-widest text-outline uppercase">OPERATIONAL TOOLKIT</h2>
              <span className="text-[10px] text-primary bg-primary/10 px-2 py-1 font-bold rounded-sm w-fit">SPONSORED RECOMMENDATIONS</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <Link key={index} href={`/tools/${tool.name.toLowerCase()}`} className="group block p-6 bg-surface-container border border-outline-variant/10 hover:border-primary transition-all duration-300 rounded-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-sm flex items-center justify-center ${tool.colorClass}`}>
                        <Icon size={20} />
                      </div>
                      <span className="font-headline font-bold text-on-surface">{tool.name}</span>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">{tool.desc}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Newsletter Growth Hub */}
        <section className="px-6 py-24 bg-surface-container-lowest relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
              STAY AHEAD OF THE <span className="text-primary italic">AI</span> SHIFT
            </h2>
            <p className="font-body text-on-surface-variant text-base md:text-lg mb-10 max-w-2xl mx-auto">
              Three times a week, we deliver the high-density intelligence you need to navigate the AI revolution. No noise, just operational insights.
            </p>
            
            <div className="bg-surface-container border border-outline-variant/20 p-6 md:p-12 rounded-sm shadow-2xl">
              <form onSubmit={handleSubscribe} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="fullName" className="sr-only">Full Name</label>
                    <input 
                      id="fullName"
                      type="text" 
                      required 
                      placeholder="Full Name" 
                      className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-4 py-4 text-on-surface outline-none transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="workEmail" className="sr-only">Work Email</label>
                    <input 
                      id="workEmail"
                      type="email" 
                      required 
                      placeholder="Work Email" 
                      className="w-full bg-surface-container-highest border-0 border-b-2 border-outline-variant focus:border-primary focus:ring-0 px-4 py-4 text-on-surface outline-none transition-colors"
                    />
                  </div>
                </div>
                <button 
                  type="submit" 
                  className="w-full kinetic-gradient text-on-primary-container font-black py-4 uppercase tracking-[0.1em] md:tracking-[0.2em] hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 rounded-sm"
                >
                  JOIN THE INTELLIGENCE NETWORK <Zap size={20} fill="currentColor" />
                </button>
              </form>
              
              <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-8 text-[10px] font-black text-outline uppercase tracking-widest">
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> NO SPAM EVER</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> 52k+ SUBSCRIBERS</div>
                <div className="flex items-center gap-2"><Check size={14} className="text-primary" /> UNLOCK PREMIUM ARCHIVE</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
