import type {Metadata} from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css'; // Global styles

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Briefing Hub | Kinetic Intelligence',
  description: 'High-signal briefings for the post-AGI economy. We curate the noise so you can dominate the kinetic landscape of artificial intelligence.',
  openGraph: {
    title: 'AI Briefing Hub | Kinetic Intelligence',
    description: 'High-signal briefings for the post-AGI economy.',
    type: 'website',
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} dark`}>
      <body className="font-body selection:bg-primary selection:text-on-primary-container antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
