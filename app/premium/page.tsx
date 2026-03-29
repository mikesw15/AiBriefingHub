'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function PremiumPage() {
  const [elitePrice, setElitePrice] = useState(49);
  const [currency, setCurrency] = useState('£');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const settingsDoc = await getDoc(doc(db, 'settings', 'global'));
        if (settingsDoc.exists()) {
          setElitePrice(settingsDoc.data().elitePrice);
          setCurrency(settingsDoc.data().currency);
        }
      } catch (error) {
        console.error("Error fetching settings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary/30 antialiased">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-primary font-bold tracking-widest uppercase">Loading Pricing...</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary/30 antialiased">
      <Header />
      <main className="flex-grow pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
              Unlock <span className="text-primary italic">Elite</span> Access
            </h1>
            <p className="text-on-surface-variant text-xl max-w-2xl mx-auto">
              Get the unfair advantage. Deep-dive reports, proprietary data, and direct access to our analyst network.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
            <div className="bg-surface-container p-8 rounded-sm border border-outline-variant/10">
              <h3 className="font-headline text-2xl font-bold mb-2">Free Tier</h3>
              <p className="text-on-surface-variant mb-6">The essential signals.</p>
              <div className="text-4xl font-black mb-8">{currency}0<span className="text-lg text-on-surface-variant font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><Check size={18} className="text-primary" /> Daily Briefings</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-primary" /> Public Market Updates</li>
                <li className="flex items-center gap-3 text-on-surface-variant opacity-50"><Check size={18} /> Proprietary Research</li>
                <li className="flex items-center gap-3 text-on-surface-variant opacity-50"><Check size={18} /> Analyst Q&A</li>
              </ul>
              <button className="w-full py-3 border border-primary text-primary font-bold uppercase tracking-wider hover:bg-primary/10 transition-colors">Current Plan</button>
            </div>
            
            <div className="bg-surface-container-high p-8 rounded-sm border border-primary relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-on-primary-container text-xs font-bold px-3 py-1 uppercase tracking-wider">Most Popular</div>
              <h3 className="font-headline text-2xl font-bold mb-2 text-primary">Elite Access</h3>
              <p className="text-on-surface-variant mb-6">For operators and investors.</p>
              <div className="text-4xl font-black mb-8">{currency}{elitePrice}<span className="text-lg text-on-surface-variant font-normal">/mo</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><Check size={18} className="text-primary" /> Everything in Free</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-primary" /> Proprietary Research Reports</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-primary" /> Weekly Analyst Q&A Calls</li>
                <li className="flex items-center gap-3"><Check size={18} className="text-primary" /> Private Discord Community</li>
              </ul>
              <button className="w-full py-3 kinetic-gradient text-on-primary-container font-bold uppercase tracking-wider hover:brightness-110 transition-all">Upgrade Now</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
