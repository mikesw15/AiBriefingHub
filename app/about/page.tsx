import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary/30 antialiased">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-5xl md:text-6xl font-black tracking-tighter mb-8 uppercase">
            About <span className="text-primary italic">AI Briefing Hub</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-2xl font-medium text-on-surface-variant mb-8 leading-relaxed">
              Navigating the post-AGI economy requires more than just news. It requires operational intelligence.
            </p>
            
            <div className="space-y-6 text-on-surface-variant">
              <p>
                At the AI Briefing Hub, our mission is to equip operators, investors, and builders with premium, unvarnished insights into the rapidly accelerating frontier of artificial intelligence. Information asymmetry is the defining characteristic of the modern technological landscape; we exist to give you the unfair advantage.
              </p>
              <p>
                We cut through the noise of mainstream hype to deliver proprietary research, strategic foresight, and actionable intelligence. Whether it's analyzing the latest reasoning models, tracking compute infrastructure shifts, or decoding regulatory frameworks, our briefings are designed for those who are actively shaping the future.
              </p>
              <p>
                We are not just reporting on the paradigm shift—we are arming you to lead it.
              </p>
            </div>

            <div className="mt-12 p-6 border border-primary/20 bg-primary/5 rounded-sm">
              <p className="font-mono text-sm text-primary uppercase tracking-widest">
                [Publication Scheduled: TBD 2026]
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
