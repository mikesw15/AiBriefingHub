import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';

const intelligenceArticles = [
  {
    id: 1,
    title: "Llama 4: Why Parameter Count is No Longer the Metric",
    summary: "Efficiency benchmarks reveal that Meta's upcoming architecture focuses on latency and reasoning depth over sheer size.",
    category: "Intelligence",
    readTime: "6 min read",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq1b7z33kcNka_qZ5HsXC2RP3tL8OmJeKTYRouKpKoya0Yp-J_LT9Wt3UySX2kcvKkiWKQfCGs15I3Lmk7NAImm7idFHTneh3rfT0_vvKHepQKBedx-3T8cDvA5_CnBtdGRkCizvTa4GDGZshgITQ8iNF9zz_9iWzZEkbmWNBQyd_9ysyR_nCmB_aggsEK8TqfDaSqSXpdDJdnq2jLE7JbaLRomcrsfyDetGJt_aGWeZO9zAl8zTFwhColxsOVGdBumG3dVJzx25C8",
    href: "/intelligence/llama4",
    categoryTheme: "secondary" as const
  },
  {
    id: 4,
    title: "The Rise of Small Language Models in Edge Computing",
    summary: "How SLMs are outperforming massive models in specific, constrained environments.",
    category: "Intelligence",
    readTime: "5 min read",
    imageUrl: "https://picsum.photos/seed/ai-edge/800/600",
    href: "/intelligence/slm-edge",
    categoryTheme: "secondary" as const
  },
  {
    id: 5,
    title: "Decoding the Latest Claude 3.5 Sonnet Updates",
    summary: "A comprehensive analysis of the new coding capabilities and artifact generation.",
    category: "Intelligence",
    readTime: "7 min read",
    imageUrl: "https://picsum.photos/seed/claude/800/600",
    href: "/intelligence/claude-update",
    categoryTheme: "secondary" as const
  }
];

export default function IntelligencePage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary/30 antialiased">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-12">
            <h1 className="font-headline text-5xl md:text-6xl font-black tracking-tighter mb-4 uppercase">
              <span className="text-secondary italic">Intelligence</span> Feed
            </h1>
            <p className="text-on-surface-variant text-lg max-w-2xl">
              Deep dives into the latest AI models, architectural shifts, and the technical breakthroughs shaping the post-AGI economy.
            </p>
            <div className="h-1 w-20 bg-secondary mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {intelligenceArticles.map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
