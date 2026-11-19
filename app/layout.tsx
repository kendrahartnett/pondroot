import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import './globals.css';
import { Navigation } from './navigation';

export const metadata: Metadata = { title: { default: 'Pondroot — A stronger start. A clearer path.', template: '%s | Pondroot' }, description: 'Start with your strengths. Prepare for your next step into work.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip" href="#main">Skip to main content</a><header className="header"><div className="brand-row"><Link href="/" aria-label="Pondroot home"><Image src="/brand/pondroot-wordmark.png" width={2172} height={724} alt="Pondroot" className="wordmark" priority /></Link><p className="tagline">A stronger start. A clearer path.</p><span className="guest">No account needed</span></div><Navigation /></header>{children}<footer><Link href="/" aria-label="Pondroot home"><Image src="/brand/pondroot-wordmark.png" width={2172} height={724} alt="Pondroot" className="wordmark" /></Link><p>One step at a time. Your experience matters.</p><span>Foundation preview · Tools are being built</span></footer></body></html>;
}
