import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';

const marketArticles = [
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
    id: 6,
    title: "AI Startup Valuations: The Bubble or the New Normal?",
    summary: "Analyzing the recent funding rounds of foundational model companies and AI infrastructure startups.",
    category: "Markets",
    readTime: "9 min read",
    imageUrl: "https://picsum.photos/seed/markets-ai/800/600",
    href: "/markets/valuations",
    categoryTheme: "primary" as const
  }
];

export default function MarketsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary/30 antialiased">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-12">
            <h1 className="font-headline text-5xl md:text-6xl font-black tracking-tighter mb-4 uppercase">
              <span className="text-primary italic">Markets</span> Analysis
            </h1>
            <p className="text-on-surface-variant text-lg max-w-2xl">
              Financial insights, startup valuations, and the economic impact of artificial intelligence across global industries.
            </p>
            <div className="h-1 w-20 bg-primary mt-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketArticles.map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
