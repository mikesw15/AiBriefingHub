import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EditorialPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary/30 antialiased">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase">Editorial Standards</h1>
          <div className="prose prose-invert prose-p:text-on-surface-variant prose-headings:font-headline prose-headings:font-bold max-w-none">
            <p>At AI Briefing Hub, we are committed to providing high-signal, noise-free intelligence on the artificial intelligence industry.</p>
            <h2>1. Accuracy and Verification</h2>
            <p>We prioritize accuracy above all else. Every claim, benchmark, and quote is verified against primary sources (research papers, official announcements, direct interviews) before publication.</p>
            <h2>2. Independence</h2>
            <p>Our editorial decisions are made independently of our advertisers and sponsors. Any sponsored content or affiliate links are clearly marked as such.</p>
            <h2>3. Corrections</h2>
            <p>When we make a mistake, we correct it promptly and transparently. Significant corrections will be noted at the top or bottom of the relevant article.</p>
            <h2>4. AI Usage in Content Creation</h2>
            <p>While we cover AI, our core analysis and editorial judgment are human-driven. We may use AI tools for research, summarization, or drafting, but all final content is reviewed, edited, and fact-checked by our human editorial team.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
