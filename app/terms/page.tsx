import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary/30 antialiased">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase">Terms of Intelligence</h1>
          <div className="prose prose-invert prose-p:text-on-surface-variant prose-headings:font-headline prose-headings:font-bold max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using AI Briefing Hub, you agree to be bound by these Terms of Intelligence. If you disagree with any part of the terms, you may not access the service.</p>
            <h2>2. Intellectual Property</h2>
            <p>The service and its original content, features, and functionality are and will remain the exclusive property of AI Briefing Hub and its licensors. Our content is protected by copyright, trademark, and other laws.</p>
            <h2>3. User Conduct</h2>
            <p>You agree not to use the service for any unlawful purpose or in any way that interrupts, damages, or impairs the service. You may not scrape, frame, or mirror our content without explicit permission.</p>
            <h2>4. Disclaimer</h2>
            <p>The information provided on AI Briefing Hub is for informational purposes only. We make no warranties about the completeness, reliability, or accuracy of this information. Any action you take upon the information on this website is strictly at your own risk.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
