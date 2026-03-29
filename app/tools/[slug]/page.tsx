import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Terminal, Brain, Video, Database, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const toolsData = {
  'cursor': {
    name: 'Cursor',
    desc: 'The AI-first code editor that actually understands your codebase. Built on VS Code.',
    icon: Terminal,
    colorClass: 'bg-primary/10 text-primary',
    longDesc: 'Cursor is a fork of VS Code that integrates advanced AI capabilities directly into the editor. It features a powerful chat interface, inline code generation, and the ability to understand your entire codebase context.',
    features: ['Codebase-wide context', 'Inline generation', 'Familiar VS Code environment', 'Privacy mode'],
    url: 'https://cursor.sh'
  },
  'perplexity': {
    name: 'Perplexity',
    desc: 'The conversational search engine that provides cited answers, not just links.',
    icon: Brain,
    colorClass: 'bg-secondary/10 text-secondary',
    longDesc: 'Perplexity AI is a search engine that uses large language models to provide direct answers to your questions, complete with inline citations from reliable sources across the web.',
    features: ['Cited answers', 'Follow-up questions', 'Pro search mode', 'File uploads'],
    url: 'https://perplexity.ai'
  },
  'midjourney': {
    name: 'Midjourney',
    desc: 'State-of-the-art image generation model accessible via Discord.',
    icon: Video,
    colorClass: 'bg-tertiary/10 text-tertiary',
    longDesc: 'Midjourney is an independent research lab exploring new mediums of thought and expanding the imaginative powers of the human species. Their image generation model is currently one of the most advanced available.',
    features: ['High-fidelity generation', 'Stylistic control', 'V6 architecture', 'Discord integration'],
    url: 'https://midjourney.com'
  },
  'claude': {
    name: 'Claude',
    desc: 'Anthropic\'s flagship model with a 200k context window and advanced reasoning.',
    icon: Database,
    colorClass: 'bg-primary/10 text-primary',
    longDesc: 'Claude is a family of foundational AI models developed by Anthropic. Known for its massive context window, nuanced reasoning, and focus on safety and helpfulness.',
    features: ['200k context window', 'Artifacts UI', 'Advanced reasoning', 'Vision capabilities'],
    url: 'https://anthropic.com/claude'
  }
};

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const tool = toolsData[resolvedParams.slug as keyof typeof toolsData];

  if (!tool) {
    return (
      <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary/30 antialiased">
        <Header />
        <main className="flex-grow pt-32 pb-20 px-6 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-headline text-4xl font-black mb-4">Tool Not Found</h1>
            <Link href="/" className="text-primary hover:underline">Return to Home</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = tool.icon;

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary/30 antialiased">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-on-surface-variant hover:text-primary text-sm font-bold uppercase tracking-wider mb-8 inline-block transition-colors">
            &larr; Back to Toolkit
          </Link>
          
          <div className="bg-surface-container p-8 md:p-12 rounded-sm border border-outline-variant/10">
            <div className="flex items-center gap-6 mb-8">
              <div className={`w-20 h-20 rounded-sm flex items-center justify-center ${tool.colorClass}`}>
                <Icon size={40} />
              </div>
              <div>
                <h1 className="font-headline text-4xl md:text-5xl font-black tracking-tighter uppercase">{tool.name}</h1>
                <p className="text-on-surface-variant text-lg mt-2">{tool.desc}</p>
              </div>
            </div>
            
            <div className="h-px w-full bg-outline-variant/10 my-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-6">
                <h2 className="font-headline text-2xl font-bold uppercase tracking-wide">Overview</h2>
                <p className="text-on-surface-variant leading-relaxed text-lg">
                  {tool.longDesc}
                </p>
                
                <h2 className="font-headline text-2xl font-bold uppercase tracking-wide pt-6">Key Features</h2>
                <ul className="space-y-3">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-on-surface-variant">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <div className="bg-surface p-6 rounded-sm border border-outline-variant/10 sticky top-32">
                  <h3 className="font-headline font-bold text-sm uppercase tracking-widest text-outline mb-4">Action</h3>
                  <a 
                    href={tool.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-4 kinetic-gradient text-on-primary-container font-black uppercase tracking-wider rounded-sm hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    Get {tool.name} <ArrowRight size={18} />
                  </a>
                  <p className="text-xs text-on-surface-variant text-center mt-4 opacity-60">
                    * This is a sponsored recommendation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
