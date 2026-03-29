import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary/30 antialiased">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl font-black tracking-tighter mb-8 uppercase">Privacy Policy</h1>
          <div className="prose prose-invert prose-p:text-on-surface-variant prose-headings:font-headline prose-headings:font-bold max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you subscribe to our newsletter, participate in our community, or contact us for support. This may include your name, email address, and any other information you choose to provide.</p>
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to deliver our newsletter, improve our services, and communicate with you about AI news, updates, and promotional offers.</p>
            <h2>3. Data Security</h2>
            <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>
            <h2>4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@aibriefinghub.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
