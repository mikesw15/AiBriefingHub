import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';

const researchArticles = [
  {
    id: 3,
    title: "The H100 Bottleneck is Breaking: What's Next?",
    summary: "Alternative chip architectures from startups are finally hitting production. Here's who is challenging Nvidia.",
    category: "Research",
    readTime: "8 min read",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvmEGRLyBw2W8eak4OQFpJQVXnZqWs7nBzY51rSQPjUs6OHRMaTKGUAZNEZ6nTRPmUJqSbCgLG5rKXG10tGgfj4zMzQWYWL2WwtHsf2PJ7mprKEd5Mxk8N3LAeULpzu7ALUcqKYwPW3FGB_tCyhzSci4sfdf0ncGjlKIEFFbHeH_lu5Gn8BJ7CwUSHwmhXBWbl08tnV0OXdQzrqjbm-tVMPfeZZkXzmXrmKn5T1-tj5I9aRlT2TnBJru2G761DLoBTIhN7AOM7mWQY",
    href: "/research/h100-bottleneck",
    categoryTheme: "tertiary" as const
  },
  {
    id: 7,
    title: "Q-Learning in LLMs: The Path to AGI?",
    summary: "A breakdown of recent papers suggesting reinforcement learning breakthroughs in reasoning capabilities.",
    category: "Research",
    readTime: "12 min read",
    imageUrl: "https://picsum.photos/seed/research-q/800/600",
    href: "/research/q-learning",
    categoryTheme: "tertiary" as const
  }
];

export default function ResearchPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary/30 antialiased">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-12">
            <h1 className="font-headline text-5xl md:text-6xl font-black tracking-tighter mb-4 uppercase">
              <span className="text-tertiary italic">Research</span> Papers
            </h1>
            <p className="text-on-surface-variant text-lg max-w-2xl">
              Academic breakdowns, hardware innovations, and the theoretical frontiers of machine learning.
            </p>
            <div className="h-1 w-20 bg-tertiary mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchArticles.map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
