import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, MessageSquare, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary/30 antialiased">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-5xl md:text-6xl font-black tracking-tighter mb-4 uppercase">Contact <span className="text-primary italic">AI</span></h1>
          <p className="text-on-surface-variant text-lg max-w-2xl mb-12">
            Have a tip, partnership inquiry, or feedback? Reach out to our team. We read every message.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface-container rounded-sm flex items-center justify-center text-primary shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl mb-1">Editorial Tips</h3>
                  <p className="text-on-surface-variant mb-2">Got a scoop or a research paper we should cover?</p>
                  <a href="mailto:tips@aibriefinghub.com" className="text-primary hover:underline font-bold">tips@aibriefinghub.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface-container rounded-sm flex items-center justify-center text-secondary shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h3 className="font-headline font-bold text-xl mb-1">Partnerships</h3>
                  <p className="text-on-surface-variant mb-2">Interested in sponsoring our newsletter or site?</p>
                  <a href="mailto:partners@aibriefinghub.com" className="text-secondary hover:underline font-bold">partners@aibriefinghub.com</a>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container p-8 rounded-sm border border-outline-variant/10">
              <h3 className="font-headline font-bold text-2xl mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wider">Name</label>
                  <input type="text" className="w-full bg-surface border border-outline-variant/20 rounded-sm px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full bg-surface border border-outline-variant/20 rounded-sm px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors" placeholder="jane@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-on-surface-variant mb-2 uppercase tracking-wider">Message</label>
                  <textarea rows={4} className="w-full bg-surface border border-outline-variant/20 rounded-sm px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button type="button" className="w-full py-4 kinetic-gradient text-on-primary-container font-black uppercase tracking-wider rounded-sm hover:brightness-110 active:scale-95 transition-all">
                  Send Transmission
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
