import Link from 'next/link';
export function ToolPreview({ title, children }: { title: string; children: React.ReactNode }) {
 return <main id="main" tabIndex={-1} className="tool-page"><Link className="back" href="/">← Back to my next steps</Link><div className="tool-panel"><p className="eyebrow">Foundation preview</p><h1>{title}</h1>{children}<p className="availability">This tool is not available yet. This page lets you explore the navigation while Pondroot is being built.</p><Link className="button secondary" href="/">Return to my next steps</Link></div></main>;
}
