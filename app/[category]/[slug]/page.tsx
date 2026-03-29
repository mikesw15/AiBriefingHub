import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const articleData = {
  'searchgpt': {
    title: "OpenAI's SearchGPT: The End of SEO as We Know It?",
    summary: "A deep dive into the conversational search engine and its impact on digital real estate and traffic arbitration.",
    category: "Markets",
    readTime: "4 min read",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCff7oL1ePLnvrqhzPRF1ofI4fP2tqqkOmT-MHQTeXHbRhn5mlzvK7qQzimyiCf0b58AOFKflAq2XYl8iCDaruGp5IP5lveri01gFT9sr3KHvW8KIJ9tEYq11nnO4hzhmpK_Q9nHwmtAf5aoBMm6Cc3jxGKKb-SqBRnP-DjwSviiGOHGTvkBKKiE0IT8xTK1e1OgzUUSYH4xzso18FxjS8PyIxr1PgxPwKYkLlJ1MUYyvGXcbFoZ9H161-Z1hTCiFzP01NHsuzcGjqu",
    content: "SearchGPT is a prototype of new AI search features that give you fast and timely answers with clear and relevant sources. We're testing it with a small group of users and publishers to get feedback. While this prototype is temporary, we plan to integrate the best of these features directly into ChatGPT in the future.",
    author: "AI Briefing Desk",
    date: "March 29, 2026"
  },
  'llama4': {
    title: "Llama 4: Why Parameter Count is No Longer the Metric",
    summary: "Efficiency benchmarks reveal that Meta's upcoming architecture focuses on latency and reasoning depth over sheer size.",
    category: "Intelligence",
    readTime: "6 min read",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq1b7z33kcNka_qZ5HsXC2RP3tL8OmJeKTYRouKpKoya0Yp-J_LT9Wt3UySX2kcvKkiWKQfCGs15I3Lmk7NAImm7idFHTneh3rfT0_vvKHepQKBedx-3T8cDvA5_CnBtdGRkCizvTa4GDGZshgITQ8iNF9zz_9iWzZEkbmWNBQyd_9ysyR_nCmB_aggsEK8TqfDaSqSXpdDJdnq2jLE7JbaLRomcrsfyDetGJt_aGWeZO9zAl8zTFwhColxsOVGdBumG3dVJzx25C8",
    content: "The AI community has long been obsessed with parameter counts. However, the upcoming Llama 4 architecture suggests a paradigm shift. Meta's researchers are prioritizing inference speed, memory efficiency, and depth of reasoning over simply scaling up the number of parameters. This approach aims to make highly capable models accessible on consumer hardware.",
    author: "Tech Analysis Team",
    date: "March 28, 2026"
  },
  'h100-bottleneck': {
    title: "The H100 Bottleneck is Breaking: What's Next?",
    summary: "Alternative chip architectures from startups are finally hitting production. Here's who is challenging Nvidia.",
    category: "Research",
    readTime: "8 min read",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvmEGRLyBw2W8eak4OQFpJQVXnZqWs7nBzY51rSQPjUs6OHRMaTKGUAZNEZ6nTRPmUJqSbCgLG5rKXG10tGgfj4zMzQWYWL2WwtHsf2PJ7mprKEd5Mxk8N3LAeULpzu7ALUcqKYwPW3FGB_tCyhzSci4sfdf0ncGjlKIEFFbHeH_lu5Gn8BJ7CwUSHwmhXBWbl08tnV0OXdQzrqjbm-tVMPfeZZkXzmXrmKn5T1-tj5I9aRlT2TnBJru2G761DLoBTIhN7AOM7mWQY",
    content: "For the past two years, the AI industry has been constrained by the availability of Nvidia H100 GPUs. However, the landscape is shifting. Startups developing novel architectures, such as Groq's LPU and Cerebras's wafer-scale engines, are moving from prototype to production. This diversification of the hardware ecosystem promises to lower inference costs and accelerate AI deployment.",
    author: "Hardware Research Group",
    date: "March 27, 2026"
  }
};

export default async function ArticlePage({ params }: { params: Promise<{ category: string, slug: string }> }) {
  const resolvedParams = await params;
  const article = articleData[resolvedParams.slug as keyof typeof articleData];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary/30 antialiased">
        <Header />
        <main className="flex-grow pt-32 pb-20 px-6 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-headline text-4xl font-black mb-4">Article Not Found</h1>
            <Link href="/" className="text-primary hover:underline">Return to Home</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary/30 antialiased">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6">
        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href={`/${resolvedParams.category}`} className="text-primary font-bold uppercase tracking-wider text-sm hover:underline mb-4 inline-block">
              {article.category}
            </Link>
            <h1 className="font-headline text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-on-surface-variant text-sm font-medium">
              <span>{article.author}</span>
              <span className="w-1 h-1 rounded-full bg-outline-variant/30"></span>
              <span>{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-outline-variant/30"></span>
              <span>{article.readTime}</span>
            </div>
          </div>
          
          <div className="relative w-full aspect-[21/9] mb-12 rounded-sm overflow-hidden">
            <Image 
              src={article.imageUrl} 
              alt={article.title} 
              fill 
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="prose prose-invert prose-lg prose-p:text-on-surface-variant prose-headings:font-headline prose-headings:font-bold max-w-3xl mx-auto">
            <p className="text-xl font-medium text-on-surface mb-8 leading-relaxed">
              {article.summary}
            </p>
            <p>
              {article.content}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2>The Future Implications</h2>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
