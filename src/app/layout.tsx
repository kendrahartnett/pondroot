import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "pondroot | A stronger start. A clearer path.",
  description: "A stronger start. A clearer path. Accessible digital job-search preparation, in development.",
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip" href="#main">Skip to content</a>{children}</body></html>;
}
